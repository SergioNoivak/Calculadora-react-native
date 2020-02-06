import React from 'react'
import {View,StyleSheet,Text  } from "react-native";


let style = StyleSheet.create({
    display:{
        flex:1,
        padding:20,
        justifyContent:'center',
        backgroundColor:'rgba(0,0,0,0.6)',
        alignItems:'flex-end'
    },
    displayValue:{
        fontSize:60,
        color:'#fff'
    }
})

export default props =>
<View style={style.display}>
    <Text numberOfLines={1} style={style.displayValue}>{props.value}</Text>
</View>