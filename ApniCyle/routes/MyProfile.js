import {createStackNavigator, createSwitchNavigator, createAppContainer, createStackContainer} from 'react-navigation';
import ChangeNumber from '../screens/MyProfile/ChangeNumber';
import VerifyOtp from '../screens/MyProfile/VerifyOtp';
import HomeScreen from '../screens/MyProfile/MyProfile'
export const MyProfile = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions:  {
      // headerLeft: null,
   //   title:'My Profile',
      headerTitleStyle: {  
        fontFamily: 'Nunito-SemiBold',
        marginLeft:'auto',
        marginRight:'auto',
        fontSize:18,
      },  
      headerStyle: {  
        height:50
      },  
    }
  },
  ChangeNumber: {
    screen: ChangeNumber,
    navigationOptions:  {
      title:'Change your mobile number', 
    }
  },
  VerifyOtp:{
    screen:VerifyOtp,
    navigationOptions:  {
      title:'Verification',
      headerTitleStyle: {  
        fontFamily: 'Nunito-SemiBold',
        marginLeft:'auto',
        marginRight:'auto',
        fontSize:18, 
      },  
      headerStyle: {  
        height:50
      },  
    }
  },
  // Language:{
  //   screen:Language
  // }
});
  //export const Switch=createAppContainer(createStackNavigator({App: App}));
 
//   const Logout=createStackNavigator({App: {screen:App,navigationOptions:{header:null}}});
//   export default createAppContainer(createSwitchNavigator(
//     {
//       // AuthLoading:AuthLoadingScreen,
//       MyProfile: MyProfile,
//       Logout: Logout,
    
//     },
//     {
//       initialRouteName: 'MyProfile',
//     }
//   ));
MyProfile.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};  
//const App = createAppContainer(RootStack);
//export default App;
  
  
  


