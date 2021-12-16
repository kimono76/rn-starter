import React from 'react'
import {Text, StyleSheet,View} from 'react-native'

const ComponentScreen =()=>{
    return <View>
        <Text style={styles.textStyle}>This is the component Screen</Text>
        <Text>Another text</Text>
    </View>
}
const styles = StyleSheet.create({
    textStyle: {
        fontSize:15
    }
})

export default ComponentScreen
