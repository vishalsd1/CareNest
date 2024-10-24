import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = () => {
    // Simple validation
    if (!name || !age || !weight || !height || !gender) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    // Handle form submission here (API call, etc.)
    console.log('Name:', name);
    console.log('Age:', age);
    console.log('Weight:', weight);
    console.log('Height:', height);
    console.log('Gender:', gender);

    // Show a success message
    Alert.alert('Success', 'Baby details added successfully!');

    // Navigate to Parent page after submission
    navigation.navigate('Parent');

    // Optionally, reset the form
    setName('');
    setAge('');
    setWeight('');
    setHeight('');
    setGender('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Care <Text style={styles.highlightedText}>Nest</Text>
      </Text>
      <Text style={styles.subtitle}>Baby Details</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={setName}
        value={name}
        placeholderTextColor="#B0A18C"
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        onChangeText={setAge}
        value={age}
        placeholderTextColor="#B0A18C"
        keyboardType="numeric" // Allow only numbers
      />
      <TextInput
        style={styles.input}
        placeholder="Weight"
        onChangeText={setWeight}
        value={weight}
        placeholderTextColor="#B0A18C"
        keyboardType="numeric" // Allow only numbers
      />
      <TextInput
        style={styles.input}
        placeholder="Height"
        onChangeText={setHeight}
        value={height}
        placeholderTextColor="#B0A18C"
        keyboardType="numeric" // Allow only numbers
      />
      <TextInput
        style={styles.input}
        placeholder="Gender"
        onChangeText={setGender}
        value={gender}
        placeholderTextColor="#B0A18C"
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      <Text style={styles.newUserText}>
        Already have an account?{' '}
        <Text
          style={styles.linkText}
          onPress={() => navigation.navigate('SignIn')} // Navigate to Sign In screen
        >
          Sign In
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3D6',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontFamily: 'serif',
    color: '#4C3B28',
    marginBottom: 20,
  },
  highlightedText: {
    color: '#C17848',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
    color: '#4C3B28',
  },
  input: {
    height: 50,
    borderColor: '#C17848',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 20,
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
    alignItems: 'center',
    marginTop: 10,
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

export default RegisterScreen;
``