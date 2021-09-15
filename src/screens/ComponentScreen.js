import React from 'react'
import {Text, StyleSheet} from 'react-native'

const ComponentScreen =()=>{
    return <Text style={styles.textStyle}>This is the component Screen</Text>
}
const styles = StyleSheet.create({
    textStyle: {
        fontSize:15
    }
})

export default ComponentScreen
