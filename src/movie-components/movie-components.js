import React from 'react';
import {Text} from 'react-native';

export const MovieTitle = ({year, title, style}) => year ?
  <Text testID="movie_detail_title" style={style}>{title} ({year})</Text> :
  <Text testID="movie_detail_title" style={style}>{title}</Text>;

export const MovieScore = ({vote_average, style}) => <Text style={style}>☆ {vote_average}</Text>;
