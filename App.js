import React, { Component } from 'react';
import { Text } from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestionList';
import API from './utils/api';

type Props = {};
export default class App extends Component<Props> {
  componentDidMount() {
    API.getSuggestion(10);
  }
  render() {
    return (
      <Home>
        <Header>
          <Text> texto extra</Text>
        </Header>
        <Text>buscador</Text>
        <Text>categorias</Text>
        <SuggestionList />
      </Home>
    );
  }
}
