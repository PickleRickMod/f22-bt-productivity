import React, { useState } from 'react';
import { Button, Input, Text, View, VStack } from 'native-base';
import { StyleSheet, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = () => {
  const colorScheme = useColorScheme();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const styles = StyleSheet.create({
    vStackStyles: {
      marginHorizontal: 15,
      marginTop: 20,
    },
    titleStyles: {
      color: colorScheme === 'dark' ? 'white' : 'black',
      fontWeight: '800',
      fontStyle: 'italic',
      textAlign: 'center',
    },
    subtitleStyles: {
      color: colorScheme === 'dark' ? 'white' : 'black',
      fontWeight: '600',
      textAlign: 'center',
    },
    defaultTextStyles: {
      color: colorScheme === 'dark' ? 'white' : 'black',
      marginBottom: 2,
    },
    inputStyles: {
      color: colorScheme === 'dark' ? 'white' : 'black',
    },
    buttonStyles: {
      marginTop: 20,
      borderRadius: 100,
    },
  });
  return (
    <>
      <SafeAreaView>
        <VStack space={3} style={styles.vStackStyles}>
          <Text fontSize="4xl" style={styles.titleStyles}>
            CareersGO
          </Text>
          <Text fontSize="xl" style={styles.subtitleStyles}>
            Lets create an account!
          </Text>
          <View>
            <Text style={styles.defaultTextStyles}>Your First Name:</Text>
            <Input
              variant="rounded"
              placeholder=" Naman"
              size="lg"
              style={styles.inputStyles}
              value={firstName}
              onChange={e => setFirstName(e.currentTarget.value)}
            />
          </View>
          <View>
            <Text style={styles.defaultTextStyles}>Your Last Name:</Text>
            <Input
              variant="rounded"
              placeholder=" Arora"
              size="lg"
              style={styles.inputStyles}
              value={lastName}
              onChange={e => setLastName(e.currentTarget.value)}
            />
          </View>
          <View>
            <Text style={styles.defaultTextStyles}>Your Email:</Text>
            <Input
              variant="rounded"
              placeholder=" namanarora@example.com"
              size="lg"
              style={styles.inputStyles}
              value={email}
              onChange={e => setEmail(e.currentTarget.value)}
            />
          </View>
          <View>
            <Text style={styles.defaultTextStyles}>Create a Password:</Text>
            <Input
              variant="rounded"
              placeholder=" ··················"
              size="lg"
              style={styles.inputStyles}
              value={password}
              onChange={e => setPassword(e.currentTarget.value)}
            />
          </View>
          <View>
            <Button style={styles.buttonStyles}>Create an Account!</Button>
          </View>
        </VStack>
        <Text style={styles.defaultTextStyles}>{firstName}</Text>
      </SafeAreaView>
    </>
  );
};

export default Login;
