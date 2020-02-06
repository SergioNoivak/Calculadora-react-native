import React from 'react';
import {StyleSheet,Text,Dimensions,TouchableHighlight } from "react-native";


const styles = StyleSheet.create({
    button:{
        fontSize:40,
        height:Dimensions.get('window').width/4,
        width:Dimensions.get('window').width/4,
        padding:20,
        backgroundColor:'#f0f0f0',
        textAlign:'center',
        borderWidth:1,
        borderColor:'#888'
    },
    operationButton:{
        color:'#fff',
        backgroundColor:'#fa8231'

    }
    ,buttonDouble:{
        width:2*Dimensions.get('window').width/4,
    }   ,buttonTriple:{
        width:3*Dimensions.get('window').width/4,
    }   
})

export default props=>{
    const estilos =[styles.button]
    if(props.double)
        estilos.push(styles.buttonDouble)
    if(props.triple)
        estilos.push(styles.buttonTriple)
    if(props.operation)
        estilos.push(styles.operationButton)

    return(<TouchableHighlight onPress={()=>props.onClick(props.label)}>
        <Text style={estilos}>{props.label}</Text>
    </TouchableHighlight>)
}