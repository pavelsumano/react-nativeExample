import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';

import Layout from '../components/suggestion-list-layout';
import Empty from '../components/empty';
import Separador from '../components/verticalSeparator';

class SuggestionList extends Component {
  renderEmpty = () => <Empty text="No hay sugerencias :( " />;
  ItemSeparator = () => <Separador />;
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
          renderItem={({ item }) => <Text> {item.title} </Text>}
        />
      </Layout>
    );
  }
}

export default SuggestionList;
