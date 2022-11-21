

import React,{Component} from 'react';
import {styles} from './HomeScreenStyle1.js';
import {
  
  Text,
  View,
  Image
} from 'react-native';




class Home extends Component{
  constructor(props){
    super(props);
  //  this.state={screen:true}
  }
  
  render(){

      return(
        <View style={styles.container}>
          <View style={styles.flex1}>
          
          <Image source={require('../../images/cycle.png')} style={styles.cycleimage} />
          </View>
          <View style={styles.flex2}>
          <Text style={styles.text}>APNI</Text>
          <Text style={styles.text1}>CYCLE</Text>
          </View>
        </View>
      )
  }
}

export default Home;
