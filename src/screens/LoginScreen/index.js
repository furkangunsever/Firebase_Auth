import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Button,
} from 'react-native';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
const LoginScreen = () => {
  const navigation = useNavigation();
  const initialFormValues = {
    usermail: '',
    password: '',
  };
  function handleFormSubmit(formValues) {
    console.log(formValues);
  }
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  // const handleLogin = () => {
  //   if (username === 'user' && password === '1234') {
  //     Alert.alert('Login Successful', 'Welcome!');
  //   } else {
  //     Alert.alert('Login Failed', 'Invalid username or password');
  //   }
  // };

  return (
    <View style={styles.container}>
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="Username"
              onChangeText={handleChange('usermail')}
              value={values.usermail}
            />

            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={handleChange('password')}
              value={values.password}
              secureTextEntry
            />

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Giriş Yap</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('SignIn');
        }}>
        <Text style={styles.buttonText}>Kayıt Ol</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  button: {
    marginBottom: 20,
    backgroundColor: '#3498db',
    paddingVertical: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default LoginScreen;
