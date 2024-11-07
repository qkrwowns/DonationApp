import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Button, FlatList, RefreshControl} from 'react-native';
const profileIcon = require('./images/profile.png'); //temp

const FoundScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.horizontalContainer}>
                <Image source={profileIcon} style={styles.profileIcon} />

                <View style={styles.verticalContainer}>
                    <Text style={styles.username}>username</Text>
                    <Text style={styles.number}>010-0000-0000</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create ({
    container: {
        padding: 40,
    },
    horizontalContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    verticalContainer: {
        marginLeft: 100,
    },
    profileIcon: {
        height: 90,
        width: 90,
    },
    username: {
        fontSize: 24,
    },
    number: {
        fontSize: 20,
    }
})

export default FoundScreen