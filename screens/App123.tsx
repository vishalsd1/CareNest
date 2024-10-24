import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import the screen components
import HomeScreen from './Home';
import SettingsScreen from './Mealplan';
import ProfileScreen from './profile';
import NotificationsScreen from './search';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
