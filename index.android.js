/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, View, Text, Image, StatusBar, Dimensions } from 'react-native';

let screenHeight = Dimensions.get("window").height;
class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}</Text>
    );
  }
}
export default class ReactNative_HelloWorld extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Greeting name='Hoge'></Greeting>
        <Greeting name='Hoge'></Greeting>
        <Greeting name='Hoge'></Greeting>
      </View>
    );
  }
}

AppRegistry.registerComponent('ReactNative_HelloWorld', () => ReactNative_HelloWorld);
