import React, { Component } from 'react';
import Video from 'react-native-video';
import { StyleSheet } from 'react-native';
import Layout from '../components/layout';

class Player extends Component {
  render() {
    return (
      <Layout
        video={
          <Video
            source={require('../../../assets/StopMotion2.mp4')}
            ref={ref => {
              this.player = ref;
            }} // Store reference
            onBuffer={this.onBuffer} // Callback when remote video is buffering
            onError={this.videoError}
            style={styles.video}
            resizeMode="contain"
          />
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

// ' https://ia601907.us.archive.org/17/items/BigBuckBunny_199/big_buck_bunny_240p_2mb.mp4')

export default Player;
