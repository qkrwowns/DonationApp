import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Touchable, Modal, FlatList} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import { ListItem } from '@rneui/themed';

const circleIcon = require('./images/circle.png');
const profileIcon = require('./images/profile.png');
const homeIcon = require('./images/home.png');
const lineIcon = require('./images/line.webp');

const ProfileScreen = ({ navigation }) => {
    const [image, setImage] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const imagesource = image ? {uri: image} : circleIcon;
    const [username, setUsername] = useState('');
    const displayusername = username ? username : 'User'

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });

        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
    };

    return (
        <View style={styles.container}>
            <Modal animationType='slide' visible={modalVisible} onRequestClose={() => {setModalVisible(!modalVisible)}}>
                <Image source={imagesource} style={styles.profilePicture}/>
                <TouchableOpacity onPress={() => pickImage()}>
                    <Text>Choose a photo</Text>
                </TouchableOpacity>
                <TextInput
                    style={styles.username}
                    placeholder={'Enter new username'}
                    placeholderTextColor={'#888'}
                    value={username}
                    onChangeText={setUsername}/>
                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                    <Text>Close</Text>
                </TouchableOpacity>
            </Modal>

            <View style={styles.topContainer}>
                <Image source={imagesource} style={styles.profilePicture}/>
                <View style={styles.infoContainer}>
                    <Text style={styles.username}>{displayusername}</Text>
                    <Text style={styles.id}>ID</Text>
                </View>
            </View>
            
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Text style={styles.editProfile}>Edit Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.signout}>Sign out</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('HomeS')}>
                <Text style={styles.back}>Back</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
    },
    topContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 10,
    },
    profilePicture: {        
        width:150,
        height: 150,
        marginLeft: -20,
        borderRadius: 80,
    },
    infoContainer: {
        //
    },
    username: {
        marginTop: 40,
        marginLeft: 80,
        fontSize: 20,
    },
    id: {
        marginTop: 20,
        marginLeft: 80,
    },
    editProfile: {
        marginBottom: 25,
        color: '#5D7ED7',
        textAlign: 'center',
    },
    eventsContainer: {
        width: 200,
        height: 100,
        marginTop: 20,
    },
    horizontalContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    signout: {
        color: 'red',
        fontSize: 18,
    },
    back: {
        fontSize: 20,
        marginTop: 30,
    }
});

export default ProfileScreen;