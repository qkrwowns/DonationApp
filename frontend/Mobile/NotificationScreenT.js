import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Button} from 'react-native';
import { ListItem } from '@rneui/themed'

const circleIcon = require('./images/circle.png')

const notificationList = [
    {
        event:'this is an event',
        image:circleIcon,
        subtitle:'this is a subtitle'
    },
    {
        event:'this is an event2',
        image:circleIcon,
        subtitle:'this is a subtitle2'
    }
]

const NotificationScreenT = ({ navigation }) => {
    return(
        <View styles={styles.container}>
            {
                notificationList.map((l, i) => (
                    <ListItem key={i} bottomDivider>
                        <Image source={l.image} style={styles.notificationImage}/>
                        <ListItem.Content>
                            <ListItem.Title>{l.event}</ListItem.Title>
                            <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                ))
            }
            <TouchableOpacity onPress={() => navigation.navigate('HomeT')}>
                <Text style={styles.back}>Back</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    notificationImage: {
        width:80,
        height:80,
    }
})

export default NotificationScreenT