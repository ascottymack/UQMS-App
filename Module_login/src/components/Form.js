import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const emailIcon = () => {
  return (
    <Icon name="email" size={20} />
  )
}

export default class Logo extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder="EMAIL"
          placeholderTextColor="#ffffff"
          selectionColor="#fff"
          keyboardType="email-address"
          onSubmitEditing={() => this.password.focus()}
        />
        <Icon name="email" color='#fff' size={20} style={{
          position: "absolute",
          left: 0,
          top: 38,
          padding: 10,
        }} />
        <Text style={{
          position: "absolute",
          color: "#fff",
          left: 25,
          top: 38,
          padding: 10,
          fontWeight: "bold",
          fontSize: 13
        }}>|</Text>
        <TextInput style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder="PASSWORD"
          secureTextEntry={true}
          placeholderTextColor="#ffffff"
          ref={(input) => this.password = input}
        />
        <Icon name="lock" color='#fff' size={20} style={{
          position: "absolute",
          left: 0,
          top: 97,
          padding: 10,
        }} />
        <Text style={{
          position: "absolute",
          color: "#fff",
          left: 25,
          top: 97,
          padding: 10,
          fontWeight: "bold",
          fontSize: 13
        }}>|</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{this.props.type}</Text>
        </TouchableOpacity>
      </View >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  inputBox: {
    height: 40,
    width: 280,
    backgroundColor: 'rgba(255, 255,255,0.2)',
    borderRadius: 0,
    paddingLeft: 42,
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 10,
  },

  button: {
    width: 280,
    backgroundColor: '#ffffff',
    borderRadius: 0,
    marginVertical: 10,
    paddingVertical: 13
  },

  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 1)',
    textAlign: 'center'
  }

});