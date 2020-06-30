import React, { Component } from 'react';
import Video from 'react-native-video';
import { Text, StyleSheet, ActivityIndicator } from 'react-native';
import Layout from '../components/layout';
import ControlLayout from '../components/controlLayout';
import PlayPause from '../components/playPause';
import TimeLeft from '../components/timeLeft';
import ProgressBar from '../components/progressBar';
import FullScreen from '../components/fullScreen';

class Player extends Component {
  state = {
    loading: true,
    paused: false,
    currentTime: 0.0,
    duration: 0.0,
    fullScreen: false,
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

  onProgress = playload => {
    let currentTime = playload.currentTime / 60; //tiempo transcurrido en minutos
    let minutes = Math.floor(currentTime); //tiempo transcurrido sin decimales
    let seconds = currentTime % 1;
    seconds = (seconds * 60) / 1000;
    let time = (minutes + seconds * 10).toFixed(2); //toFixed(2) 2 decimales
    let duration = (playload.seekableDuration / 60).toFixed(2); //playableDuration: duracion de todo el video
    this.setState({
      currentTime: time,
      progress: playload.currentTime / playload.seekableDuration,
      duration: duration,
    });
  };

  fullScreen = () => {
    this.setState(function(prevState) {
      return { fullScreen: !prevState.fullScreen };
    });
  };

  onFullScreen = () => {
    this.fullScreen();
    // this.state.fullScreen
    //   ? this.player.dismissFullscreenPlayer() :
    this.player.presentFullscreenPlayer(); //esto no funciona del todo bien
  };

  render() {
    return (
      <Layout
        loading={this.state.loading}
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
            onProgress={this.onProgress}
          />
        }
        loader={<ActivityIndicator color="red" />}
        controls={
          <ControlLayout>
            <PlayPause onPress={this.playPause} paused={this.state.paused} />
            <ProgressBar progress={this.state.progress} />
            <TimeLeft
              duration={this.state.duration}
              currentTime={this.state.currentTime}
            />
            <FullScreen
              fullScreen={this.state.fullScreen}
              onPress={this.onFullScreen}
            />
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

// source={{
//   uri:
//     'https://ia601907.us.archive.org/17/items/BigBuckBunny_199/big_buck_bunny_240p_2mb.mp4',
// }}

// source={require('../../../assets/StopMotion2.mp4')}

export default Player;
