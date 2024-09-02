import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import GenreButton from "../../components/GenreButton";
import { useDispatch } from "react-redux";
import { selectFavoriteGenresAction } from "../../redux/slices/movieSlice";
import { login } from "../../redux/slices/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FavoriteGenres = ({ navigation, route }) => {
  const routeParams = route?.params;

  const dispatch = useDispatch();
  const [selectedGenres, setSelectedGenres] = useState([]);

  const onNextHandle = async () => {
    dispatch(selectFavoriteGenresAction(selectedGenres));
    dispatch(login(routeParams)); // Assuming routeParams contains the user data for login
    await AsyncStorage.setItem("profile_name", JSON.stringify(routeParams));
    navigation.navigate('BottomNavigation', { screen: 'MyMovies' });
  };

  const genres = ["Action", "Comedy", "Drama", "Horror", "Romance", "Sci-Fi"];

  const toggleGenreSelection = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((item) => item !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar
        hidden={false}
        backgroundColor="white"
        barStyle="dark-content"
      />
      <View style={styles.statusBar}>
        <Text style={styles.textTitle}>Select Your Favorite Genres</Text>
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.buttonContainer}>
          {genres.map((genre) => (
            <GenreButton
              key={genre}
              title={genre}
              onPress={() => toggleGenreSelection(genre)}
              style={[
                styles.genreButton,
                selectedGenres.includes(genre) && styles.selectedButton,
              ]}
              textStyle={[
                selectedGenres.includes(genre) && styles.selectedTextStyle,
              ]}
            />
          ))}
        </View>
      </View>
      <TouchableOpacity style={styles.nextButton} onPress={onNextHandle}>
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default FavoriteGenres;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "white",
  },
  statusBar: {
    width: "100%",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 }, // Bottom shadow only
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap", // Allow buttons to wrap to the next line
    justifyContent: "space-between", // Space buttons evenly across the row
    marginHorizontal: 10,
  },
  genreButton: {
    width: "30%", // Ensures three buttons fit in a row
    marginBottom: 10, // Space between rows
    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 13,
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    alignItems: "center",
  },
  selectedButton: {
    backgroundColor: "#5664F5",
    borderColor: "#5664F5",
  },
  selectedTextStyle: {
    color: "white",
  },
  nextButton: {
    width: "90%",
    height: 44,
    borderRadius: 8,
    backgroundColor: "#5664F5",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 25,
    left: "5%",
  },
  nextText: {
    fontSize: 16,
    color: "white",
    fontWeight: "500",
  },
  textTitle: {
    fontSize: 24,
    color: "black",
    fontWeight: "700",
  },
});
