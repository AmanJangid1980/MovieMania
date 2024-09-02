import React, { useEffect, useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Animated,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./style";
import { logout } from "../../redux/slices/authSlice";
import { useDispatch } from "react-redux";

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const [profileName, setProfileName] = useState("");
  const rotateAnim = useRef(new Animated.Value(0)).current; // Animated value for rotation

  useEffect(() => {
    const getName = async () => {
      try {
        const storedName = await AsyncStorage.getItem("profile_name");
        if (storedName) {
          setProfileName(JSON.parse(storedName));
        } else {
          const defaultName = "Rajotiya"; // Default name
          setProfileName(defaultName);
          await AsyncStorage.setItem(
            "profile_name",
            JSON.stringify(defaultName)
          );
        }
      } catch (error) {
        console.error("Failed to load profile name:", error);
      }
    };

    getName();

    // Start the rotation animation
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 10000, // 10 seconds for a full rotation
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      <View style={styles.profileContainer}>
        <Animated.Image
          source={require("../../image/profile.png")} // Placeholder for profile picture
          style={[styles.profileImage, { transform: [{ rotate }] }]}
        />
        <Text style={styles.nameText}>{profileName}</Text>
        <Text style={styles.bioText}>
          React Native Developer. Passionate about mobile development,
          cross-platform solutions, and continuous learning.
        </Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>2+</Text>
          <Text style={styles.statLabel}>Years Experience</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>4+</Text>
          <Text style={styles.statLabel}>Projects</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>10+</Text>
          <Text style={styles.statLabel}>Technologies</Text>
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <Text style={styles.sectionContent}>
          JavaScript, React Native, Redux, Node.js, Firebase, Git, CI/CD, REST
          APIs, React, TypeScript, HTML5, CSS
        </Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Experience</Text>
        <Text style={styles.sectionContent}>
          Developed cross-platform mobile applications using React Native,
          integrated backend services with Node.js, and deployed scalable apps
          with Firebase.
        </Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Projects</Text>

        {/* GloCoach Mobile App */}
        <View style={styles.projectItem}>
          <Text style={styles.projectTitle}>
            GloCoach Mobile App (iOS and Android)
          </Text>
          <Text style={styles.projectCompany}>
            Ollosoft Technologies Private Limited | Mansarovar, Jaipur | (March
            2024 - Present)
          </Text>
          <Text style={styles.projectDescription}>
            Developed the GloCoach mobile app to provide a seamless,
            cross-platform user experience for professional growth and coaching.
            Leveraged advanced technologies to offer personalized coaching and
            performance analytics.
          </Text>
          <Text style={styles.projectDetail}>
            Built Core Features: Developed key functionalities for the Boatflex
            app, ensuring a smooth and user-friendly experience.
          </Text>
          <Text style={styles.projectDetail}>
            State Management: Implemented Redux for efficient state management
            across the application.
          </Text>
          <Text style={styles.projectDetail}>
            Firebase Integration: Integrated @react-native-firebase/analytics
            and @react-native-firebase/crashlytics to monitor user behavior and
            app performance.
          </Text>
          <Text style={styles.projectDetail}>
            Increased Engagement: Boosted user engagement through push
            notifications and interactive media features.
          </Text>
          <Text style={styles.projectOutcome}>
            Outcome: Empowered professionals with personalized coaching, AI
            insights, and performance analytics for continuous learning and
            development.
          </Text>
        </View>

        {/* Boatflex App */}
        <View style={styles.projectItem}>
          <Text style={styles.projectTitle}>
            Boatflex App (iOS and Android)
          </Text>
          <Text style={styles.projectCompany}>
            Sumedha Softech (SSPL) | Vaishali Nagar, Jaipur
          </Text>
          <Text style={styles.projectDescription}>
            Developed the Boatflex app to streamline the boat booking process
            for users in Denmark, providing a user-friendly interface and
            comprehensive features for seamless boat rentals.
          </Text>
          <Text style={styles.projectDetail}>
            Built Core Features: Developed key functionalities for the Boatflex
            app, ensuring a smooth and user-friendly experience.
          </Text>
          <Text style={styles.projectDetail}>
            State Management: Implemented Redux for efficient state management
            across the application.
          </Text>
          <Text style={styles.projectDetail}>
            Firebase Integration: Integrated @react-native-firebase/analytics
            and @react-native-firebase/crashlytics to monitor user behavior and
            app performance.
          </Text>
          <Text style={styles.projectDetail}>
            Increased Engagement: Boosted user engagement through push
            notifications and interactive media features.
          </Text>
          <Text style={styles.projectOutcome}>
            Outcome: Boatflex has become a reliable and efficient platform for
            boat rentals, ensuring app reliability with advanced analytics and
            crash handling.
          </Text>
        </View>

        {/* Jublo App */}
        <View style={styles.projectItem}>
          <Text style={styles.projectTitle}>Jublo App (iOS and Android)</Text>
          <Text style={styles.projectCompany}>
            Sumedha Softech (SSPL) | Vaishali Nagar, Jaipur
          </Text>
          <Text style={styles.projectDescription}>
            Developed the Jublo app to facilitate communication and booking
            services between users and home service professionals, offering a
            comprehensive marketplace for booking various services.
          </Text>
          <Text style={styles.projectDetail}>
            Purpose: Online marketplace for users to book home service
            professionals for various tasks and needs.
          </Text>
          <Text style={styles.projectDetail}>
            Service Booking: Enables users to book electricians and craftsman
            service providers for home services easily.
          </Text>
          <Text style={styles.projectDetail}>
            Framework: Developed using React Native for seamless cross-platform
            functionality on iOS and Android.
          </Text>
          <Text style={styles.projectDetail}>
            Programming Language: Utilized TypeScript for robust, type-safe
            development and maintainable codebase.
          </Text>
          <Text style={styles.projectDetail}>
            State Management: Implemented Redux to handle complex application
            state and ensure performance efficiency.
          </Text>
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Contact</Text>
        <Text style={styles.sectionContent}>Email: rajotiyaaman@gmail.com</Text>
        {/* <Text style={styles.sectionContent}>
          LinkedIn: linkedin.com/in/rajotiya
        </Text> */}
      </View>

      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionButton, { backgroundColor: "#FF6347" }]}
          onPress={handleLogout}
        >
          <Text style={styles.actionButtonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
