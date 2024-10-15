import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, } from 'react-native';
import { Menu, MenuProvider, MenuOptions, MenuTrigger, MenuOption, } from 'react-native-popup-menu';

const plusIcon = require('./images/plus.png');
const profileIcon = require('./images/profile.png');
const oneIcon = require('./images/one.webp');
const twoIcon = require('./images/two.avif');
const threeIcon = require('./images/three.jpeg');
const fourIcon = require('./images/four.avif');
const fiveIcon = require('./images/five.jpg');
const sixIcon = require('./images/six.jpeg');
const bellIcon = require('./images/bell.png');
const homeIcon = require('./images/home.png');
const optionIcon = require('./images/option.png');

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <View style={styles.topContainer}>
                <TextInput style={styles.search} placeholder='Search a donation' placeholderTextColor='#888'/>
                <MenuProvider>
                    <Menu>
                        <MenuTrigger>
                            <Image source={bellIcon} style={styles.bellIcon}/>
                        </MenuTrigger>
                        <MenuOptions>
                            <MenuOption text='A'/>
                            <MenuOption text='B'/>
                            <MenuOption text='C'/>
                        </MenuOptions>
                    </Menu>
                </MenuProvider>
            </View>

            <TouchableOpacity style={styles.dAmount}>
                <Text style={styles.donated}>You've donated</Text>
                <Text style={styles.amount}>$0.00</Text>
            </TouchableOpacity>

            <Text style={styles.donation}>Your donations</Text>
            <View style={styles.dContainer}>
                <ScrollView indicatorStyle={styles.dScroll}>
                    <TouchableOpacity style={styles.dTouchable} onPress={() => navigation.navigate('SelectedDonation')}>
                        <Image source={oneIcon} style={styles.dTouchableIcon}/>
                        <Text style={styles.dTouchableDescription}>1 is the unit of counting or measurement, a determiner for singular nouns, and a gender-neutral pronoun. Historically, the representation of 1 evolved from ancient Sumerian and Babylonian symbols to the modern Arabic numeral.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.dTouchable} onPress={() => navigation.navigate('SelectedDonation')}>
                        <Image source={twoIcon} style={styles.dTouchableIcon}/>
                        <Text style={styles.dTouchableDescription}>2 (two) is a number, numeral and digit. It is the natural number following 1 and preceding 3. It is the smallest and the only even prime number. Because it forms the basis of a duality, it has religious and spiritual significance in many cultures.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.dTouchable} onPress={() => navigation.navigate('SelectedDonation')}>
                        <Image source={threeIcon} style={styles.dTouchableIcon}/>
                        <Text style={styles.dTouchableDescription}>3 (three) is a number, numeral and digit. It is the natural number following 2 and preceding 4, and is the smallest odd prime number and the only prime preceding a square number. It has religious and cultural significance in many societies.</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>

            <Text style={styles.donation}>Find new donations</Text>
            <View style={styles.dContainer}>
                <ScrollView indicatorStyle={styles.dScroll}>
                    <TouchableOpacity style={styles.dTouchable} onPress={() => navigation.navigate('SelectedDonation')}>
                        <Image source={fourIcon} style={styles.dTouchableIcon}/>
                        <Text style={styles.dTouchableDescription}>4 (four) is a number, numeral and digit. It is the natural number following 3 and preceding 5. It is a square number, the smallest semiprime and composite number, and is considered unlucky in many East Asian cultures.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.dTouchable} onPress={() => navigation.navigate('SelectedDonation')}>
                        <Image source={fiveIcon} style={styles.dTouchableIcon}/>
                        <Text style={styles.dTouchableDescription}>5 (five) is a number, numeral and digit. It is the natural number, and cardinal number, following 4 and preceding 6, and is a prime number. Humans, and many other animals, have 5 digits on their limbs.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.dTouchable} onPress={() => navigation.navigate('SelectedDonation')}>
                        <Image source={sixIcon} style={styles.dTouchableIcon}/>
                        <Text style={styles.dTouchableDescription}>6 (six) is the natural number following 5 and preceding 7. It is a composite number and the smallest perfect number.</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>

            <View style={styles.bottomContainer}>
                <TouchableOpacity>
                    <Image source={plusIcon} style={styles.bottomIcon}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Image source={profileIcon} style={styles.bottomIcon}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
                    <Image source={optionIcon} style={styles.bottomIcon}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F0F2F5',
        padding: 20,
    },
    topContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    bellIcon: {
        height: 35,
        width: 35,
        marginTop: 8,
        marginBottom: 10,
        marginLeft: 10,
    },
    dAmount: {
        height: 60,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 25,
        paddingHorizontal: 16,
        marginBottom: 30,
        backgroundColor: '#DDD',
        fontSize: 16,
        color: '#333',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,

    },
    donated: {
        textAlign: 'center',
        marginTop: 5,
    },
    amount: {
        fontSize: 30,
        marginBottom: 10,
        textAlign: 'center',
    },
    search: {
        height: 48,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 25,
        paddingHorizontal: 16,
        marginBottom: 30,
        backgroundColor: '#fff',
        fontSize: 16,
        color: '#333',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        width: 340,
    },
    dContainer: {
        height: 200,
        backgroundColor: '#F0F2E9',
        marginBottom: 40,
    },
    dScroll: {
        display: 'flex',
        flexDirection: 'row',
    },
    donation: {
        fontSize: 17,
        marginBottom:15,
    },
    dTouchable: {
        display: 'flex',
        flexDirection: 'row',
    },
    dTouchableIcon: {
        height:150,
        width:150,
        marginRight:10,
        marginTop: 5,
        marginBottom:5,
    },
    dTouchableDescription: {
        width:230,
        marginTop: 5,
        marginBottom:5,
    },
    bottomContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    bottomIcon: {
        width:50,
        height:50,
    }
});

export default HomeScreen;