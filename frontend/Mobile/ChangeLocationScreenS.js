import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Button, Alert} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

const ChangeLocationScreen = ({ navigation }) => {

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
            navigation.navigate('HomeS')
        }
    }

    return (
        <View style={styles.container}>
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

            <TouchableOpacity onPress={() => finish()}>
                <Text style={styles.finishButton}>Finish</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('HomeS')}>
                <Text style={styles.back}>Back</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    section: {
        fontSize: 26,
        marginBottom: 10,
    },
    dropdownButton: {
        marginBottom: 20,
    },
    dropdownButtonText: {
        fontSize: 18,
    },
    finishButton: {
        fontSize: 28,
    },
    back: {
        fontSize: 20,
        marginTop: 30,
    }
});

export default ChangeLocationScreen