import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const GenreButton = ({ title, onPress, style ,textStyle}) => {
  return (
    <TouchableOpacity style={[styles.genreButton, style]} onPress={onPress}>
      <Text style={[styles.genreText,textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  genreButton: {
    borderRadius: 8,
    paddingVertical: 13,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    borderColor: 'gray',
    borderWidth: 1,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  genreText: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
  },
});

export default GenreButton;
