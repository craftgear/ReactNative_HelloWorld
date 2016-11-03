/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, View, Text, TextInput, Image, StatusBar, Dimensions, StyleSheet } from 'react-native';

let screenHeight = Dimensions.get("window").height;
class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}</Text>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { showText: true };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({showText: !this.state.showText})
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : '';
    return (
      <Text>{display}</Text>
    );
  }
}

class LotsOfStyles extends Component {
  render() {
    return (
      <View>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigblue}>just bigblue</Text>
        <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
        <Text style={[styles.red, styles.bigblue]}>red, then big blue</Text>
      </View>  
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

class FixedDimensionsBasics extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
      }}>
        <View style={{height: 50 ,backgroundColor: 'powderblue'}}></View>
        <View style={{height: 50 ,backgroundColor: 'skyblue'}}></View>
        <View style={{height: 50 ,backgroundColor: 'steelblue'}}></View>
      </View>
    )
  }
}

class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={(text) => this.setState({text})}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {this.state.text.split(' ').map(v => v && '🍕').join(' ')}
      </Text>
      </View>
    )
  }
}
export default class ReactNative_HelloWorld extends Component {
  render() {
    return (
      <PizzaTranslator/>
    );
  }
}

AppRegistry.registerComponent('ReactNative_HelloWorld', () => ReactNative_HelloWorld);
