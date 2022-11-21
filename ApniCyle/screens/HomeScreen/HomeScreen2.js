

import React,{Component} from 'react';
import {styles} from './HomeScreenStyle2.js';
import {
  
  Text,
  View,
  Image
} from 'react-native';




class Home2 extends Component{
  constructor(props){
    super(props);
  //  this.state={screen:true}
  }
  
  render(){

      return(
        <View style={styles.container}>
          <View style={styles.flex1}>
          
          <Image source={require('../../images/bits.png')} style={styles.logo} />
          </View>  

          <View style={styles.flex2}>
          <Text style={styles.text}>Students Union App</Text>
          <Text style={styles.text1}>All your College needs in one App</Text>
          </View>
        </View>
      )
  }
}

export default Home2;
