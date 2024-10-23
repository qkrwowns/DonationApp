import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, } from 'react-native';
import * as Progress from 'react-native-progress';

const oneIcon = require('./images/one.webp');
const circleIcon = require('./images/circle.png');
const plusIcon = require('./images/plus.png');
const profileIcon = require('./images/profile.png');
const homeIcon = require('./images/home.png');
const optionIcon = require('./images/option.png');

const SelectedDonationScreen = ({navigation}) => {
    const percentage = 0.3;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Selected Donation</Text>

            <View style={styles.topContainer}>
                <Image source={oneIcon} style={styles.dIcon}/>
                <Text style={styles.dDescription}>1 is the unit of counting or measurement, a determiner for singular nouns, and a gender-neutral pronoun. Historically, the representation of 1 evolved from ancient Sumerian and Babylonian symbols to the modern Arabic numeral.</Text>
            </View>
            <Progress.Bar style={styles.progressBar} progress={percentage} width={390} height={40}/>

            <Text style={styles.completionText}>This donation is</Text>
            <Text style={styles.completion}>{percentage*100}%</Text>
            <Text style={styles.completionText}>complete</Text>

            <TouchableOpacity>
                <Text style={styles.donate}>Donate</Text>
            </TouchableOpacity>

            <View style={styles.creatorContainer}>
                <Image source={circleIcon} style={styles.profile}/>
                <Text style={styles.creatorName}>abcdefg place</Text>
            </View>

            <ScrollView style={styles.recommendedScroll} horizontal={true}>
                <TouchableOpacity style={styles.donation}>
                    <Image style={styles.rDImage} source={oneIcon}/>
                    <Text style={styles.rDDescription}>abcdefghijklmnop</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.donation}>
                    <Image style={styles.rDImage} source={oneIcon}/>
                    <Text style={styles.rDDescription}>abcdefghijklmnop</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.donation}>
                    <Image style={styles.rDImage} source={oneIcon}/>
                    <Text style={styles.rDDescription}>abcdefghijklmnop</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.donation}>
                    <Image style={styles.rDImage} source={oneIcon}/>
                    <Text style={styles.rDDescription}>abcdefghijklmnop</Text>
                </TouchableOpacity>
            </ScrollView>

            <View style={styles.bottomContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image source={homeIcon} style={styles.bottomIcon}/>
                </TouchableOpacity>
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
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
    },
    topContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
    },
    dIcon: {
        width: 150,
        height: 150,
    },
    dDescription: {
        width: 230,
        marginLeft: 20,
        marginTop: 10,
    },
    progressBar: {
        marginTop: 30,
        marginBottom: 10,
    },
    completionText: {
        fontsize: 18,
    },
    completion: {
        fontSize: 27,
        color: '#425EFF',
        marginLeft: 2,
    },
    creatorContainer: {
        diplay: 'flex',
        flexDirection: 'row',
    },
    donate: {
        textAlign: 'center',
        color: '#007AFF',
        fontSize: 16,
    },
    profile: {
        marginTop: 30,
        width: 50,
        height: 50,
    },
    creatorName: {
        marginTop: 45,
        marginLeft: 10,
    },
    recommendedScroll: {
        marginTop: 70,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#F0F2E9'
    },
    donation: {
        display: 'flex',
        flexDirection: 'row',
    },
    rDImage:{
        width: 100,
        height: 100,
    },
    rDDescription: {
        marginLeft: 10,
        marginRight: 40,
    },
    bottomContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    bottomIcon: {
        width:50,
        height:50,
    }
})

export default SelectedDonationScreen;