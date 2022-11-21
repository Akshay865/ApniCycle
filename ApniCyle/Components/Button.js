import React, { Component } from "react";
import {Text,TouchableOpacity, View} from 'react-native';
import {styles} from './ButtonStyle';
import LinearGradient from 'react-native-linear-gradient';

class Button extends Component {
    render(){
        return(
            
        <TouchableOpacity activeOpacity={.5} style={styles.container} onPress={this.onPress}>
        <LinearGradient  start={{x: 0.0, y: 0}} end={{x: 1, y: 0}}colors={['#D50A81', '#B61883',
          '#9F2385',
          '#9F2385', '#643F8A' ]} style={styles.flex1}>
       
       <Text style={styles.btnTxt}> {this.props.text} </Text>
      
          </LinearGradient>
           
          </TouchableOpacity>           
            
        
            
            
            
        )
    }
}
export default Button;