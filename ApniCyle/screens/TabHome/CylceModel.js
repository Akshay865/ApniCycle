

import React,{Component} from 'react';
import {
  
  Text,
  View,
  Image,TouchableOpacity, ScrollView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './CycleModelStyle.js';
import {setToken,getToken,clearToken} from '../../config/SesssionManager.js';

class Cycle extends Component{
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
          <TouchableOpacity activeOpacity={.5} style={styles.logo} onPress={async()=>
            {
            await clearToken();
            console.log("hello");
         
            }
          }>      
           <Image source={require('../../images/logout.png')} style={styles.img} />
           <Text style={{fontFamily:'Roboto-Bold',fontSize:15}}> Logout</Text>
          </TouchableOpacity>
          <ScrollView>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <View style={styles.cycleCard}>
            <Image source={require('../../images/cycleModel.png')} style={styles.cycle} />
            
            <Text style={{fontFamily:'Roboto-Bold',
             marginTop:"15%",marginLeft:'7%',
            fontSize:20}}>Bike Cyle 2 </Text>
            
          </View>
          </View>
          
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <View style={styles.cycleCard}>
            <Image source={require('../../images/cycleModel.png')} style={styles.cycle} />
            
            <Text style={{fontFamily:'Roboto-Bold',
             marginTop:"15%",marginLeft:'7%',
            fontSize:20}}>Bike Cyle 2 </Text>
            
          </View>
          </View>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <View style={styles.cycleCard}>
            <Image source={require('../../images/cycleModel.png')} style={styles.cycle} />
            
            <Text style={{fontFamily:'Roboto-Bold',
             marginTop:"15%",marginLeft:'7%',
            fontSize:20}}>Bike Cyle 2 </Text>
            
          </View>
          </View>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <View style={styles.cycleCard}>
            <Image source={require('../../images/cycleModel.png')} style={styles.cycle} />
            
            <Text style={{fontFamily:'Roboto-Bold',
             marginTop:"15%",marginLeft:'7%',
            fontSize:20}}>Bike Cyle 2 </Text>
            
          </View>
          </View>
        </ScrollView>
        </View>
      )
  }
}

export default Cycle;
