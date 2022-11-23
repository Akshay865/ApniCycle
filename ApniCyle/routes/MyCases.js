import  form from '../screens/Cases/form';
import {createStackNavigator, withNavigationFocus,createSwitchNavigator, NavigationEvents  ,createAppContainer, createStackContainer} from 'react-navigation';
import  CaseDetails from '../screens/Cases/CaseDetails';
import  EditCase from '../screens/Cases/EditCase';
import  AssignDoctor from '../screens/Cases/AssignDoctor'
import MycasesDetails from '../screens/Cases/MyCases'
export const MyCases = createStackNavigator({
  
    MycasesDetails: {
      screen: MycasesDetails,
      navigationOptions:  {
     //   headerLeft: null,
      //  title:Lang.tabheader1,
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
    form: {
      screen: form,
      navigationOptions:  {
    //    title:'Add a case',
        backTitle: null,
        headerTitleStyle: {  
          fontFamily: 'Nunito-SemiBold',
          marginLeft:'25%',
          // marginRight:'auto',
          fontSize:18, 
        },  
        headerStyle: {  
          height:50
        },  
      }    
    },
     AssignDoctor: {
      screen: AssignDoctor,
      navigationOptions:  {
        headerLeft:null,
     //   title:'My Cases',
        backTitle: null,
        headerTitleStyle: {  
          fontFamily: 'Nunito-SemiBold',
          marginLeft:'35%',
          // marginRight:'auto',
          fontSize:18, 
        },  
        headerStyle: {  
          height:50
        },  
      },
  
    },
    // Cases: {
    //   screen: Cases,
    //   navigationOptions:  {
    //     headerLeft:null,
    //  //   title:'My Cases',
    //     backTitle: null,
    //     headerTitleStyle: {  
    //       fontFamily: 'Nunito-SemiBold',
    //       marginLeft:'35%',
    //       // marginRight:'auto',
    //       fontSize:18, 
    //     },  
    //     headerStyle: {  
    //       height:50
    //     },  
    //   },
  
    // },
    CaseDetails: {
      screen: CaseDetails,
      navigationOptions:  {
      //  title:'Case Details',
        backTitle: null,
        headerTitleStyle: {  
          fontFamily: 'Nunito-SemiBold',
          marginLeft:'25%',
          // marginRight:'auto',
          fontSize:18, 
        },  
        headerStyle: {  
          height:50
        },  
      }
    },
    EditCase: {
      screen: EditCase,
      navigationOptions:  {
       // title:'Edit Details',
        backTitle: null,
        headerTitleStyle: {  
          fontFamily: 'Nunito-SemiBold',
          marginLeft:'25%',
          // marginRight:'auto',
          fontSize:18, 
        },  
        headerStyle: {  
          height:50
        },  
      }
    },
  });
    
  MyCases.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    let routeName = navigation.state.routes[navigation.state.index].routeName
    if ( routeName == 'form' || routeName == 'CaseDetails'  || routeName == 'EditCase'|| routeName=='AssignDoctor' ) {
      tabBarVisible = false
      Header=null
    }
    return {
      
      tabBarVisible,
    }
  }
  