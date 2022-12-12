import React,{Component} from 'react';
import {styles} from './AddBalanceStyle.js';
import {
  
  Text,
  View,
 
} from 'react-native';
import Button from "../../Components/Button.js";
import Loader from "../../Components/Loader.js";
import Tab1 from '../TabBar/TabBar.js';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import {setToken,getToken,clearToken} from '../../config/SesssionManager';


class Add extends Component{
    constructor(props){
        super(props);
        this.state={screen:false,balance:0}
      }
      componentDidMount = async () =>{
       
        await this.getBalance();
        console.log("data is",this.state.balance);
      }
       getBalance = async () => {
        // try {
         const response = await fetch('http://172.17.49.230:8080/user/1/balance');
         const json=await response.json();
         console.log("wwwwwwww",json);
    //      const json = await response.json();
    //      console.log("ttttttt",json)
    //      setData(json.attendance);
    //    } catch (error) {
    //      console.error(error);
    //    } finally {
         await this.setState({data:json,screen:true});
    //    }
     }

      render(){
        if(this.state.screen===true)
          return(
            <View style={styles.container}>
                <View style={{flex:1.3}}>
               <Text style={{fontFamily:'Roboto-Bold',fontSize:20,
                // marginLeft:20,
                 marginTop:100
                }}>View Account Balance</Text>
                <View style={{height:1,backgroundColor:'#313536',width:'85%',marginTop:10}}></View>
                </View>
                <View style={{flex:5,marginTop:30,}}>
                    
                   <Text style={{fontFamily:'Roboto-Regular',fontSize:17}}>Credit Points</Text>
                   <Text style={{fontFamily:'Roboto-Regular',fontSize:17,marginTop:3}}>124</Text>
                   <View style={{height:1,backgroundColor:'#313536',width:'85%',marginTop:10}}></View>
                   <Text style={{fontFamily:'Roboto-Regular',fontSize:17,marginTop:15}}>Total Balance</Text>
                   <Text style={{fontFamily:'Roboto-Regular',fontSize:17,marginTop:3}}>INR {this.state.data}</Text>
                   <View style={{height:1,backgroundColor:'#313536',width:'85%',marginTop:10}}></View>
                </View>
                
            </View>
          )
          else{
            return(
                <Loader/>
            )
          }
      }
}

export default Add;
