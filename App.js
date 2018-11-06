/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import LoginPage from './src/components/loginpage';
import Homepage from './src/components/homepage';
import { Actions , Router , Scene } from 'react-native-router-flux';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (

      <Router navigationBarStyle={{ backgroundColor: 'red'}} navBarButtonColor="white">
      <Scene key="root">
        <Scene key="loginpage" component={LoginPage} title="Login Page" hideNavBar={true} initial />
        <Scene key="homepage" component={Homepage} hideNavBar={true} title="My Cards"    />
      </Scene>  
      </Router>
        
    );
  }
}

const styles = StyleSheet.create({
  
});
