import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, } from 'react-native';

const SettingScreenS = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("Privacy")}>
                <Text style={styles.setting}>Privacy</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.setting}>About</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('HomeS')}>
                <Text style={styles.back}>Back</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#F0F2F5'
    },
    setting: {
        width: 350,
        height: 40,
        fontSize: 20,
        backgroundColor: '#F0F4FF',
        marginBottom: 30,
        borderRadius: 10,
    }
});

export default SettingScreenS