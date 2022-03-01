import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Excercise17Screen = () => {
    
    const myName = 'Albert'

    return(
        <View>
            <Text style={styles.firstText}>Getting Started with React Native</Text>
            <Text style={styles.secondText}>my name is {myName}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    firstText:{
        fontSize: 45,
    },
    secondText:{
        fontSize: 20,
    }

    
})

export default Excercise17Screen



/**
 * Excercise :cap 17
 * 
 * Show 2 text Elements
 * 
 * the first should say "Getting Started with React Native" and have a fonrton size of 45
 * 
 * The second should say "my name is <name>" and have a font size of 20
 * 
 * For the second text element, assingn your name to a variable, then print it out in the JSX element 
 **/ 