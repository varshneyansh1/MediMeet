import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import TopDoctorsScreen from './screens/TopDoctorsScreen';
import AppointmentScreen from './screens/AppointmentScreen';
const Stack = createNativeStackNavigator();
const Main = () => {
  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        /> 
        <Stack.Screen
          name="TopDoctor"
          component={TopDoctorsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Appointment"
          component={AppointmentScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
