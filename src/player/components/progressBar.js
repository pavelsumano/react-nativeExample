import React from 'react';
import {
  Platform,
  ProgressBarAndroid,
  ProgressViewIOS,
  StyleSheet,
} from 'react-native';

const ProgressBar = props =>
  // Dependiendo de la plataforma es la barra que renderizamos
  Platform.select({
    ios: (
      <ProgressViewIOS
        style={styles.progressBar}
        progressTintColor="#266a2e"
        trackTintColor="#d3d3d3"
        progress={props.progress}
      />
    ),
    android: (
      <ProgressBarAndroid
        color="#266a2e"
        indeterminate={false}
        styleAttr="Horizontal"
        style={styles.progressBar}
        progress={props.progress}
      />
    ),
  });

const styles = StyleSheet.create({
  progressBar: {
    width: 160,
  },
});

export default ProgressBar;
