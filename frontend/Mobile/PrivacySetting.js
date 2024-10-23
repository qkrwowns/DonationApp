import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Touchable, Modal, Switch} from 'react-native';

const PrivacySettings = ({navigation}) => {
    const [keepLogin, setKeepLogin] = useState(false);
    const toggleSwitch = () => setKeepLogin(previousState => !previousState);
    return (
        <View style={styles.container}>
            <View style={styles.passwordContainer}>
                <Text>Current password: **********</Text>
                <TouchableOpacity>
                    <Text>View</Text>
                </TouchableOpacity>
            </View>


            <TouchableOpacity>
                <Text>Change password</Text>
            </TouchableOpacity>

            <View style={styles.keepLoginSwitch}>
                <Text>Keep Login</Text>
                <Switch
                    value={keepLogin}
                    trackColor={{false: '#767577', true: '#81b0ff'}}
                    onValueChange={toggleSwitch}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
    },
    passwordContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    keepLoginSwitch: {
        display: 'flex',
        flexDirection: 'row',
    }
});

export default PrivacySettings;