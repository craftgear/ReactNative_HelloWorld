/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, View, ListView, ScrollView, Text, TextInput, Image, StatusBar, Dimensions, StyleSheet, Navigator } from 'react-native';
import MyScene from './components/MyScene';

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

class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  render() {
    return (
      <ScrollView>
        <Text style={{fontSize: 96}}>Scroll Me Plz</Text>
        <Image source={require('./img/favicon.png')}></Image>
        <Image source={require('./img/favicon.png')}></Image>
        <Image source={require('./img/favicon.png')}></Image>
        <Image source={require('./img/favicon.png')}></Image>
        <Image source={require('./img/favicon.png')}></Image>
        <Text style={{fontSize: 96}}>If you like</Text>
        <Image source={require('./img/favicon.png')}></Image>
        <Image source={require('./img/favicon.png')}></Image>
        <Image source={require('./img/favicon.png')}></Image>
        <Image source={require('./img/favicon.png')}></Image>
        <Image source={require('./img/favicon.png')}></Image>
        <Text style={{fontSize: 96}}>Scrolling down</Text>
        <Image source={require('./img/favicon.png')}></Image>
        <Image source={require('./img/favicon.png')}></Image>
        <Image source={require('./img/favicon.png')}></Image>
        <Image source={require('./img/favicon.png')}></Image>
        <Image source={require('./img/favicon.png')}></Image>
        <Text style={{fontSize: 96}}>What's the best</Text>
        <Image source={require('./img/favicon.png')}></Image>
        <Image source={require('./img/favicon.png')}></Image>
        <Image source={require('./img/favicon.png')}></Image>
        <Image source={require('./img/favicon.png')}></Image>
        <Image source={require('./img/favicon.png')}></Image>
        <Text style={{fontSize: 96}}>Framework around?</Text>
        <Image source={require('./img/favicon.png')}></Image>
        <Image source={require('./img/favicon.png')}></Image>
        <Image source={require('./img/favicon.png')}></Image>
        <Image source={require('./img/favicon.png')}></Image>
        <Image source={require('./img/favicon.png')}></Image>
        <Text style={{fontSize: 96}}>React Native</Text>
      </ScrollView>
    )
  }
}

class ListViewBasics extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => {r1 != r2}})
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    }
  }

  render() {
    return (
      <View style={{flex:1, paddingTop: 22}}>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text style={{paddingTop: 58, fontSize: 48}}>{rowData}</Text>}
      />
      </View>
    )
  }
}

class NavigatorBasic extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'My Initial Scene', index: 0 }}
        renderScene={(route, navigator) => 
          <MyScene
            title={route.title}
            onForward={ () => {
              const nextIndex = route.index + 1;
              navigator.push({
                title: `Scene ${nextIndex}`,
                index: nextIndex,
              });
            } }
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        }
      />
    )
  }
}

class ImageLoader extends Component {
  render() {
    return (
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <View style={{flex:1}}></View>
        <Image style={{
          flex: 1,
        }} source={require('./hoge.jpg')}></Image>
        <View style={{flex:1}}></View>
      </View>
    )
  }
}
class ReactNative_HelloWorld extends Component {
  render() {
    return <ImageLoader />
  }
}

AppRegistry.registerComponent('ReactNative_HelloWorld', () => ReactNative_HelloWorld);

