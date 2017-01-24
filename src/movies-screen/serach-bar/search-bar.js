import React, {Component} from 'react';
import {TextInput} from 'react-native';
import _ from 'lodash';

export default class SearchBar extends Component {

  constructor() {
    super();
    this.onSearch = _.debounce(this.onSearch.bind(this), 300);
  }

  render() {
    return <TextInput
      {...this.props}
      style={{height: 40, borderColor: 'gray', borderWidth: 1, margin: 5, borderRadius: 5}}
      onChangeText={text => this.onSearch(text)}
      placeholder="Search here"/>
  }

  onSearch(text) {
    this.props.onSearch(text);
  }
}
