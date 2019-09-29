import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function VerticalSeparator(props) {
  return (
    <View
      style={[
        styles.separator,
        {
          borderTopColor: props.color ? props.color : '#eaeaea',
        },
      ]}></View>
  );
}

export default VerticalSeparator;

const styles = StyleSheet.create({
  separator: {
    borderTopWidth: 1,
  },
});
