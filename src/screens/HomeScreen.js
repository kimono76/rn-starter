import React from 'react';
import { Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
return <img 
          alt="logo" 
          src={require('./monkey.svg')} 
          style={{ height: "70px", paddingRight: "10px" }} 
        /> 

//  return <Text style={styles.text}>Hola wendy: esto es una aplicacion de prueba para QIMONO</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
