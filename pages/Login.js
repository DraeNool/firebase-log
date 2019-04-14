import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar} from 'react-native';
import Logon from '../components/Logon';
import Form1 from '../components/Form1';
export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
         <Logon/>
         <Form1/>
         <View style={styles.signupTextCont}>
            <Text style={styles.signupText} >Aun no tienes cuenta?</Text>
            <Text style={styles.signupButton} > Registrate </Text>
         </View>
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
  signupTextCont :{
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent : 'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText :{
    color:'rgba(255,255,255,0.6)',
    fontSize:16,
  },
  signupButton:{
    color:'#ffffff',
    fontSize: 16,
    fontWeight: '500',
  }
});
