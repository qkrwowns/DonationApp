import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import CreateAccountScreen from './CreateAccountScreen';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import SelectedDonationScreen from './SelectedDonationScreen';
import SettingScreen from './SettingScreen';
import DonationTrackScreen from './DonationTrackScreen';
import PrivacySetting from './PrivacySetting';
import DisplaySetting from './DisplaySetting';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="SelectedDonation" component={SelectedDonationScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
        <Stack.Screen name="DonationTrack" component={DonationTrackScreen} />
        <Stack.Screen name="Privacy" component={PrivacySetting} />
        <Stack.Screen name="Display" component={DisplaySetting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;