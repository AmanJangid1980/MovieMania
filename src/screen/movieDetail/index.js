import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavoriteMovie,
  removeFavoriteMovie,
} from "../../redux/slices/movieSlice";
import Toast from "react-native-simple-toast";
import { styles } from "./style";

const MovieDetailScreen = ({ navigation, route }) => {
  const routeScreen = route?.params?.screen;
  const routeParams = route?.params?.moviesData;
  const dispatch = useDispatch();

  const { favoriteMovies } = useSelector((state) => state.movie);

  // Check if the movie is already in the favorites list
  const isFavorite = favoriteMovies.some(
    (movie) => movie.id === routeParams?.id
  );

  const onNextHandle = () => {
    if (routeScreen === "MyMoviesScreen" && !isFavorite) {
      dispatch(addFavoriteMovie(routeParams));
      Toast.showWithGravityAndOffset(
        "Movie added to favorites!",
        Toast.LONG,
        Toast.BOTTOM,
        0,
        -60
      );
    } else if (routeScreen !== "MyMoviesScreen" && isFavorite) {
      dispatch(removeFavoriteMovie(routeParams?.id));
      Toast.showWithGravityAndOffset(
        "Movie removed from favorites.",
        Toast.LONG,
        Toast.BOTTOM,
        0,
        -60
      );
    } else {
      Toast.showWithGravityAndOffset(
        "Movie is already in your favorites!",
        Toast.LONG,
        Toast.BOTTOM,
        0,
        -60
      );
    }

    navigation.goBack();
  };

  let formattedDate = moment(routeParams?.date_uploaded).format("MMMM D, YYYY");

  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar
        hidden={false}
        backgroundColor="white"
        barStyle="dark-content"
      />
      <View style={styles.statusBar}>
        <Image source={require("../../image/Frame.png")} style={styles.statusIcon} />
        <Text style={styles.textTitle}>My Movies</Text>
      </View>
      <View style={styles.imageViewContainer}>
        <Image
          source={{ uri: `https://ww4.yts.nz${routeParams.large_cover_image}` }}
          style={styles.movieImage}
          resizeMode="cover"
        />
        <Text style={styles.imageText}>{routeParams?.title}</Text>
        <View style={styles.spacing} />
        <Text style={styles.genreText}>
          A computer hacker learns from mysterious rebels about the true nature
          of his reality and his role in the war against its controllers.
        </Text>
        <View style={styles.spacing} />
        <View style={styles.releaseDateContainer}>
          <Text style={styles.releaseDateTxt}>Release Date:</Text>
          <Text style={styles.releaseDateTxt}>{formattedDate}</Text>
        </View>
        <View style={styles.spacingSmall} />
        <View style={styles.releaseDateContainer}>
          <Text style={styles.releaseDateTxt}>Genre:</Text>
          <View style={{ flexDirection: "row" }}>
            {routeParams?.genres?.map((item, index) => (
              <Text key={index} style={styles.releaseDateTxt}>
                {item}
                {index < routeParams.genres.length - 1 && ", "}
              </Text>
            ))}
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.nextButton} onPress={onNextHandle}>
        <Text style={styles.nextText}>
          {routeScreen === "MyMoviesScreen"
            ? isFavorite
              ? "Already in Favorites"
              : "Mark as Favorite"
            : "Remove from Favorite"}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MovieDetailScreen;
