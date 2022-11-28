
import React,{Component} from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import Home from './screens/HomeScreen/HomeScreen1.js';
import Home3 from './screens/HomeScreen/HomeScreen3.js';
import Temp from './routes/index.js'
import {setToken,getToken} from './config/SesssionManager'



class App extends Component{
  constructor(props){
    super(props);
    this.state={screen:true}
  }

  async componentDidMount(){
        this.timeoutHandle1 = setTimeout(()=>{
            this.setState({screen:false})
       }, 3000);
     //  setToken();
      // getToken();
     
     
   }
  render(){
   
  if(this.state.screen===true)
      return(
        <View style={{flex:1,flexDirection:'column'}}>
        <Home/>
        </View>
      )
      else{
        return(
          <View style={{flex:1,flexDirection:'column'}}>
            <Temp/>
          {/* <Home2/> */}
          </View>
        )
      }
  }
}




export default App;

