import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Button, Alert} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { CheckBox } from '@rneui/base';

const profileIcon = require('./images/profile.png');
const settingsIcon = require('./images/settings.png');
const bellIcon = require('./images/bell.png');

const subjectList=[
    {title: 'Math'},
    {title: 'English'},
];

const subjectCnt = [0,0]
const addedSubject = []

const InformationScreen = ({ navigation }) => {

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
    
    const addSubject = async() => {
        subjectCnt[selectedSubject]+=1
        if(subjectCnt[selectedSubject]==1){
            addedSubject.push(subjectList[selectedSubject].title)
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

    return (
        <View style={styles.container}>
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
                <Text style={styles.number}>010-</Text>
                <TextInput style={styles.number} placeholder="Enter phone number without '-'" value={phoneNumber} onChangeText={setPhoneNumber}/>
            </View>
            <TouchableOpacity onPress={() => finish()}>
                <Text style={styles.finishButton}>Finish</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    subjectContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
    },
    section: {
        fontSize: 26,
        marginBottom: 10,
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
        marginBottom: 20,
    },
    numberContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 20,
    },
    number: {
        fontSize: 18,
    },
    dropdownButton: {
        marginBottom: 20,
    },
    dropdownButtonText: {
        fontSize: 18,
    },
    finishButton: {
        fontSize: 28,
    }
});

export default InformationScreen;