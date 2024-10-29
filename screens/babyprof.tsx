import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const ChildProfile = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [gender, setGender] = useState('Boy');

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header with Profile Image */}
      <View style={styles.header}>
        <Image
           source={require('./baby-moon.png')}// Placeholder for avatar image
          style={styles.avatar}
        />
        <TouchableOpacity style={styles.editIcon}>
          <Text style={styles.iconText}>✎</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Child Profile</Text>
      </View>

      {/* Gender Selection */}
      <View style={styles.genderContainer}>
        <TouchableOpacity
          style={[styles.genderButton, gender === 'Boy' && styles.selectedGender]}
          onPress={() => setGender('Boy')}
        >
          <Text style={styles.genderText}>Boy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.genderButton, gender === 'Girl' && styles.selectedGender]}
          onPress={() => setGender('Girl')}
        >
          <Text style={styles.genderText}>Girl</Text>
        </TouchableOpacity>
      </View>

      {/* Form Fields */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Baby's Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter baby's name"
          value={name}
          onChangeText={setName}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Age (In Months)</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter age"
          keyboardType="numeric"
          value={age}
          onChangeText={setAge}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Weight (kg)</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter weight"
          keyboardType="numeric"
          value={weight}
          onChangeText={value => {
            setWeight(value);
            calculateBMI(); // Recalculate BMI whenever weight or height changes
          }}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Height (cm)</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter height"
          keyboardType="numeric"
          value={height}
          onChangeText={value => {
            setHeight(value);
            calculateBMI(); // Recalculate BMI whenever weight or height changes
          }}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>BMI</Text>
        <TextInput
          style={styles.input}
          value={bmi}
          editable={false} // BMI field is non-editable
        />
      </View>

      {/* Save Changes Button */}
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F4F4F4', // Light background color for better contrast
  },
  header: {
    backgroundColor: '#FFE79A', // Header color
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: '#000', // Shadow for depth
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#FFBB33', // Border color for the avatar
  },
  editIcon: {
    position: 'absolute',
    right: 20,
    top: 20,
    backgroundColor: '#FFFFFF', // Background for edit icon
    borderRadius: 20,
    padding: 5,
  },
  iconText: {
    fontSize: 18,
    color: '#FFBB33', // Icon color
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333', // Darker text color for contrast
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  genderButton: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginHorizontal: 5,
    width: 100,
    alignItems: 'center',
    backgroundColor: '#F7F7F7', // Light background for buttons
  },
  selectedGender: {
    backgroundColor: '#FFE79A', // Highlight selected gender
    borderColor: '#F4CA64',
  },
  genderText: {
    fontSize: 16,
    color: '#333', // Dark text for contrast
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#555', // Slightly darker label color
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingLeft: 15,
    borderRadius: 10,
    backgroundColor: '#E0E0E0',
  },
  saveButton: {
    backgroundColor: '#A8F2A3', // Button color
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  saveButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333', // Dark text for contrast
  },
});

export default ChildProfile;
