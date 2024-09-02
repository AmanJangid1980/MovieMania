import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "../screen/welcome";
import FavoriteGenres from "../screen/favoriteGenres";

const Stack = createNativeStackNavigator();


 const AuthNavigation = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Favorite" component={FavoriteGenres} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

export default AuthNavigation
