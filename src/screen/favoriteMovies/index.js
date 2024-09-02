import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Platform,
} from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const FavoriteMoviesScreen = ({navigation}) => {

  const dispatch = useDispatch();

  const { favoriteMovies } = useSelector((state) => state.movie);

  const handleViewDatails = item => {
    navigation.navigate('MovieDetail', {moviesData: item, screen: "FavoriteMoviesScreen"});
  };

  const renderItem = ({item}) => (
    <View style={styles.renderItemStyle}>
      <View style={styles.renderLeftItemStyle}>
        <Image
          source={{uri: `https://ww4.yts.nz${item.large_cover_image}`}}
          style={styles.movieImage}
          resizeMode="cover"
        />
      </View>
      <View style={styles.renderRightItemStyle}>
        <View style={styles.renderRightInnerStyle}>
          <Text style={styles.imageTitleText}>{item?.title}</Text>
          <Text style={styles.releaseDateTxt}>
            Drama, Crime | 1994 Two imprisoned men bond over a number of years,
            finding solace and eventual redemption through acts of common
            decency.
          </Text>
        </View>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => handleViewDatails(item)}>
          <Text style={styles.nextText}>View Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.statusBar}>
        <View style={styles.favoriteContainer}>
          <Image source={require('../../image/Frame.png')} style={styles.statusIcon} />
          <Text style={styles.textTitle}>Favorite Movies</Text>
        </View>
        <TouchableOpacity
          style={styles.genreButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.genreText1}>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageViewContainer}>
        {favoriteMovies.length === 0 ? (
          <View style={styles.noDataContainer}>
            <Text style={styles.noDataText}>No favorite movies found</Text>
          </View>
        ) : (
          <FlatList
            data={favoriteMovies}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={() => <View style={{height: 17}} />}
            ListHeaderComponent={() => <View style={{height: 15}} />}
            ListFooterComponent={() => <View style={{height: 25}} />}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default FavoriteMoviesScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  statusBar: {
    width: '100%',
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  favoriteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  imageViewContainer: {
    flex: 1,
  },
  movieImage: {
    width: 124,
    height: 180,
    borderRadius: 10,
    justifyContent: 'center', // Center the image horizontally
    alignItems: 'center', // Center the image vertically
    overflow: 'hidden', // Ensure the image doesn't overflow the container
    backgroundColor: '#000', // Add a background color to see the full area
  },
  imageTitleText: {
    fontSize: 20,
    color: 'black',
    fontWeight: '400',
  },
  releaseDateTxt: {
    fontSize: 13,
    color: 'black',
    marginTop: 10,
    fontWeight: '400',
  },
  nextButton: {
    borderRadius: 40,
    paddingVertical: 4,
    marginTop: 10,
    backgroundColor: '#5664F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '500',
  },
  textTitle: {
    fontSize: 24,
    color: 'black',
    fontWeight: '400',
  },
  genreButton: {
    borderRadius: 8,
    paddingVertical: 9,
    paddingHorizontal: 16,
    backgroundColor: '#5664F5',
  },
  genreText1: {
    fontSize: 16,
    color: 'white',
    fontWeight: '500',
  },
  renderItemStyle: {
    padding: 16,
    flexDirection: 'row',
    marginHorizontal: 16,
    borderRadius: 10,
    backgroundColor: 'white',
    borderColor: '#AFB3F862',
    borderWidth: 1,
    ...Platform.select({
      ios: {
        shadowColor: '#AFB3F882',
        shadowOffset: {width: 4, height: 4},
        shadowOpacity: 1,
        shadowRadius: 5.7,
      },
      android: {
        shadowColor: '#AFB3F8',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 1,
        shadowRadius: 6.7,
        elevation: 4,
      },
    }),
  },
  renderLeftItemStyle: {
    flex: 1,
    borderRadius: 10,
  },
  renderRightItemStyle: {
    flex: 1.3,
    borderRadius: 10,
    marginLeft: 10,
  },
  renderRightInnerStyle: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  noDataContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noDataText: {
    fontSize: 18,
    color: '#545454',
    fontWeight: '500',
  },
});
