import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function TimeLeft(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.timer}>
        {props.currentTime} / {props.duration}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
  timer: {
    color: '#266a2e',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
export default TimeLeft;
