import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  ActivityIndicator
} from 'react-native';

class Loader extends Component {
    render(){
      return ( 
        <View style={styles.container}>
            <ActivityIndicator
                size={100}
                color='#AC1D84'
            />
            <Text>Loading</Text>
        </View>
      );
    
      }
  }

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
});
 export default Loader;