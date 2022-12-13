import React,{Component} from 'react';
import {styles} from './AddBalanceStyle.js';
import {
  
  Text,
  View,
  TextInput
 
} from 'react-native';
import Button from "../../Components/Button.js";
import Loader from "../../Components/Loader.js";
import Tab1 from '../TabBar/TabBar.js';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import {setToken,getToken,clearToken} from '../../config/SesssionManager';


class Add extends Component{
    constructor(props){
        super(props);
        this.state={screen:false,balance:0,isLoading:false}
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
     
     addBalance= async()=>{
        this.setState({isLoading:true,screen:false})
         console.log("aaaaaaaaaaaaa")
         const url='http://172.17.49.230:8080/user/1/balance/'+this.state.balance;
        await fetch(url, {
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
           alert("Balance Added");
         // this.props.navigation.navigate('Tab1');
          }
          else
          {
          alert("Some Problem occured");
        }
        }
        
        
        )
        this.setState({isLoading:false,screen:true})
        
    
      
    
      }
    



      render(){
        console.log("rrrrrrrr",this.state.balance)
        if(this.state.screen===true)
          return(
            <View style={styles.container}>
                <View style={{flex:1.3}}>
               <Text style={{fontFamily:'Roboto-Bold',fontSize:20,
                // marginLeft:20,
                 marginTop:100
                }}>Add Account Balance</Text>
                <View style={{height:1,backgroundColor:'#313536',width:'85%',marginTop:10}}></View>
                </View>
                <View style={{flex:5,marginTop:30,}}>
                    
                   {/* <Text style={{fontFamily:'Roboto-Regular',fontSize:17}}>Add Balance</Text> */}
                   <TextInput 
         
         style={{paddingVertical:0}} 
            placeholder="Add Balance"
            onChangeText={TextInputNumber=>
   
            { this.setState({
            balance:TextInputNumber,
             focus:true
            })
        }
        }
 
 fontSize={18}
  />

                   {/* <Text style={{fontFamily:'Roboto-Regular',fontSize:17}}></Text> */}
                   <View style={{height:1,backgroundColor:'#313536',width:'85%',marginTop:8}}></View>
                   <Text style={{fontFamily:'Roboto-Regular',fontSize:17,marginTop:15}}></Text>
                   <TextInput 
         
                 style={{paddingVertical:0}} 
                    placeholder="Add Remark"
        //  onChangeText={TextInputNumber=>
           
        //    { this.setState({
        //    username:TextInputNumber,
        //    focus:true
        //  })}}
         
         fontSize={18}
          />
           <View style={{height:1,backgroundColor:'#313536',width:'85%',marginTop:10}}></View>
                   {/* <Text style={{fontFamily:'Roboto-Regular',fontSize:17,marginTop:3}}>INR {this.state.data}</Text> */}
                   {/* <View style={{height:1,backgroundColor:'#313536',width:'85%',marginTop:10}}>
                   <Button text={"Add Balance"} onPress={this.login}/>

                   </View> */}


                   <View style={{flex:1.3
                   ,
                   marginTop:150,
                   paddingRight:30
                   }}>
                   
                  <Button text={"Add Balance"} onPress={this.addBalance}/>
                  </View>
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
