import React from 'react';
import { Text, StyleSheet } from 'react-native';

const HomeScreen = () => {

var imageName = require('./monkey.svg')

//return <div>
//	<img 
//          alt="logo"
//          src={imageName} 
//          style={{ height: "70px", paddingRight: "10px" }} 
//        />
//	</div>

  return <Text style={styles.text}>Hola wendy: esto es una aplicacion de prueba para QIMONO</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
