import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';

import Layout from '../components/suggestion-list-layout';
import Empty from '../components/empty';
import Separador from '../components/verticalSeparator';
import Suggestion from '../components/suggestion';

class SuggestionList extends Component {
  keyExtractor = item => item.id.toString();
  renderEmpty = () => <Empty text="No hay sugerencias :( " />;
  ItemSeparator = () => <Separador />;
  renderItem = ({ item }) => {
    return <Suggestion {...item} />;
  };

  render() {
    return (
      <Layout title="Recomendado para ti">
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.ItemSeparator}
          renderItem={this.renderItem}
        />
      </Layout>
    );
  }
}

export default SuggestionList;
