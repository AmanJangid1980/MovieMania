import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { loadAuthState, login } from "../../redux/slices/authSlice";

const WelcomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { userToken, isLoading } = useSelector((state) => state.auth);
  const [isName, setName] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    dispatch(loadAuthState());
  }, [dispatch]);

  const handleTextChange = (text) => {
    setName(text);
    if (text.length > 0) {
      setError(""); // Clear the error when the user starts typing
    }
  };

  const onNextHandle = async () => {
    if (isName.length > 0) {
      // dispatch(login(isName));
      // await AsyncStorage.setItem("profile_name", JSON.stringify(isName));
      navigation.navigate("Favorite",isName); // Update to the correct screen name
    } else {
      setError("Name is required");
      console.log("Next pressed:", isName);
    }
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar
        hidden={false}
        backgroundColor="white"
        barStyle="dark-content"
      />
      <View style={{ height: "10%" }} />

      <Image
        source={require("../../image/ic_movies.png")}
        style={{ width: 40, height: 40 }}
      />

      <View style={{ height: 30 }} />
      <Text style={styles.textStyle1}>Welcome to My Movies</Text>
      <View style={{ height: 16 }} />
      <Text style={styles.textStyle2}>Let’s get to know you!</Text>
      <View style={{ height: 30 }} />
      <Text style={styles.textStyle}>Enter your name</Text>
      <View style={{ height: 16 }} />
      <TextInput
        style={[styles.textInput, error ? styles.errorBorder : null]}
        autoCorrect={false}
        placeholder="Your Name"
        placeholderTextColor={"#94A3B8"}
        value={isName}
        onChangeText={handleTextChange}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <View style={{ height: 13 }} />
      <TouchableOpacity style={styles.nextBtn} onPress={onNextHandle}>
        <Text style={styles.nextTextStyle}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  nextTextStyle: {
    fontSize: 16,
    color: "white",
    fontWeight: "500",
  },
  textInput: {
    width: "85%",
    height: 44,
    fontSize: 14,
    fontWeight: "400",
    color: "black",
    paddingHorizontal: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#94A3B8",
    backgroundColor: "white",
  },
  errorBorder: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 20,
  },
  textStyle1: {
    fontSize: 24,
    color: "black",
    fontWeight: "700",
  },
  textStyle2: {
    fontSize: 16,
    color: "black",
    fontWeight: "500",
  },
  textStyle: {
    fontSize: 16,
    color: "black",
    fontWeight: "700",
  },
  nextBtn: {
    width: "85%",
    height: 44,
    borderRadius: 8,
    backgroundColor: "#5664F5",
    justifyContent: "center",
    alignItems: "center",
  },
});
