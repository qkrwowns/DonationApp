import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Button, FlatList, RefreshControl} from 'react-native';
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

const HomeScreen = ({ navigation }) => {

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
            <View style={styles.upperContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('SettingS')}>
                    <Image source={settingsIcon} style={styles.settingsIcon}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('NotificationS')}>
                    <Image source={bellIcon} style={styles.bellIcon}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ProfileS')}>
                    <Image source={profileIcon} style={styles.profileIcon}/>
                </TouchableOpacity>
            </View>

            <View style={styles.horizontalContainer}>
                <Text style={styles.yourLocation}>Your Location: </Text>
                <Text style={styles.location}>ABCDEFG</Text>
                <TouchableOpacity onPress={() => navigation.navigate('ChangeLocationS')}>
                    <Text style={styles.change}>Change</Text>
                </TouchableOpacity>
            </View>

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

            <TouchableOpacity style={styles.circleButton} onPress={() => navigation.navigate('FoundS')}>
                <Text style={styles.circleButtonText}>Find</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    upperContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    settingsIcon: {
        height: 40,
        width: 40,
    },
    bellIcon: {
        height: 40,
        width: 40,
        marginLeft: 280,
    },
    profileIcon: {
        height: 40,
        width: 40,
        marginLeft: 10,
    },
    horizontalContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    yourLocation: {
        fontSize: 18,
        marginTop: 120,
    },
    location: {
        fontSize: 18,
        marginTop: 120,
    },
    change: {
        height: 20,
        fontSize: 18,
        color: 'blue',
        marginLeft: 20,
        marginTop: 120,
    },
    subjectContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    addButtonText: {
        fontSize: 26,
        marginTop: 20,
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
    circleButton: {
        backgroundColor: 'lime',
        borderRadius: 25,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
        width: 200,
        position: 'absolute',
        top: 500,
    },
    circleButtonText: {
        fontSize: 40,
    },
});

export default HomeScreen;