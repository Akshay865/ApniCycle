import React, {StyleSheet} from 'react-native';
import {cssvar} from '../cssvar';
const styles = StyleSheet.create({  
    container: {  
        flex:cssvar.flexsize,
        paddingLeft:cssvar.screenpaddingleft,
        paddingRight:cssvar.screenpaddingright,  
    },  
    lift:{
        // paddingBottom:10
    },
    iconstyle:{
        width:22,
        height:22,
        paddingBottom:20
    },
    activelabelstyle:
    {
        color:'#419ED3',
        // paddingLeft: 25,
        // paddingRight: 20,
        paddingBottom:5,
       
        textAlign:"center",
        fontSize:10
    },
    inactivelabelstyle:
    {
        textAlign:"center",
        paddingBottom:5,
        color:'#1D1D1D',
        //padding: '10%',
        fontSize:10
    }


})

export {styles};