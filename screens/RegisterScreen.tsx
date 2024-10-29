import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import database from '@react-native-firebase/database'; // Import Realtime Database
// or import firestore from '@react-native-firebase/firestore'; for Firestore

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('');

  const [errors, setErrors] = useState({});

  const validateInputs = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!age || isNaN(age) || age <= 0) newErrors.age = 'Please enter a valid age';
    if (!weight || isNaN(weight) || weight <= 0) newErrors.weight = 'Please enter a valid weight';
    if (!height || isNaN(height) || height <= 0) newErrors.height = 'Please enter a valid height';
    if (gender.toLowerCase() !== 'boy' && gender.toLowerCase() !== 'girl') newErrors.gender = 'Please enter "boy" or "girl"';
    return newErrors;
  };

  const saveToDatabase = async () => {
    try {
      const newEntry = {
        name,
        age,
        weight,
        height,
        gender,
      };

      // For Realtime Database
      await database().ref('/babies').push(newEntry); // This will create a new entry under the 'babies' node

      // For Firestore
      // await firestore().collection('babies').add(newEntry); // Uncomment this line if using Firestore

      Alert.alert('Success', 'Baby details added successfully!');
      navigation.navigate('Parent');

      // Reset form
      setName('');
      setAge('');
      setWeight('');
      setHeight('');
      setGender('');
    } catch (error) {
      console.error("Error saving data to Firebase: ", error);
      Alert.alert('Error', 'There was an error saving the data. Please try again.');
    }
  };

  const handleSubmit = () => {
    const validationErrors = validateInputs();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    console.log('Name:', name);
    console.log('Age:', age);
    console.log('Weight:', weight);
    console.log('Height:', height);
    console.log('Gender:', gender);

    saveToDatabase();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Care <Text style={styles.highlightedText}>Nest</Text>
      </Text>
      <Text style={styles.subtitle}>Baby Details</Text>

      <View style={styles.inputContainer}>
        <Icon name="person-outline" size={24} color="#C17848" />
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={setName}
          value={name}
          placeholderTextColor="#B0A18C"
        />
      </View>
      {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

      <View style={styles.inputContainer}>
        <Icon name="calendar-outline" size={24} color="#C17848" />
        <TextInput
          style={styles.input}
          placeholder="Age"
          onChangeText={setAge}
          value={age}
          placeholderTextColor="#B0A18C"
          keyboardType="numeric"
        />
      </View>
      {errors.age && <Text style={styles.errorText}>{errors.age}</Text>}

      <View style={styles.inputContainer}>
        <Icon name="fitness-outline" size={24} color="#C17848" />
        <TextInput
          style={styles.input}
          placeholder="Weight"
          onChangeText={setWeight}
          value={weight}
          placeholderTextColor="#B0A18C"
          keyboardType="numeric"
        />
      </View>
      {errors.weight && <Text style={styles.errorText}>{errors.weight}</Text>}

      <View style={styles.inputContainer}>
        <Icon name="ribbon-outline" size={24} color="#C17848" />
        <TextInput
          style={styles.input}
          placeholder="Height"
          onChangeText={setHeight}
          value={height}
          placeholderTextColor="#B0A18C"
          keyboardType="numeric"
        />
      </View>
      {errors.height && <Text style={styles.errorText}>{errors.height}</Text>}

      <View style={styles.inputContainer}>
        <Icon name="male-female-outline" size={24} color="#C17848" />
        <TextInput
          style={styles.input}
          placeholder="Gender (boy/girl)"
          onChangeText={setGender}
          value={gender}
          placeholderTextColor="#B0A18C"
        />
      </View>
      {errors.gender && <Text style={styles.errorText}>{errors.gender}</Text>}

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      <Text style={styles.newUserText}>
        Already have an account?{' '}
        <Text
          style={styles.linkText}
          onPress={() => navigation.navigate('SignIn')}
        >
          Sign In
        </Text>
      </Text>
    </View>
  );
};

// Styles remain the same...

export default RegisterScreen;
