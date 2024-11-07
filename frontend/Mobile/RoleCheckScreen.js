import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Touchable, Modal, Alert} from 'react-native';

const profileIcon = require('./images/profile.png');

const RoleCheckScreen = ({ navigation }) => {
    const [color, setColor] = useState('#F0F2F5');
    const [oColor, setOColor] = useState('#F0F2F5');
    const [role, setRole] = useState();

    educatorSelect = async () => {
        setColor('#E0E0E0');
        setOColor('#F0F2F5')
        setRole('educator')
    }
    studentSelect = async () => {
        setColor('#F0F2F5');
        setOColor('#E0E0E0')
        setRole('student')
    }

    const completeSignup = async () => {
        if (!role) {
            Alert.alert('Error', 'Please select a role')
        }
        else if (role=='educator') {
            navigation.navigate('CreateAccountT')
        }
        else {
            navigation.navigate('CreateAccountS')
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.iAm}> I am... </Text>

            <View style={styles.horizontalContainer}>
                <TouchableOpacity style={{backgroundColor: color}} onPress={() => educatorSelect()}>
                    <View style={styles.roleContainer}>
                        <Image source={profileIcon} style={styles.roleIcon}/>
                        <Text style={styles.roleText}>An educator</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor: oColor}} onPress={() => studentSelect()}>
                    <View style={styles.roleContainer}>
                        <Image source={profileIcon} style={styles.roleIcon}/>
                        <Text style={styles.roleText}>A student</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => completeSignup()}>
                <Text style={styles.goButton}>Next</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
    },
    iAm: {
        fontSize: 20,
        marginBottom: 170,
        marginTop: 20,
    },
    horizontalContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    roleContainer: {
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
    },
    roleIcon: {
        height: 150,
        width: 150,
    },
    roleText: {
        fontSize: 18,
    },
    goButton: {
        fontSize: 30,
        marginTop: 160,
        borderRadius: 10,
        backgroundColor: 'blue',
    }
});

export default RoleCheckScreen;