import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Platform, ScrollView } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

const profileIcon = require('./images/profile.png');
const settingsIcon = require('./images/settings.png');
const bellIcon = require('./images/bell.png');

const subjectList=[
    {title: 'Math'},
    {title: 'English'},
];

const subjectCnt = [0,0]
const addedSubject = []

const CreateAccountScreenT = ({ navigation }) => {

    const [phoneNumber, setPhoneNumber] = useState();

    const cityList = [
        {title: 'Andong'},
        {title: 'Ansan'},
        {title: 'Anseong'},
        {title: 'Anyang'},
        {title: 'Asan'},
        {title: 'Boryeong'},
        {title: 'Bucheon'},
        {title: 'Busan'},
        {title: 'Changwon'},
        {title: 'Cheonan'},
        {title: 'Cheongju'},
        {title: 'Chuncheon'},
        {title: 'Chungju'},
        {title: 'Daegu'},
        {title: 'Daejeon'},
        {title: 'Dangjin'},
        {title: 'Dongducheon'},
        {title: 'Donghae'},
        {title: 'Gangneung'},
        {title: 'Geoje'},
        {title: 'Gimcheon'},
        {title: 'Gimhae'},
        {title: 'Gimje'},
        {title: 'Gimpo'},
        {title: 'Gongju'},
        {title: 'Goyang'},
        {title: 'Gumi'},
        {title: 'Gunpo'},
        {title: 'Gunsan'},
        {title: 'Guri'},
        {title: 'Gwacheon'},
        {title: 'Gwangju'},
        {title: 'Gwangmyeong'},
        {title: 'Gwangyang'},
        {title: 'Gyeongju'},
        {title: 'Gyeongsan'},
        {title: 'Gyeryong'},
        {title: 'Hanam'},
        {title: 'Hwaseong'},
        {title: 'Icheon'},
        {title: 'Iksan'},
        {title: 'Incheon'},
        {title: 'Jecheon'},
        {title: 'Jeju'},
        {title: 'Jeongeup'},
        {title: 'Jeonju'},
        {title: 'Jinju'},
        {title: 'Miryang'},
        {title: 'Mokpo'},
        {title: 'Mungyeong'},
        {title: 'Naju'},
        {title: 'Namwon'},
        {title: 'Namyangju'},
        {title: 'Nonsan'},
        {title: 'Osan'},
        {title: 'Paju'},
        {title: 'Pocheon'},
        {title: 'Pohang'},
        {title: 'Pyeongtaek'},
        {title: 'Sacheon'},
        {title: 'Samcheok'},
        {title: 'Sangju'},
        {title: 'Sejong'},
        {title: 'Seogwipo'},
        {title: 'Seongnam'},
        {title: 'Seosan'},
        {title: 'Seoul'},
        {title: 'Siheung'},
        {title: 'Sokcho'},
        {title: 'Suncheon'},
        {title: 'Suwon'},
        {title: 'Taebaek'},
        {title: 'Tongyeong'},
        {title: 'Uijeongbu'},
        {title: 'Uiwang'},
        {title: 'Ulsan'},
        {title: 'Wonju'},
        {title: 'Yangju'},
        {title: 'Yangsan'},
        {title: 'Yecheon'},
        {title: 'Yeongcheon'},
        {title: 'Yeongju'},
        {title: 'Yeosu'},
        {title: 'Yongin'},
    ];

    const [city, setCity] = useState();
    const [cityIndex, setCityIndex] = useState();

    const finish = async() => {
        if (!city) {
            Alert.alert('Error', 'please select a city')
        }
        else {
            if (!phoneNumber) {
                Alert.alert('Error', 'please enter phone number')
            }
            else {
                navigation.navigate('HomeT')
            }
        }
    }

    const [refreshing, setRefreshing] = useState(false)
    
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
          setRefreshing(false);
        }, 10);
    }, []);
    
    const [selectedSubject, setSelectedSubject] = useState()

    const [subjects, setSubjects] = useState()
    
    const addSubject = async() => {
        subjectCnt[selectedSubject]+=1
        if(subjectCnt[selectedSubject]==1){
            addedSubject.push(subjectList[selectedSubject].title)
            setSubjects(subjects+"/"+subjectList[selectedSubject].title)
        }
        onRefresh()
    }

    const deleteSubject = async(todelete) => {
        const temp=[]
        for (let i = 0; i < addedSubject.length; i+=1) {
            if(addedSubject[i] != todelete) {
                temp.push(addedSubject[i])
            }
        }
        let a = addedSubject.length
        for (let i = 0; i < a; i+=1) {
            addedSubject.pop()
        }
        for (let i = 0; i < temp.length; i+=1) {
            addedSubject.push(temp[i])
        }
        for (let i = 0; i < subjectCnt.length; i+=1) {
            if (subjectList[i].title == todelete) {
                subjectCnt[i] = 0
            }
        }
        onRefresh()
    }
  
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

      // Dynamic backend URL depending on platform and environment
  const getBackendUrl = () => {
    if (Platform.OS === 'ios') {
      return 'http://192.168.75.255:8080';  // IP for local backend
    } else {
      return 'http://192.168.75.255:8080';   // Change this for Android as needed
    }
  };

  // Handle account creation
  const handleCreateAccount = async () => {
    // Check if all fields are filled
    if (!userId || !password || !confirmPassword) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    if(!city) {
      Alert.alert('Error', 'Please fill out all fields.');
      return;
    }

    try {
      // Send signup request to backend
      console.log(getBackendUrl())
      console.log(userId, phoneNumber, cityIndex, subjects, password)
      const response = await fetch(`http://192.168.75.126:8080/signupt`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: userId,
          contact: phoneNumber,
          region: cityIndex,
          subjects: subjects,
          role: true,
          password: password,
        }),
      });
      console.log("done")
      // Handle response from the backend
      if (response.ok) {
        Alert.alert('Success', 'Account created successfully!');
        navigation.navigate('HomeS');  // Navigate to login screen
      } else {
        const errorMessage = await response.text();
        Alert.alert('Error', errorMessage || 'Failed to create account.');
      }
    } catch (error) {
      console.log("Error found")
      Alert.alert('Error', 'Failed to connect to the server.');
      console.error('Signup error:', error);
    }
  };

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Create Your Account</Text>
        <Text style={styles.userId}>ID</Text>
        <TextInput
            style={styles.idInput}
            placeholder="Enter your user ID"
            placeholderTextColor="#888"
            value={userId}
            onChangeText={setUserId}
        />
        <Text style={styles.password}>Password</Text>
        <TextInput
            style={styles.passwordInput}
            placeholder="Enter your password"
            placeholderTextColor="#888"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
        />
        <Text style={styles.passwordConfirm}>Confirm Password</Text>
        <TextInput
            style={styles.passwordConfirmInput}
            placeholder="Confirm your password"
            placeholderTextColor="#888"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
        />
        <Text style={styles.section}>Subject</Text>
        <View style={styles.subjectContainer}>
            <SelectDropdown
                data={subjectList}
                search={true}
                onSelect={(selectedItem, index) => {
                    setSelectedSubject(index)
                }}
                renderButton={(selectedItem,) => {
                    return (
                        <View style={styles.dropdownButton}>
                            <Text style={styles.dropdownButtonText}>
                                {(selectedItem && selectedItem.title) || 'Select subject'}
                            </Text>
                        </View>
                    );
                }}
                renderItem={(item, isSelected) => {
                    return (
                        <View style={{...styles.dropdownItemStyle, ...(isSelected && {backgroundColor: '#D2D9DF'})}}>
                            <Text style={styles.dropdownItemTextStyle}>{item.title}</Text>
                        </View>
                    );
                }}
                showsVerticalScrollIndicator={false}
                dropdownStyle={styles.dropdownMenuStyle}
            />
            <TouchableOpacity onPress={() => addSubject()}>
                <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
        </View>

        <ScrollView>
            <View>
                { addedSubject.map((item) => {
                    return (
                        <TouchableOpacity onPress={() => deleteSubject(item)}>
                            <Text style={styles.scrollText}>{item}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </ScrollView>
        
        <Text style={styles.section}>Select your city</Text>
        <SelectDropdown
            data={cityList}
            onSelect={(selectedItem, index) => {
                setCity(selectedItem)
                setCityIndex(index)
            }}
            search={true}
            renderButton={(selectedItem,) => {
                return (
                    <View style={styles.dropdownButton}>
                        <Text style={styles.dropdownButtonText}>
                            {(selectedItem && selectedItem.title) || 'Select city'}
                        </Text>
                    </View>
                );
            }}
            renderItem={(item, isSelected) => {
                return (
                    <View style={{...styles.dropdownItemStyle, ...(isSelected && {backgroundColor: '#D2D9DF'})}}>
                        <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
                    </View>
                );
            }}
            showsVerticalScrollIndicator={false}
            dropdownStyle={styles.dropdownMenuStyle}
        />

        <Text style={styles.section}>Phone Number</Text>
        <View style={styles.numberContainer}>
        <TextInput style={styles.number} placeholder="Enter phone number without '-'" value={phoneNumber} onChangeText={setPhoneNumber}/>
        </View>
        <TouchableOpacity onPress={() => finish()}>
            <Text style={styles.finishButton}>Finish</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
            <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
        <Text style={styles.haveAccount}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F0F2F5',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginTop: 60,
    marginBottom: 90,
    textAlign: 'center',
    color: '#333',
    fontFamily: 'Georgia',
  },
  userId: {
    marginBottom: 10,
    marginLeft: 10,
  },
  idInput: {
    height: 48,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 16,
    marginBottom: 20,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  password: {
    marginBottom: 10,
    marginLeft: 10,
  },
  passwordInput: {
    height: 48,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 16,
    marginBottom: 20,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  passwordConfirm: {
    marginBottom: 10,
    marginLeft: 10,
  },
  passwordConfirmInput: {
    height: 48,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 16,
    marginBottom: 20,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  subjectContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    },
    section: {
        fontSize: 26,
    },
    addButtonText: {
        fontSize: 26,
        marginLeft: 20,
    },
    dropdownButtonText: {
        fontSize: 26,
        marginTop: 20,
        marginBottom: 20,
    },
    dropdownButton: {
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dropdownItemTextStyle: {
        fontSize: 18,
    },
    scrollText: {
        fontSize: 18,
    },
    checkContainer: {
        marginBottom: 10,
    },
    numberContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 10,
    },
    number: {
        fontSize: 18,
    },
    dropdownButton: {
        marginBottom: 10,
    },
    dropdownButtonText: {
        fontSize: 18,
    },
    finishButton: {
        fontSize: 28,
    },
  button: {
    backgroundColor: '#5D7EA7',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Arial',
  },
  haveAccount: {
    textAlign: 'center',
    fontSize: 15,
  },
  signInText: {
    color: '#5D7EA7',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Arial',
  },
});

export default CreateAccountScreenT;
