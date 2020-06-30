import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';

function PlayPause(props) {
  return (
    <TouchableHighlight
      onPress={props.onPress}
      style={styles.container}
      underlayColor="#266a2e"
      hitSlop={{
        left: 5,
        top: 5,
        bottom: 5,
        right: 5,
      }}>
      {props.paused ? (
        <Text style={styles.button}>PLAY</Text>
      ) : (
        <Text style={styles.button}>PAUSE</Text>
      )}
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    color: '#266a2e',
    fontSize: 10,
    fontWeight: 'bold',
  },
  container: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    height: 25,
    marginRight: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#266a2e',
    backgroundColor: 'rgba(192, 192, 192 ,0.3)',
  },
});
export default PlayPause;
