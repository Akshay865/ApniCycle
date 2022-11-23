import {createStackNavigator, createSwitchNavigator, createAppContainer, createStackContainer} from 'react-navigation';
import Feedback from '../screens/Feedback/FeedbackForm';
import Notification from '../screens/Notification/Notifications'
import {View} from 'react-native'
export const  Notifications = createStackNavigator({
    Notification: {
      screen: Notification,
      navigationOptions:  {
        // headerLeft: null,
        //title:'Notifications',
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
    Feedback: {
      screen: Feedback,
      navigationOptions:  {
  //      headerRight:<View/>,
        //  title:'Case Details',
          backTitle: null,
          
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
  });
  Notifications.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
      tabBarVisible = false;
    }
  
    return {
      tabBarVisible,
    };
  };  