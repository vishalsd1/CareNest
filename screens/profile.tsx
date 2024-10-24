import React from 'react';
import { View, Text, TextInput, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const MealListScreen = () => {
  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput style={styles.searchInput} placeholder="Search" />
        <TouchableOpacity>
          <Text style={styles.searchIcon}>🔍</Text>
        </TouchableOpacity>
      </View>

      {/* Scrollable Meal List */}
      <ScrollView>
        {[...Array(4)].map((_, index) => (
          <View key={index} style={styles.mealCard}>
            <Image
              source={{ uri: 'https://example.com/appam.jpg' }} // Replace with actual image URL
              style={styles.mealImage}
            />
            <View style={styles.mealInfo}>
              <Text style={styles.mealName}>Appam</Text>
              <Text style={styles.mealDescription}>Tiffin Friendly, Energy Booster + 2 more.</Text>
              <View style={styles.mealTags}>
                <Text>⏲️ 15 Mins</Text>
                <Text>🌾 Grains</Text>
                <Text>🍇 Pulses</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFEFF',
    paddingHorizontal: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E9E9F0',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 20,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  searchIcon: {
    fontSize: 20,
    marginLeft: 10,
    color: '#333',
  },
  mealCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFE0',
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    alignItems: 'center',
  },
  mealImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 10,
  },
  mealInfo: {
    flex: 1,
  },
  mealName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  mealDescription: {
    fontSize: 14,
    color: '#7B7B7B',
    marginBottom: 5,
  },
  mealTags: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
});

export default MealListScreen;
