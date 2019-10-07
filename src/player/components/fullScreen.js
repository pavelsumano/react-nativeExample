import React from 'react';
import { View, StyleSheet, TouchableHighlight, Image } from 'react-native';

function FullScreen(props) {
  return (
    <View>
      <TouchableHighlight
        onPress={props.onPress}
        style={styles.container}
        underlayColor="#266a2e">
        {/* {props.fullScreen ? (
          <Image source={require('../../../assets/minimize.png')} />
        ) : ( */}
        <Image source={require('../../../assets/maximize.png')} />
        {/* )} */}
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
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
export default FullScreen;
