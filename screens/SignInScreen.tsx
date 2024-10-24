import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const SignInScreen = () => {
  // State variables for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Get navigation object
  const navigation = useNavigation();

  // Handle Sign In action
  const handleSignIn = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter your email and password.");
      return;
    }
    
    // Implement your sign-in logic here (e.g., API call)

    Alert.alert("Success", "You have signed in successfully!", [
      {
        text: "OK",
        onPress: () => navigation.navigate('app'), // Navigate to App123 screen
      },
    ]);
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
          value={email} // Controlled input
          onChangeText={setEmail} // Update email state on change
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#B0A18C"
          secureTextEntry={true}
          value={password} // Controlled input
          onChangeText={setPassword} // Update password state on change
        />
      </View>

      {/* Sign In Button */}
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      {/* New User Message */}
      <Text style={styles.newUserText}>
        New User?{' '}
        <Text
          style={styles.linkText}
          onPress={() => navigation.navigate('Register')} // Navigate to Register screen
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
  button: {
    backgroundColor: '#F4B15E',
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
    color: '#C17848', // Color for the link
    fontWeight: 'bold',
  },
});

export default SignInScreen;
