import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  statusBar: {
    width: '100%',
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  statusIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  imageViewContainer: {
    flex: 1,
    marginTop: '10%',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  movieImage: {
    width: 200,
    height: 300,
    borderRadius: 10,
    justifyContent: 'center', // Center the image horizontally
    alignItems: 'center', // Center the image vertically
    overflow: 'hidden', // Ensure the image doesn't overflow the container
    backgroundColor: '#000', // Add a background color to see the full area
  },
  imageText: {
    fontSize: 24,
    color: 'black',
    fontWeight: '700',
  },
  genreText: {
    fontSize: 16,
    color: 'black',
    fontWeight: '400',
    textAlign: 'center',
  },
  releaseDateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  releaseDateTxt: {
    fontSize: 13,
    color: 'black',
    fontWeight: '400',
  },
  nextButton: {
    width: '90%',
    height: 44,
    borderRadius: 8,
    backgroundColor: '#5664F5',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 25,
    left: '5%',
  },
  nextText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '500',
  },
  textTitle: {
    fontSize: 20,
    color: 'black',
    fontWeight: '400',
  },
  spacing: {
    height: '3%',
  },
  spacingSmall: {
    height: '1%',
  },
});