import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

class Search extends Component {
  state = {};
  handleSubmit = () => {
    console.log('submit', this.state.text);
  };
  handleChangeText = text => {
    this.state({
      text,
    });
  };

  render() {
    return (
      <TextInput
        style={styles.input}
        placeholder="Busca tu pelicula"
        underlineColorAndroid="transparent"
        autoCorrect={false}
        autoCapitalize="none"
        onSubmitEditing={this.handleSubmit}
        onChangeText={this.handleChangeText}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#eaeaea',
  },
});

export default Search;
