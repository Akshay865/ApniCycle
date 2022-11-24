import React, { Component } from "react";
//import Language from '../screens/HomeScreen/Language'

//import OtpLogin from '../screens/Login/OtpLogin';
//import EnterName from '../screens/Login/EnterName.js';
//import TabBar from '../screens/TabBar/TabBar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import {createStackNavigator, createSwitchNavigator, createAppContainer, } from 'react-navigation-stack';
//import {getToken,setToken} from '../config/SesssionManager';

import Home3 from "../screens/HomeScreen/HomeScreen3.js";
import Login from "../screens/LoginScreen/Login.js";
import Tab1 from "../screens/TabBar/TabBar.js";
import Loader from "../Components/Loader.js";
import {setToken,getToken,clearToken} from "../config/SesssionManager";
class Temp extends Component{

    constructor(props){
    super(props);
    this.state={val:'0',loading:true}
  }

    async componentDidMount (){
     
      const val=  await getToken('login');
      this.setState({loading:false,val:val})
    }
    
      render(){
        
        if(this.state.loading==true)
        return (
          <Loader/>
        )
        
        return(

      <NavigationContainer >
      {this.state.val!='1' ?
       
      <Stack.Navigator initialRouteName="Home3" screenOptions={{
      headerShown: false
    }} >
      
      <Stack.Group>
        <Stack.Screen  name="Home3" component={Home3}  />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Group>
        <Stack.Group>
        <Stack.Screen name="Tab1" component={Tab1}
          options={{ headerShown: false }}/>
        </Stack.Group>
 
      </Stack.Navigator>
      
      :
     
      <Stack.Navigator initialRouteName="Tab1" screenOptions={{
        headerShown: false
      }} >
        
        
          <Stack.Group>
          <Stack.Screen name="Tab1" component={Tab1}
            options={{ headerShown: false }}/>
          </Stack.Group>
   
        </Stack.Navigator>

      }
     
    </NavigationContainer>
        )
    }
}

const Stack = createNativeStackNavigator();
// const RootStack = createStackNavigator({
//     Home3: {
//       screen: Home3,
//       navigationOptions:  {
//         headerLeft: null,
//         header:null,
//       }
//     },
//     Login: {
//       screen: Login,
//       navigationOptions:  {
//         headerLeft: null,
//         header:null,
//       }
//     },
    

//   });
  //const Check = createStackNavigator({Home:{screen:Home,navigationOptions:{header:null}}})
  //const AuthStack=createStackNavigator({TabBar: {screen:TabBar,navigationOptions:{header:null}}});
  // const Temp= createAppContainer(createSwitchNavigator(
  //   {
  //     // AuthLoading:AuthLoadingScreen,
  //     Login: RootStack,
  //    // TabBar: AuthStack,
  //    // Check:Check
    
  //   },
  //   {
  //     initialRouteName: 'Login',
  //   }
  // ));
  
export default Temp