// RecipeDetailScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

const RecipeDetailScreen: React.FC<{ route: any, navigation: any }> = ({ route, navigation }) => {
  const { dish } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{dish.name}</Text>
      <Image source={{ uri: dish.image }} style={styles.image} />
      <Text style={styles.description}>
        This is a detailed description of {dish.name}. It includes ingredients, cooking time, and more.
      </Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default RecipeDetailScreen;

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
});
