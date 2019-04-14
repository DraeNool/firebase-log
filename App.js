import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar, Image , TouchableOpacity,TextInput} from 'react-native';
import Login from './pages/Login';



export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar backgroundColor="#1c313a" barStyle="light-content" />
      <Login/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7684D',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
