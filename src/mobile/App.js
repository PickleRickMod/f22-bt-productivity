/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
// @ts-ignore
// import type {Node} from 'react';
import { SafeAreaView } from 'react-native';

import Login from './components/Login';

const App /*: () => Node*/ = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <SafeAreaView>
          <Login />
        </SafeAreaView>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
