import {createStackNavigator, createSwitchNavigator, createAppContainer, createStackContainer} from 'react-navigation';
import  ViewTestimonials from '../screens/Feedback/ViewTestimonials';
import Testimonials from '../screens/Feedback/Testimonials'
 
export const Testimonial = createStackNavigator({
  Testimonials: {
    screen: Testimonials,
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
  ViewTestimonials: {
    screen: ViewTestimonials,
    navigationOptions:  {
       header:null
      // title:'View Testimonials',
      // headerTitleStyle: {  
      //   fontFamily: 'Nunito-SemiBold',
      //   marginLeft:'25%',
      //   // marginRight:'auto',
      //   fontSize:18,
      // },  
      // headerStyle: {  
      //   height:50
      // },  
    }
  },
});



Testimonial.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  let routeName = navigation.state.routes[navigation.state.index].routeName
  if ( routeName == 'ViewTestimonials' ) {
    tabBarVisible = false
     Header=null
  }
  return {
    
    tabBarVisible,
  }
}



