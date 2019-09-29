import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function Suggestion(props) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image
          style={styles.cover}
          source={require('../../../assets/logo.png')}
        />
        <View style={styles.genre}>
          <Text style={styles.genreText}> genero</Text>
        </View>
      </View>
      <View style={styles.rigth}>
        <Text style={styles.title}> MovieTitle</Text>
        <Text style={styles.year}>movieYear</Text>
        <Text style={styles.rating}>movieRating</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  genre: {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: '#000',
    paddingHorizontal: 5,
    paddingVertical: 7,
  },
  genreText: {
    color: '#fff',
    fontSize: 11,
  },
  cover: {
    height: 150,
    width: 100,
    resizeMode: 'contain',
  },
  rigth: {
    paddingLeft: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    color: '#44546b',
  },
  year: {
    backgroundColor: '#70b124',
    paddingVertical: 4,
    color: '#fff',
    fontSize: 11,
    borderRadius: 5,
    overflow: 'hidden',
    alignSelf: 'flex-start',
  },
  rating: {
    color: '#6b6b6b',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Suggestion;