import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import API from '../utils/api';
import Home from './screens/containers/home';
import Header from './sections/components/header';
import SuggestionList from './videos/containers/suggestionList';
import CategoryList from './videos/containers/categoryList';
import Movie from './screens/containers/movie';
import Search from './sections/containers/buscador';

class AppLayout extends Component {
  async componentDidMount() {
    const categoryList = await API.getMovies();
    this.props.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList,
      },
    });

    const suggestionList = await API.getSuggestion(10);
    this.props.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        suggestionList,
      },
    });
  }

  render() {
    if (this.props.selectedMovie) {
      return <Movie />;
    }
    return (
      <Home>
        <Header />
        <Search />
        <CategoryList />
        <SuggestionList />
      </Home>
    );
  }
}
function mapStateProps(state) {
  return {
    selectedMovie: state.selectedMovie,
  };
}

export default connect(mapStateProps)(AppLayout);
