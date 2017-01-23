import React from 'react';
import {Text} from 'react-native';

export const MovieTitle = props => props.year ?
  <Text style={props.style}>{props.title} ({props.year})</Text> :
  <Text style={props.style}>{props.title}</Text>;

export const MovieScore = props => <Text style={props.style}>☆ {props.vote_average}</Text>;
