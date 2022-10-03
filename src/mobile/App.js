/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { SafeAreaView, useColorScheme } from 'react-native';

import Login from './components/Login';

const Stack = createNativeStackNavigator();

const App = () => {
  const colorScheme = useColorScheme();
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <NativeBaseProvider>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={Login} />
          {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
