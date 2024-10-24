import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const MealPlanScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Meal Plan</Text>
      </View>

      {/* Food Coverage */}
      <View style={styles.foodCoverage}>
        <Text style={styles.foodCoverageTitle}>Today's Food Coverage:</Text>
        <View style={styles.foodIcons}>
          <Text style={styles.foodIcon}>🍎 Fruit</Text>
          <Text style={styles.foodIcon}>🌾 Grains</Text>
          <Text style={styles.foodIcon}>🍇 Pulses</Text>
          <Text style={styles.foodIcon}>🍆 Veg</Text>
          <Text style={styles.foodIcon}>🥛 Dairy</Text>
        </View>
      </View>

      {/* Meal Sections */}
      {['Breakfast', 'Lunch', 'Dinner'].map((meal, index) => (
        <View key={index} style={[styles.mealSection, { backgroundColor: index === 1 ? '#C2F8F3' : index === 2 ? '#C9DDBA' : '#FDE8CE' }]}>
          <Text style={styles.mealTitle}>🍞 {meal}</Text>
          <View style={styles.mealCard}>
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
        </View>
      ))}

      {/* Allergy Question */}
      <View style={styles.questionCard}>
        <Text style={styles.questionText}>Is Vishal allergic to paneer?</Text>
        <View style={styles.questionButtons}>
          <TouchableOpacity style={styles.yesButton}>
            <Text style={styles.buttonText}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.noButton}>
            <Text style={styles.buttonText}>No</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F8',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  header: {
    backgroundColor: '#878FFF',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  foodCoverage: {
    backgroundColor: '#C8E6C9',
    borderRadius: 20,
    padding: 15,
    marginBottom: 20,
  },
  foodCoverageTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  foodIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  foodIcon: {
    fontSize: 16,
  },
  mealSection: {
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
  },
  mealTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  mealCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFE0',
    padding: 10,
    borderRadius: 20,
  },
  mealImage: {
    width: 70,
    height: 70,
    borderRadius: 15,
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
  questionCard: {
    backgroundColor: '#FFFFE0',
    padding: 20,
    borderRadius: 20,
    marginTop: 20,
  },
  questionText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  questionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  yesButton: {
    backgroundColor: '#F9B7B5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  noButton: {
    backgroundColor: '#C4FFC1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MealPlanScreen;
