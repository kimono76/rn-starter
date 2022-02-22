import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const HomeScreen = () => {
  const javaScriptVariable = ' Welcome home dear friend!';
  
  const jsxInAaVariable = <Text> by monkeys </Text>

var imageName = require('./monkey.svg')
  //style={styles.greetingText}

  return <View>
    <Text style={styles.greetingText}>{javaScriptVariable}</Text>
    <Text style={styles.text}>Qi MONO</Text>
    <Text> Developed for monkeys</Text>
    {jsxInAaVariable}
  </View>

}

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    color: 'navy',
    fontFamily: 'sans-serif-light',
    // fontWeight: 'bold', 
  },
  greetingText:{
    //align: 'right',
    //alignContent: 'center',
    color: 'navy',
    fontWeight: 'bold',
  }
});

export default HomeScreen;
