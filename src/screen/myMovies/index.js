import React, { useState, useEffect, useCallback } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../redux/slices/movieSlice";
import { styles } from "./style";

const MyMoviesScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { movies, favoriteMovies, isLoading, error } = useSelector((state) => state.movie);

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(fetchMovies()); // Fetch movies when the component mounts
  }, [dispatch]);

  const handleMoviesDetail = useCallback(
    (item) => {
      navigation.navigate("MovieDetail", {
        moviesData: item,
        screen: "MyMoviesScreen",
      });
    },
    [navigation]
  );

  const filteredMovies = searchQuery
    ? movies.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : movies;

  const renderItem = useCallback(
    ({ item }) => (
      <TouchableOpacity
        style={styles.renderItemStyle}
        onPress={() => handleMoviesDetail(item)}
      >
        <Image
          source={{ uri: `https://ww4.yts.nz${item.large_cover_image}` }}
          style={styles.movieCardImage}
          resizeMode="cover"
        />

        <Text style={styles.imageTitleText}>{item.title}</Text>
        <Text style={styles.releaseDateTxt}>{`Rating: ${item.rating}`}</Text>
      </TouchableOpacity>
    ),
    [handleMoviesDetail]
  );

  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar hidden={false} backgroundColor="white" barStyle="dark-content" />
      <View style={styles.statusBar}>
        <View style={styles.statusBarLeftCon}>
          <Image source={require("../../image/Frame.png")} style={styles.statusIcon} />
          <View style={styles.titleView}>
            <Text style={styles.myTextTitle}>My</Text>
            <Text style={styles.myTextTitle}>Movies</Text>
          </View>
        </View>
        <View style={styles.statusBarRightCon}>
          <TextInput
            style={styles.textInput}
            autoCorrect={false}
            placeholder="Search..."
            placeholderTextColor={"#94A3B8"}
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)} // Directly update search query
          />
          <TouchableOpacity style={styles.searchIconBtn}>
            <Image source={require("../../image/ic_search.png")} style={styles.movieImage} />
          </TouchableOpacity>
        </View>
      </View>
      {isLoading ? (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : filteredMovies.length === 0 ? (
        <View style={styles.noDataContainer}>
          <Text style={styles.noDataText}>No movies found</Text>
        </View>
      ) : (
        <View style={styles.imageViewContainer}>
          <FlatList
            data={filteredMovies}
            numColumns={2}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            initialNumToRender={10}
            maxToRenderPerBatch={5}
            windowSize={10}
            ListHeaderComponent={() => <View style={{ height: 15 }} />}
            ListFooterComponent={() => <View style={{ height: 25 }} />}
            ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default MyMoviesScreen;
