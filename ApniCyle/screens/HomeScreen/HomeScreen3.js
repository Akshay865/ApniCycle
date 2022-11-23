

import React,{Component} from 'react';
import {styles} from './HomeScreenStyle3.js';
import {
  
  Text,
  View,
  Image,TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Login from '../LoginScreen/Login.js';


class Home3 extends Component{
  constructor(props){
    super(props);
    this.state={screen:true}
  }
  onPress=()=>{

    this.props.navigation.navigate('Login');
    if(this.state.screen===true)
    this.setState({
      screen:false
    });
    else{
        this.setState({
            screen:true
          }); 
    }
  }
  render(){

      return(
        <View style={styles.container}>
            
          
          <LinearGradient  start={{x: 0.0, y: 0}} end={{x: 1, y: 0}}colors={['#D50A81', '#B61883',
          '#9F2385',
          '#9F2385', '#643F8A' ]} style={styles.flex1}>
       
          <Image source={require('../../images/cyclelogo3.jpg')} style={styles.logo} />
      
          </LinearGradient>
         

          <View style={styles.flex2}>
          <Text style={styles.text}>Lets get started!</Text>
          <Text style={styles.text1}>Apni cycle collects location data to show you nearest Apni Cycle zones and journey routes. </Text>
          
           <View style={styles.login}>
           <TouchableOpacity style={styles.button1} onPress={this.onPress}>
            { this.state.screen===true?
           <Text style={{fontFamily:'Roboto-Bold',fontSize:20}}>Login</Text>
        :    <Text style={{fontFamily:'Roboto-Bold',fontSize:20}}>Login2 </Text>
        }
           </TouchableOpacity >
            <TouchableOpacity style={styles.button2}>
             <Text  style={{fontFamily:'Roboto-Bold',fontSize:20}} >Sign-up</Text>
            </TouchableOpacity>
          </View> 

          </View>
          
        </View>
      )
  }
}

export default Home3;
