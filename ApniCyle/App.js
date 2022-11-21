
import React,{Component} from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import Home from './screens/HomeScreen/HomeScreen1.js';
import Home2 from './screens/HomeScreen/HomeScreen3.js';
import Login from './screens/LoginScreen/Login.js';


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
            <Login/>
          {/* <Home2/> */}
          </View>
        )
      }
  }
}




export default App;
import LinearGradient from 'react-native-linear-gradient';

// Within your render function

// Later on in your styles..
var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});