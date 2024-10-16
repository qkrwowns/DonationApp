import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Touchable, } from 'react-native';

const circleIcon = require('./images/circle.png');
const oneIcon = require('./images/one.webp');
const twoIcon = require('./images/two.avif');
const threeIcon = require('./images/three.jpeg');
const fourIcon = require('./images/four.avif');
const fiveIcon = require('./images/five.jpg');
const sixIcon = require('./images/six.jpeg');

const ProfileScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.screenScroll}>
                <View style={styles.topContainer}>
                    <Image source={circleIcon} style={styles.profilePicture}/>
                    <View style={styles.infoContainer}>
                        <Text style={styles.username}>USERNAME</Text>
                        <Text style={styles.id}>ID</Text>
                    </View>
                </View>
                
                <TouchableOpacity>
                    <Text style={styles.editProfile}>Edit Profile</Text>
                </TouchableOpacity>

                <Text style={styles.donation}>Finished Donations</Text>
                <View style={styles.dContainer}>
                    <ScrollView indicatorStyle={styles.dScroll}>
                        <TouchableOpacity style={styles.dTouchable}>
                            <Image source={oneIcon} style={styles.dTouchableIcon}/>
                            <Text style={styles.dTouchableDescription}>1 is the unit of counting or measurement, a determiner for singular nouns, and a gender-neutral pronoun. Historically, the representation of 1 evolved from ancient Sumerian and Babylonian symbols to the modern Arabic numeral.</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.dTouchable}>
                            <Image source={twoIcon} style={styles.dTouchableIcon}/>
                            <Text style={styles.dTouchableDescription}>2 (two) is a number, numeral and digit. It is the natural number following 1 and preceding 3. It is the smallest and the only even prime number. Because it forms the basis of a duality, it has religious and spiritual significance in many cultures.</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.dTouchable}>
                            <Image source={threeIcon} style={styles.dTouchableIcon}/>
                            <Text style={styles.dTouchableDescription}>3 (three) is a number, numeral and digit. It is the natural number following 2 and preceding 4, and is the smallest odd prime number and the only prime preceding a square number. It has religious and cultural significance in many societies.</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>

                <Text style={styles.donation}>Ongoing</Text>
                <View style={styles.dContainer}>
                    <ScrollView indicatorStyle={styles.dScroll}>
                        <TouchableOpacity style={styles.dTouchable}>
                            <Image source={fourIcon} style={styles.dTouchableIcon}/>
                            <Text style={styles.dTouchableDescription}>4 (four) is a number, numeral and digit. It is the natural number following 3 and preceding 5. It is a square number, the smallest semiprime and composite number, and is considered unlucky in many East Asian cultures.</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.dTouchable}>
                            <Image source={fiveIcon} style={styles.dTouchableIcon}/>
                            <Text style={styles.dTouchableDescription}>5 (five) is a number, numeral and digit. It is the natural number, and cardinal number, following 4 and preceding 6, and is a prime number. Humans, and many other animals, have 5 digits on their limbs.</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.dTouchable}>
                            <Image source={sixIcon} style={styles.dTouchableIcon}/>
                            <Text style={styles.dTouchableDescription}>6 (six) is the natural number following 5 and preceding 7. It is a composite number and the smallest perfect number.</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </ScrollView>

            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.signout}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F0F2F5',
        padding: 20,
        alignItems: 'center',
    },
    screenScroll: {
        //
    },
    topContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 10,
    },
    profilePicture: {        
        width:150,
        height: 150,
        marginLeft: 40,
    },
    infoContainer: {
        //
    },
    username: {
        marginTop: 40,
        marginLeft: 20,
        fontSize: 20,
    },
    id: {
        marginTop: 20,
        marginLeft: 20,
    },
    editProfile: {
        marginBottom: 20,
        color: '#5D7ED7',
        textAlign: 'center',
    },
    dContainer: {
        height: 200,
        backgroundColor: '#F0F2E9',
        marginBottom: 30,
    },
    dScroll: {
        display: 'flex',
        flexDirection: 'row',
    },
    donation: {
        fontSize: 17,
        marginBottom:15,
        textAlign: 'center',
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
    signout: {
        textalign: 'center',
        color: '#FF0000',
    }

});

export default ProfileScreen;