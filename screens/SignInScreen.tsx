import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const navigation = useNavigation();

  // Email validation (simple regex)
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Password validation (minimum 6 characters)
  const validatePassword = (password) => {
    return password.length >= 6;
  };

  useEffect(() => {
    if (!email) {
      setEmailError('Email is required');
    } else if (!validateEmail(email)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Password is required');
    } else if (!validatePassword(password)) {
      setPasswordError('Password must be at least 6 characters');
    } else {
      setPasswordError('');
    }

    setIsFormValid(!emailError && !passwordError && email && password);
  }, [email, password, emailError, passwordError]);

  // Handle sign-in with success alert
  const handleSignIn = () => {
    if (isFormValid) {
      // Display success alert
      Alert.alert('Success', 'Sign In Successful!', [
        {
          text: 'OK',
          onPress: () => navigation.navigate('App123'), // Navigate to the next screen (replace 'App123' with your desired screen)
        },
      ]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* App Title */}
      <View style={styles.header}>
        <Text style={styles.title}>
          Care <Text style={styles.highlightedText}>Nest</Text>
        </Text>
      </View>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#B0A18C"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#B0A18C"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
      </View>

      {/* Sign In Button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: isFormValid ? '#F4B15E' : '#d3d3d3' }]}
        onPress={handleSignIn}
        disabled={!isFormValid}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      {/* New User Message */}
      <Text style={styles.newUserText}>
        New User?{' '}
        <Text
          style={styles.linkText}
          onPress={() => navigation.navigate('Register')}
        >
          Create Your Account!
        </Text>
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3D6',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontFamily: 'serif',
    color: '#4C3B28',
  },
  highlightedText: {
    color: '#C17848',
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#C17848',
    borderRadius: 15,
    padding: 15,
    fontSize: 16,
    color: '#4C3B28',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
  button: {
    paddingVertical: 15,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  newUserText: {
    color: '#4C3B28',
    fontSize: 14,
    marginTop: 10,
  },
  linkText: {
    color: '#C17848',
    fontWeight: 'bold',
  },
});

export default SignInScreen;
