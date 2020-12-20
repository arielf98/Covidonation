import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SearchBar } from 'react-native-elements'

export default class MySearchBar extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="Pencarian..."
        onChangeText={this.updateSearch}
        value={search}
        lightTheme = {true}
        containerStyle={{
          padding:0,
          backgroundColor: 'rgba(0,0,0,0)',
          // borderWidth: 0
        }}
        inputContainerStyle={{
          backgroundColor: '#EAF1F8',
          borderRadius: 15
        }}
      />
    );
  }
}