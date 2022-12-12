import React,{Component} from 'react';
import {styles} from './WalletStyle.js';
import {
  
  Text,
  View,
  Image,TextInput,KeyboardAvoidingView,TouchableOpacity
} from 'react-native';
import Button from "../../Components/Button.js";
import Loader from "../../Components/Loader.js";
import Tab1 from '../TabBar/TabBar.js';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import {setToken,getToken,clearToken} from '../../config/SesssionManager';


class Wallet extends Component{
    constructor(props){
        super(props);
        this.state={screen:true}
      }
      onPress=()=>{
         console.log("hsvdhs");
         this.props.navigation.navigate('Balance');
    //    this.props.navigation.navigate('Login');
        // if(this.state.screen===true)
        // this.setState({
        //   screen:false
        // });
        // else{
        //     this.setState({
        //         screen:true
        //       }); 
        // }
      }
      onPress1=()=>{
        console.log("hsvdhs");
        this.props.navigation.navigate('Add');
  
     }
      render(){
    
          return(
            <View style={styles.container}>
                
              
              <View style={styles.flex1}>
            <Text style={styles.text1}>Create Wallet</Text>
               
              </View>
             
    
              <View style={styles.flex2}>
                <View style={styles.box1}>
                <Image source={require('../../images/rect.png')} style={styles.img} />

                </View>
                <View style={styles.box2}>
                 
                
                  <TouchableOpacity style={styles.addtowallet} 
                   onPress={ 
                    this.onPress1
                }
                  >
                  <Image source={require('../../images/add.png')} style={styles.add} />
                  <Text style={{fontFamily:'Roboto-Regular',
                  marginLeft:20
                }}>Add to Wallet</Text>
                   </TouchableOpacity>
                   <TouchableOpacity style={styles.addtowallet
                
                }
                onPress={ 
                    this.onPress
                }
                >
                    <Image source={require('../../images/add2.png')} style={styles.add} />
                  <Text style={{fontFamily:'Roboto-Regular',
                 marginLeft:20
                }}>View Balance</Text>
                   </TouchableOpacity>
         

                </View>
               
             
    
              </View>
              <View style={{flex:.7}}>
               
             
    
              </View>
            </View>
          )
      }
}

export default Wallet;
