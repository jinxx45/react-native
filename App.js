import React from 'react';
import { StyleSheet, Text , SafeAreaView} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Login from './Screens/Login.js';
import Register from './Screens/Register.js';
import { AppLoading } from 'expo';


// Fonts

import {
  useFonts,
  AnonymousPro_400Regular
} from '@expo-google-fonts/anonymous-pro'

// Loading the fonts




const Tab = createMaterialTopTabNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    'Roboto': require('./assets/fonts/Roboto-Regular.ttf'),
    'AN': require('./assets/fonts/AnonymousPro-Regular.ttf'),
    

  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } 
  else {
    return (
      <NavigationContainer>
      <SafeAreaView >
        <Text style = {styles.appTitle}> App Title </Text>
      </SafeAreaView>
      <Tab.Navigator style = {styles.Tab} >
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Register" component={Register} />
      </Tab.Navigator>
    </NavigationContainer>
    );
  }
  
}

const styles = StyleSheet.create({
  Tab : {
    fontFamily :"AN",
    padding: 5,
    
    
  },
  appTitle : {
    marginTop : 40,
    textAlign : "center",
    fontSize : 40,
    backgroundColor : "#C0DFF8",
    color : "#666262",
    fontFamily :"AN",
    padding : 2
    
    

    
    


    
  }
})