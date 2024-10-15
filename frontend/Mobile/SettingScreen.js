import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, } from 'react-native';
import * as Progress from 'react-native-progress';

const SettingScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Text style={styles.setting}>About</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
    },
    setting: {
        width: 200,
        textAlign: 'center',
        fontSize: 20,
    }
})

export default SettingScreen