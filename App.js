import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Navigation from './Navigation/Navigation'
import Search from './components/search'

export default class App extends React.Component {
  render() {
    return (
      <Navigation/>
      );
  }
}