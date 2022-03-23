import React from 'react'
import { Text, View, StyleSheet,FlatList } from 'react-native'

const ListScreen = () => {
    const arrayOfObjects=[
        {name:'Arduino Uno'},
        {name:'Raspberry Pi 3'},
        {name:'Arduino Pro Mini'},
        {name:'Raspberry Pi Pico'},
        {name:'Raspberry Pi 4'},
    ] ;
    
    const arrayOfObjectsWithKeys=[
        {name:'Arduino Uno'         ,key:'1'},
        {name:'Raspberry Pi 3'      ,key:'2'},
        {name:'Arduino Pro Mini'    ,key:'3'},
        {name:'Raspberry Pi Pico'   ,key:'4'},,
        {name:'Raspberry Pi 4'      ,key:'5'},
    ] ;

    return(
        <FlatList 
            keyExtractor={ item => item.name }
            data={ arrayOfObjects }
            renderItem ={ ({ item }) =>{
                return <Text>{item.name}</Text>
                }
            } 
        />
    )
}
export default ListScreen