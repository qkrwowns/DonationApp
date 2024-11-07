import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Button} from 'react-native';

const profileIcon = require('./images/profile.png');
const settingsIcon = require('./images/settings.png');
const bellIcon = require('./images/bell.png');

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.upperContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('SettingT')}>
                    <Image source={settingsIcon} style={styles.settingsIcon}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('NotificationT')}>
                    <Image source={bellIcon} style={styles.bellIcon}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ProfileT')}>
                    <Image source={profileIcon} style={styles.profileIcon}/>
                </TouchableOpacity>
            </View>

            <View style={styles.horizontalContainer}>
                <Text style={styles.yourLocation}>Your Location: </Text>
                <Text style={styles.location}>ABCDEFG</Text>
                <TouchableOpacity onPress={() => navigation.navigate('ChangeLocationT')}>
                    <Text style={styles.change}>Change</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.ty}>Placeholder message</Text>
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
        fontSize: 18,
        color: 'blue',
        marginLeft: 20,
        marginTop: 120,
    },
    ty: {
        fontSize: 30,
        marginTop: 100,
    }
});

export default HomeScreen;