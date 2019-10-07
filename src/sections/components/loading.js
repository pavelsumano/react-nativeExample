import React, { Component } from 'react';
import {
  SafeAreaView,
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
