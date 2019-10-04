import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestionList';
import CategoryList from './src/videos/containers/categoryList';

import Loading from './src/sections/components/loading';
import API from './utils/api';

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
