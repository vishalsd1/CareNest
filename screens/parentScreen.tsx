import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const RegisterScreen = ({ navigation }) => { // Accept navigation prop
  const [name, setName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Perform sign-up logic here (e.g., form validation)
    console.log('Name:', name);
    console.log('Mobile No.:', mobileNo);
    console.log('Email:', email);
    console.log('Password:', password);

    // After sign-up logic, navigate to Home screen
    navigation.navigate('Home'); // Navigate to HomeScreen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Care <Text style={styles.highlightedText}>Nest</Text></Text>
      <Text style={styles.subtitle}>Parents Details</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
        placeholderTextColor="#B0A18C"
      />
      <TextInput
        style={styles.input}
        placeholder="Mobile No."
        value={mobileNo}
        onChangeText={setMobileNo}
        keyboardType="phone-pad"
        placeholderTextColor="#B0A18C"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        placeholderTextColor="#B0A18C"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        placeholderTextColor="#B0A18C"
      />

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      
      <Text style={styles.signInText}>Already have an account? Sign In</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3D6', // Matching background color to the CareNest theme
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontFamily: 'serif', // Using a serif font for consistency
    color: '#4C3B28', // Title color
    marginBottom: 20,
  },
  highlightedText: {
    color: '#C17848', // Highlighted color for "Nest"
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 10,
    color: '#4C3B28', // Subtitle color
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#C17848', // Border color to match the theme
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#FFF', // White background for inputs
    color: '#4C3B28', // Text color for inputs
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#F4B15E', // Button background color
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF', // Button text color
  },
  signInText: {
    fontSize: 16,
    color: '#4C3B28', // Color for sign-in text
    textDecorationLine: 'underline',
  },
});

export default RegisterScreen;
