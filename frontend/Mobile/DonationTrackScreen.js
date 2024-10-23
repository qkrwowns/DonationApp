import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, } from 'react-native';
import { BarChart, LineChart } from 'react-native-gifted-charts';

const DonationTrackScreen = ({ navigation }) => {
    const bardata = [
        {
            value: 15,
        },
        {
            value: 30,
        },
        {
            value: 45,
        },
        {
            value: 60,
        }
    ];
    const bardata2 = [
        {
            value: 60,
        },
        {
            value: 45,
        },
        {
            value: 30,
        },
        {
            value: 15,
        }
    ];
    return(
        <View style={styles.container}>
            <BarChart data={bardata}/>
            <LineChart data={bardata2}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F0F2F5',
        padding: 20,
    },

})

export default DonationTrackScreen;