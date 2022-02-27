import React from 'react'
import { Text , View} from 'react-native'

const Excercise17Screen = () => {
    
    const myName = 'Qimono'

    return(
        <View>
            <Text>Getting Started with React Native</Text>
            <Text>my name is {myName}</Text>
        </View>
    )

}

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