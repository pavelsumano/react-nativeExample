import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestionList';
import CategoryList from './src/videos/containers/categoryList';
import Loading from './src/sections/components/loading';
import API from './utils/api';

import Video from 'react-native-video';

type Props = {};
export default class App extends Component<Props> {
  state = {
    suggestionList: [],
    categoryList: [],
    loading: true,
  };

  async componentDidMount() {
    const movies = await API.getSuggestion(10);
    const categories = await API.getMovies();
    console.log(movies);
    console.log(categories);
    this.setState({
      suggestionList: movies,
      categoryList: categories,
      loading: false,
    });
  }
  render() {
    return (
      <Home>
        <Header />
        <View
          style={{
            flex: 1,
            height: 100,
          }}>
          <Video
            source={{
              uri:
                'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4',
            }}
            ref={ref => {
              this.player = ref;
            }} // Store reference
            onBuffer={this.onBuffer} // Callback when remote video is buffering
            onError={this.videoError}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            }}
            resizeMode="contain"
          />
        </View>
        <Text>buscador</Text>
        <Text>categorias</Text>
        {/* {this.state.loading ? (
          <Loading />
        ) : ( */}
        <CategoryList list={this.state.categoryList} />
        <SuggestionList list={this.state.suggestionList} />
        {/* )} */}
      </Home>
    );
  }
}
