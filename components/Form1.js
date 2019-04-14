import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity} from 'react-native';
import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {

  apiKey: "AIzaSyB_fuFtnBui7hAC54P7YNo3sb85DsSPo0Q",
  authDomain: "reacnativedatabase-ca71c.firebaseapp.com",
  databaseURL: "https://reacnativedatabase-ca71c.firebaseio.com",
  projectId: "reacnativedatabase-ca71c",
  storageBucket: "reacnativedatabase-ca71c.appspot.com",
};


firebase.initializeApp(firebaseConfig);

import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base'

export default class Form1 extends Component {
  constructor(props) {
    super(props)

    this.state = ({
      email: '',
      password: ''
    })
  }

  componentDidMount() {

    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        console.log(user)
      }
    })
  }

  signUpUser = (email, password) => {

    try {

      if (this.state.password.length < 6) {
        alert("Ingresa minimo 6 caracteres")
        return;
      }

      firebase.auth().createUserWithEmailAndPassword(email, password)
    }
    catch (error) {
      console.log(error.toString())
    }
  }

  loginUser = (email, password) => {

    try {

      firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
        console.log(user)

      })
    }
    catch (error) {
      console.log(error.toString())
    }
  }
  render() {
    return (
        <View style={styles.container}>
        <TextInput style={styles.inputBox} 
        underlineColorAndroid='rgba(0,0,0,0)' 
        placeholder="Correo electrónico. . ." 
        placeholderTextColor='#ffffff' 
        keyboardType="email-address"
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={(email) => this.setState({ email })}
        />
        
        <TextInput style={styles.inputBox} 
        underlineColorAndroid='rgba(0,0,0,0)' 
        placeholder="Contraseña. . ." 
        placeholderTextColor='#ffffff'
        secureTextEntry={true}
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={(password) => this.setState({ password })}
        />
        <TouchableOpacity style={styles.button}
        onPress={() => this.loginUser(this.state.email, this.state.password)}
        >
            <Text style={styles.buttonText}>Acceder
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
        onPress={() => this.signUpUser(this.state.email, this.state.password)}
        >
        <Text style={styles.buttonText}>Registrarse
        
        </Text>
        </TouchableOpacity>
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
  inputBox : {
    width: 300,
    backgroundColor:'rgba(255,255,255,0.3)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize:16,
    color: '#ffffff',
    marginVertical: 10,
  },
  button:{
    width:300,
    backgroundColor: '#BA553F',
    borderRadius: 25,
    marginVertical:10,
    paddingVertical: 12,
  },
  buttonText:{
      fontSize:16,
      fontWeight:'500',
      color:'#ffffff',
      textAlign:'center',
  }
});