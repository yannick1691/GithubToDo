import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../components/header';
import Respos from '../components/respos';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header header="HOME" background="#444eee" />
        <Respos />
      </View>
    );
  }
}
