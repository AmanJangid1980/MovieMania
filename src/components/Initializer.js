import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  loadFavoriteGenres,
  loadFavoriteMovies,
} from "../redux/slices/movieSlice";
import { AuthAction, loadAuthState } from "../redux/slices/authSlice";
import * as SplashScreen from "expo-splash-screen";

const Initializer = ({ children }) => {
  const [isReady, setIsReady] = useState(false); // To manage splash screen state
  const dispatch = useDispatch();

  useEffect(() => {
    // Keep the splash screen visible while we fetch resources
    SplashScreen.preventAutoHideAsync();

    const prepareResources = async () => {
      try {
        dispatch(loadAuthState()); // Load auth state from AsyncStorage
        dispatch(loadFavoriteMovies()); // Load favorite movies from AsyncStorage
        dispatch(loadFavoriteGenres()); // Load favorite genres from AsyncStorage

        // Simulate a delay to load resources
        await new Promise((resolve) => setTimeout(resolve, 1000)); // 3 seconds delay

        const value = await AsyncStorage.getItem("user_token_key");
        const useData2 = value ? JSON.parse(value) : null;
        const userAuth = useData2 && useData2.status !== null ? 3 : 2;
        console.warn(
          "useData2---------user_access_token---App------->",
          useData2
        );

        if (userAuth) {
          dispatch(AuthAction(userAuth)); // Trigger RootNavigation to show MainNavigation
        }
      } catch (e) {
        console.log("App--error-user_access_token-------", e);
      } finally {
        // Signal to the app that resources are ready
        setIsReady(true);
      }
    };

    prepareResources();
  }, [dispatch]);

  useEffect(() => {
    if (isReady) {
      SplashScreen.hideAsync(); // Hide the splash screen once the resources are ready
    }
  }, [isReady]);

  return <>{isReady ? children : null}</>; // Render children only when ready
};

export default Initializer;
