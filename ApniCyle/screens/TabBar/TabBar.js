import * as React from 'react';
import { Button, Text, View,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {setToken,getToken,clearToken} from "../../config/SesssionManager";
import Cycle  from '../TabHome/CylceModel.js';
import Scan from '../ScanQr/ScanQr.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './tabBarStyle.js';
import Wallet  from '../Wallet/Wallet.js';
import Balance  from '../Wallet/ViewBalance.js';
import Release  from '../Release/Release.js';
import Add  from '../Wallet/AddBalance.js';
function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center',
    backgroundColor:'#EBF0F3',
    alignItems: 'center' }}>
      <Text  style={{fontFamily:'Roboto-Medium',fontSize:15}} >You don't have Enough Balance!</Text>
    </View>
  );
}





const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}
    initialRouteName='Cycle'
    >


      <HomeStack.Screen name="Cycle" component={Cycle} />
      {/* <HomeStack.Screen name="Details" component={DetailsScreen} /> */}
    </HomeStack.Navigator>
  );
}

function ReleaseStackScreen() {
    return (
      <HomeStack.Navigator initialRouteName="Release1" screenOptions={{
        headerShown: false
      }} >
        
        <HomeStack.Group>
          <HomeStack.Screen  name="Release1" component={Release}  />
          <HomeStack.Screen name="Details" component={DetailsScreen} />
        </HomeStack.Group>
   
        </HomeStack.Navigator>
    );
  }


  function WalletStackScreen() {
    return (
      // <HomeStack.Navigator screenOptions={{headerShown: false,
      // }}
      // initialRouteName='Wallet3'
      // >
      //   <HomeStack.Screen name="Wallet3" component={Wallet} />
      //   <HomeStack.Screen name="Details" component={DetailsScreen} />
      // </HomeStack.Navigator>
      <HomeStack.Navigator initialRouteName="Wallet3" screenOptions={{
        headerShown: false
      }} >
        
        <HomeStack.Group>
          <HomeStack.Screen  name="Wallet3" component={Wallet}  />
          <HomeStack.Screen name="Balance" component={Balance} />
          <HomeStack.Screen name="Add" component={Add} />
        </HomeStack.Group>
   
        </HomeStack.Navigator>
       


    );
  }
  

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Scan" component={Scan}
      />
      {/* <SettingsStack.Screen name="Details" component={DetailsScreen} /> */}
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function Tab1() {
    
  return (
    
      <Tab.Navigator 

      
    //   screenOptions={
        
    //     { headerShown: false }
        
        
    //     }

    screenOptions={
        
        
        ({ route }) => ({
            tabBarBackground:() =>(

                <LinearGradient 
                start={{x: 0.0, y: 0}} end={{x: 1, y: 0}}
                colors={['#D50A81', '#B61883','#C01483',
                '#9A2686',
                '#9F2385',
                '#9F2385', '#643F8A']} style={{height:70,borderTopLeftRadius:15,borderTopRightRadius:15}}/>
              ),
            // tabBarBackground: () => (
            //     <View style={{ flex: 1 }}>
            //       <LinearGradient
            //         start={{ x: 0, y: 0 }}
            //         end={{ x: 1, y: 0 }}
            //         colors={['#D50A81', '#B61883',
            //         '#9F2385',
            //         '#9F2385', '#643F8A']}
            //         style={{ height: 2 }}
            //       />
            //     </View>
            //   ),
        
        tabBarIcon: ({ focused, color, size }) => {

        if(route.name=='Home'){
            return <Image source={require('../../images/Home.png')} style={styles.iconstyle}/>
          //  return <Ionicons name={iconName} size={size} color={color} />;
        }
        else if(route.name=='Scan'){
            return <Image source={require('../../images/cycleBook.png')} style={styles.iconstyle}/>
        }

        else if(route.name=='Release'){
            return <Image source={require('../../images/Release.png')} style={styles.iconstyle2}/>
        }

        else if(route.name=='Wallet'){
            return <Image source={require('../../images/Wallet.png')} style={styles.iconstyle2}/>
        }
         
        //   let iconName;

        //   if (route.name === 'Cycle') {
        //     iconName = focused
        //       ? 'ios-information-circle'
        //       : 'ios-information-circle-outline';
        //   } else if (route.name === 'Settings') {
        //     iconName = focused ? 'ios-list' : 'ios-list-outline';
        //   }

        //   // You can return any component that you like here!
        //   return <Ionicons name={iconName} size={size} color={color} />;
        },
        // tabBarStyle: {
        //  backgroundColor: '#D50A81',
        //     borderRadius:5
        //   },

   
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        headerShown:false,
        
     
    })

    
    
    }
        
        >
        <Tab.Screen name="Home" component={Cycle} />
       
        <Tab.Screen name="Scan" component={Scan} />
        <Tab.Screen name="Release" component={ReleaseStackScreen} />
        <Tab.Screen name="Wallet" component={WalletStackScreen} />
      </Tab.Navigator>
  
  );
}