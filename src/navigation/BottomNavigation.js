import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

import WelcomeScreen from "../screen/welcome";
import FavoriteGenres from "../screen/favoriteGenres";
import MovieDetailScreen from "../screen/movieDetail";
import MyMoviesScreen from "../screen/myMovies";
import ProfileScreen from "../screen/profileScreen";
import SearchScreen from "../screen/searchScreen";
import FavoriteMoviesScreen from "../screen/favoriteMovies";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="MyMovies"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "MyMovies") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "FavoriteMovies") {
            iconName = focused ? "heart" : "heart-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search-outline";
          }

          return (
            <Ionicons
              name={iconName}
              size={size || 22}
              color={color || "black"}
            />
          );
        },
        tabBarLabel: () => null,
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="MyMovies" component={MyMoviesScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="FavoriteMovies" component={FavoriteMoviesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="BottomNavigation"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="MovieDetail" component={MovieDetailScreen} />
        <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
