import React, {Component} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';


export default class Logon extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={{width:60, height:70}} source={require('../images/logo.png')} />
        <Text style={styles.logoText} > Bienvenido a Beareet !!! </Text>

        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center',
  },
  logoText : {
    marginVertical: 15,
    fontSize :18,
    color : 'rgba(255,255,255,0.7)'
  },
});