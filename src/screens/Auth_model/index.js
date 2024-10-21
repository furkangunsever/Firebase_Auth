import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import auth, {signOut} from '@react-native-firebase/auth';

const app = () => {
  sigUp = () => {
    auth()
      .createUserWithEmailAndPassword(
        'jane.doe@example.com',
        'SuperSecretPassword!',
      )
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  sigIn = () => {
    auth()
      .signInWithEmailAndPassword(
        'jane.doe@example.com',
        'SuperSecretPassword!',
      )
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  sigOut = () => {
    auth()
      .signOut()
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  checkOut=()=>{
    const user = auth().currentUser;
    console.log(user);
  }
  return (
    <View
      style={{alignItems: 'center', justifyContent: 'space-evenly', flex: 1}}>
      <Button title="SignUp" onPress={sigUp} />
      <Button title="SignIn" onPress={sigIn} />
      <Button title="SignOut" onPress={sigOut} />
      <Button title="CheckOut" onPress={checkOut} />
    </View>
  );
};

export default app;

const styles = StyleSheet.create({});