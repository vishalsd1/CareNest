import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>CareNest</Text>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* User Info Section */}
        <View style={styles.userInfo}>
        <Image
  source={require('./baby-moon.png')} // Ensure the path is correct
  style={styles.avatar}
/>

          <TouchableOpacity onPress={() => navigation.navigate('babypr')}>
            <View>
              <Text style={styles.userName}>Vishal</Text>
              <Text style={styles.userAge}>16 Months</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Account Settings */}
        <Text style={styles.sectionTitle}>Accounts</Text>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('sett')}>
          <Text style={styles.optionText}>⚙️ Account Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>🔔 Notification Permission</Text>
        </TouchableOpacity>

        {/* Terms & Policy */}
        <Text style={styles.sectionTitle}>Terms & Policy</Text>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>🤝 Support</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>📄 Terms of Service</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>📜 Privacy Policy</Text>
        </TouchableOpacity>

        {/* Social */}
        <Text style={styles.sectionTitle}>Social</Text>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>📷 Follow on Instagram</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>🔄 Check for Updates</Text>
        </TouchableOpacity>

        {/* Logout Button */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => navigation.navigate('Home')} // Navigate to Home on press
        >
          <Text style={styles.logoutText}>🔒 Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F8',
    paddingHorizontal: 16,
  },
  header: {
    backgroundColor: '#A0D8E1',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  scrollContainer: {
    paddingBottom: 20, // Optional: Adds extra space at the bottom of the scroll
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  userAge: {
    fontSize: 14,
    color: '#7B7B7B',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  option: {
    backgroundColor: '#E9E9F0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 1, // Added shadow effect for better visual separation
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  logoutButton: {
    backgroundColor: '#FF6B6B',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    elevation: 2, // Enhanced shadow effect for logout button
    marginBottom:70,
  },
  logoutText: {
    fontSize: 16,
    color: 'white',
  },
});

export default SettingsScreen;
