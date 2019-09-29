import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';

import Layout from '../components/suggestion-list-layout';
import Empty from '../components/empty';
import Separador from '../components/verticalSeparator';
import Suggestion from '../components/suggestion';

class SuggestionList extends Component {
  renderEmpty = () => <Empty text="No hay sugerencias :( " />;
  ItemSeparator = () => <Separador />;
  renderItem = ({ item }) => {
    return <Suggestion {...item} />;
  };
  render() {
    const list = [
      {
        title: 'onamus',
        key: 1,
      },
      {
        title: 'sumano',
        key: 2,
      },
    ];
    return (
      <Layout title="Recomendado para ti">
        <FlatList
          data={list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.ItemSeparator}
          renderItem={this.renderItem}
        />
      </Layout>
    );
  }
}

export default SuggestionList;
