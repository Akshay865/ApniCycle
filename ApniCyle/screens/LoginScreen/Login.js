

import React,{Component} from 'react';
import {styles} from './LoginStyle.js';
import {
  
  Text,
  View,
  Image,TextInput,ScrollView,KeyboardAvoidingView
} from 'react-native';
import Button from "../../Components/Button.js";
import Loader from "../../Components/Loader.js";
import Tab1 from '../TabBar/TabBar.js';
import {setToken,getToken,clearToken} from '../../config/SesssionManager';


class Login extends Component{
  constructor(props){
    super(props);
    this.state={
      screen :false,
      username:'',
      password:'',
      isLoading:false,
      focus:false,
    }
  //  this.state={screen:true}
  }
  

  login= async()=>{
    this.setState({isLoading:true})
     console.log("aaaaaaaaaaaaa")
    await fetch('http://172.17.49.230:8080/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    }).then( async(response)=>{
      console.log('qqqqqqqqqqqq',response);
      if(response.status===200)
      {
      await setToken('login','1');
      const t=await getToken('login');
      console.log("dddddddddddddddd",t)
      this.setState({screen:true});
      this.props.navigation.navigate('Tab1');
      }
      else
      this.setState({focus:true});
    }
      
    )
    

     this.setState({isLoading:false})
    // this.setState({screen:false});
    // try {
    //   const response = await fetch('http://172.17.49.230:8080/login');
    //   const json = await response.json();
    //   console.log(json);
    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   this.setState({ screen: false });
    // }

  }

  // const data= fetch('192.168.43.126:8080/login', {
  //   method: 'POST',
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     firstParam: 'test',
  //     secondParam: 'test'
  //   })
  // })
  render(){
     console.log("username is", this.state.username);
     console.log("password is", this.state.password)

     if(this.state.isLoading===false)
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
          onChangeText={TextInputNumber=>{ this.setState({
            username:TextInputNumber,
            focus:true
          })}}
          
          fontSize={18}
           />
          </View> 

          <View style={styles.input2}> 
          <TextInput 
         
          style={{
          marginLeft:10,paddingVertical:0}} 
          
          placeholder="Password"
          onChangeText={TextInputNumber=>{ this.setState({
            password:TextInputNumber,
            focus:true
          })}}
          //  onChangeText={TextInputNumber=>{
          //   TextInputNumber!='' ?
          //    this.setState({isFocused:true }): 
          //    this.setState({isFocused:false})}
          //   }
         
          fontSize={18}
          />
           
          
          </View> 
            { 

           // this.state.password==="test" && this.state.username==="test" ?
           this.state.screen===true?
            <Text style={styles.error}>Details Matched </Text>:
            this.state.focus===true?
            <Text style={styles.error}>Please Enter Right Details</Text>
            :  <Text style={styles.error}></Text>
          
          }
          
          
        

          </View>
         
          <View style={styles.flex3}>
        


          <Button text={"Login"} onPress={this.login}/>
          </View>
          
        </View>
        
      )
      else{
        return (
          <Loader />
        )
      }
  }
}

export default Login;
