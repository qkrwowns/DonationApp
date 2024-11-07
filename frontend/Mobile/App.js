import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import CreateAccountScreenS from './CreateAccountScreenS';
import CreateAccountScreenT from './CreateAccountScreenT';
import HomeScreenT from './HomeScreenT';
import HomeScreenS from './HomeScreenS';
import ProfileScreenS from './ProfileScreenS';
import ProfileScreenT from './ProfileScreenT';
import SettingScreenS from './SettingScreenS';
import SettingScreenT from './SettingScreenT';
import PrivacySetting from './PrivacySetting';
import RoleCheckScreen from './RoleCheckScreen';
import InformationScreenT from './InformationScreenT';
import InformationScreenS from './InformationScreenS';
import FoundScreenS from './FoundScreenS';
import ChangeLocationScreenS from './ChangeLocationScreenS';
import ChangeLocationScreenT from './ChangeLocationScreenT';
import NotificationScreenS from './NotificationScreenS';
import NotificationScreenT from './NotificationScreenT';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />

        <Stack.Screen name="CreateAccountS" component={CreateAccountScreenS} />
        <Stack.Screen name="CreateAccountT" component={CreateAccountScreenT} />

        <Stack.Screen name="HomeT" component={HomeScreenT} />
        <Stack.Screen name="HomeS" component={HomeScreenS} />

        <Stack.Screen name="ProfileS" component={ProfileScreenS} />
        <Stack.Screen name="ProfileT" component={ProfileScreenT} />

        <Stack.Screen name="SettingS" component={SettingScreenS} />
        <Stack.Screen name="SettingT" component={SettingScreenT} />
        <Stack.Screen name="Privacy" component={PrivacySetting} />

        <Stack.Screen name="RoleCheck" component={RoleCheckScreen} />

        <Stack.Screen name="InformationT" component={InformationScreenT} />
        <Stack.Screen name="InformationS" component={InformationScreenS} />

        <Stack.Screen name="FoundS" component={FoundScreenS} />

        <Stack.Screen name="ChangeLocationS" component={ChangeLocationScreenS} />
        <Stack.Screen name="ChangeLocationT" component={ChangeLocationScreenT} />

        <Stack.Screen name="NotificationS" component={NotificationScreenS} />
        <Stack.Screen name="NotificationT" component={NotificationScreenT} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;