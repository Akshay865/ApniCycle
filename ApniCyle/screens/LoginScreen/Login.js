

import React,{Component} from 'react';
import {styles} from './LoginStyle.js';
import {
  
  Text,
  View,
  Image,TextInput,ScrollView,KeyboardAvoidingView
} from 'react-native';
import Button from "../../Components/Button.js";


class Login extends Component{
  constructor(props){
    super(props);
  //  this.state={screen:true}
  }
  
  render(){

      return(
        
        <View style={styles.container}>
          
          <View style={styles.flex1}>
          
          <Text style={{fontSize:40,fontFamily:'Roboto-Regular'}}>Hello Again!</Text>
          <Text style={{fontSize:20,fontFamily:'Roboto-Regular',marginTop:10}}>Welcome Back you've been missed</Text>
          </View>
          
          <View style={styles.flex2}>
          <View style={styles.input}> 
          <TextInput 
         
          style={{marginLeft:10,paddingVertical:0}} 
          placeholder="Enter Username"
          // onChangeText={TextInputNumber=>{TextInputNumber!='' ? this.setState({isFocused:true }): this.setState({isFocused:false})}}
          
          fontSize={18}
           />
          </View> 

          <View style={styles.input2}> 
          <TextInput 
         
          style={{marginLeft:10,paddingVertical:0}} 
          placeholder="Password"
          // onChangeText={TextInputNumber=>{TextInputNumber!='' ? this.setState({isFocused:true }): this.setState({isFocused:false})}}
         
          fontSize={18}
          />
          </View> 
          
          
          
          
          </View>
          
        

          <View style={styles.flex3}>
          
          <Button text={"Login"}/>
          </View>
          
        </View>
        
      )
  }
}

export default Login;
