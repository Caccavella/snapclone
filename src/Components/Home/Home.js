import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../Header/Header';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Header text={"All Messages"} />
                <Text style={styles.welcome}>
                    Welcome to Snaptone
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text>d
                    Double tap R on your keyboard to reload, {'/n'}
                    Shake or press menu button for dev menu.
                </Text>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
      
  },
  instructions: {

  }

});