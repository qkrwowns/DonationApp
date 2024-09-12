import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native';

const PlusIcon = require('./images/plus.png');
const ProfileIcon = require('./images/profile.png');

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.imageContainer}>
                <Image source={PlusIcon} style={styles.PlusIcon} />
                <Image source={ProfileIcon} style={styles.ProfileIcon} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#F0F2F5',
        alignitems: 'flex-start',
    },
    imageContainer: {
        flex:1/3,
        paddingTop:20,
        right:70,
        flexDirection:'row',
        justifyContent: 'center',
    },
    PlusIcon: {
        width:25,
        height:25,
        borderRadius:10,
        left:'80%',
    },
    ProfileIcon: {
        width: 30,
        height: 30,
        borderRadius: 10,
        left:'90%',
    },
});

export default HomeScreen;