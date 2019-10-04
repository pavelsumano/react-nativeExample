import React, { Component } from 'react';
import Video from 'react-native-video';
import { Text, StyleSheet, ActivityIndicator } from 'react-native';
import Layout from '../components/layout';
import ControlLayout from '../components/controlLayout';
import PlayPause from '../components/playPause';

class Player extends Component {
  state = {
    loading: true,
    paused: false,
  };
  onBuffer = ({ isBuffering }) => {
    this.setState({ loading: isBuffering });
  };
  onLoad = () => {
    this.setState({ loading: false });
  };
  playPause = () => {
    this.setState((oldState, oldProps) => {
      return {
        paused: !oldState.paused,
      };
    });
  };
  // playPause = () => {
  //   this.setState({
  //     paused: !this.state.paused,
  //   });
  // };

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
            onLoad={this.onLoad} // when remote video is load
            paused={this.state.paused}
          />
        }
        loader={<ActivityIndicator color="red" />}
        controls={
          <ControlLayout>
            <PlayPause onPress={this.playPause} paused={this.state.paused} />
            <Text>ProgressBar | </Text>
            <Text>timeLeft | </Text>
            <Text>fullScreen | </Text>
          </ControlLayout>
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
