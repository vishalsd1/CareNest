import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>Home</Text>
        <Image source={require('./image.png')} style={styles.profilePic} />

      </View>

      {/* Recipe Collection and Consult an Expert Section */}
      <View style={styles.gridRow}>
        <TouchableOpacity style={styles.gridItem}>
          <Image source={require('./image2.png')}  style={styles.icon} />
          <Text style={styles.gridText}>Recipe Collection</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem}>
          <Image source={require('./image.png')}  style={styles.icon} />
          <Text style={styles.gridText}>Consult an Expert</Text>
        </TouchableOpacity>
      </View>

      {/* Get Started Section */}
      <TouchableOpacity style={styles.getStartedSection}>
        <Image source={require('./image.png')}  style={styles.getStartedIcon} />
        <Text style={styles.getStartedText}>Get Started</Text>
        <Text style={styles.subText}>Track Your Meals Today</Text>
      </TouchableOpacity>

      {/* Today's Food Coverage Section */}
      <View style={styles.foodCoverage}>
        <Text style={styles.subHeading}>Today's Food Coverage:</Text>
        <View style={styles.gridRow}>
          <View style={styles.gridItem}>
          <Image source={require('./image.png')}  style={styles.icon} />
            <Text style={styles.gridText}>Fruit</Text>
          </View>
          <View style={styles.gridItem}>
        <Image source={require('./image.png')}  style={styles.icon} />
            <Text style={styles.gridText}>Grains</Text>
          </View>
          <View style={styles.gridItem}>
     <Image source={require('./image.png')}  style={styles.icon} />
            <Text style={styles.gridText}>Pulses</Text>
          </View>
          <View style={styles.gridItem}>
             <Image source={require('./image.png')} style={styles.icon} />
            <Text style={styles.gridText}>Veg</Text>
          </View>
          <View style={styles.gridItem}>
            <Image source={require('./image.png')}  style={styles.icon} />
            <Text style={styles.gridText}>Dairy</Text>
          </View>
        </View>
      </View>

      {/* Grocery List Section */}
      <TouchableOpacity style={styles.largeSection}>
       <Image source={require('./image.png')} style={styles.largeIcon} />
        <Text style={styles.largeText}>Grocery List</Text>
      </TouchableOpacity>

      {/* Your Favourites and What's in Your Fridge? Section */}
      <View style={styles.gridRow}>
        <TouchableOpacity style={styles.gridItem}>
          <Image source={require('./image.png')} style={styles.icon} />
          <Text style={styles.gridText}>Your Favourites</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem}>
          <Image source={{ uri: 'https://your-fridge-icon-url.png' }} style={styles.icon} />
          <Text style={styles.gridText}>What's in your fridge?</Text>
        </TouchableOpacity>
      </View>

      {/* Journey Tracker and Community Section */}
      <View style={styles.gridRow}>
        <TouchableOpacity style={styles.gridItem}>
          <Image source={{ uri: 'https://your-journey-tracker-icon-url.png' }} style={styles.icon} />
          <Text style={styles.gridText}>Journey Tracker</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem}>
          <Image source={{ uri: 'https://your-community-icon-url.png' }} style={styles.icon} />
          <Text style={styles.gridText}>Community</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FFE4C4',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2F4F4F',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  gridItem: {
    width: '48%',
    backgroundColor: '#D3D3D3',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  gridText: {
    marginTop: 8,
    fontSize: 16,
    color: '#2F4F4F',
  },
  getStartedSection: {
    backgroundColor: '#FFB6C1',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
  },
  getStartedIcon: {
    width: 50,
    height: 50,
  },
  getStartedText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2F4F4F',
  },
  subText: {
    fontSize: 16,
    color: '#696969',
  },
  foodCoverage: {
    marginBottom: 16,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2F4F4F',
    marginBottom: 8,
  },
  largeSection: {
    backgroundColor: '#D3D3D3',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 16,
  },
  largeIcon: {
    width: 50,
    height: 50,
  },
  largeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2F4F4F',
    marginTop: 8,
  },
  icon: {
    width: 40,
    height: 40,
  },
});

export default HomeScreen;
