import React ,{Component}from 'react';  
import {StyleSheet, Text,Image, View,Button} from 'react-native';  
import { createAppContainer, Header} from 'react-navigation';  
// import Icon from 'react-native-vector-icons/Ionicons';  
import { createBottomTabNavigator,BottomTabBar } from 'react-navigation-tabs';
// import HomeScreen from './HomeScreen.js';
import Test from "../Cases/Test";
import  {MyCases} from '../../routes/MyCases';
import {MyProfile} from '../../routes/MyProfile';
import  {Notifications} from '../../routes/Notifications';
import more from '../More/more';
import {styles} from './tabBarStyle';
import {Lang} from '../LanguageText'
import {Testimonial} from '../../routes/Testimonials';
const TabBarComponent = props => <BottomTabBar {...props} />;

class More extends React.Component {
    static navigationOptions = ({navigations}) =>({
        title:Lang.more
      });  
    render() {     
        return (  
            <View style={styles.container}>  
                {/* <Text> more</Text> */}
            </View>  
        );  
    }  
};  


const TabNavigator = createBottomTabNavigator(  
    {  
      
        MyCases:{ 
            screen: MyCases,  
            navigationOptions:{
                tabBarIcon: ({focused}) =>  (
                    focused ?
                    <Image source={require('../../assets/images/home_active.png')} style={styles.iconstyle}/>
                    :
                    <Image source={require('../../assets/images/home_inactive.png')} style={styles.iconstyle}/>
                  ),  
                tabBarLabel:({focused})=>(focused ?<Text style={styles.activelabelstyle}>{Lang.tab1}</Text>:<Text style={styles.inactivelabelstyle}>{Lang.tab1}</Text>),
            }  , 
        },  
        Notifications: { 
            screen: Notifications,  
            navigationOptions:{
                tabBarIcon: ({focused}) =>  (
                    focused ?
                    <Image source={require('../../assets/images/notification_active.png')} style={styles.iconstyle}/>
                    : <Image source={require('../../assets/images/notification_inactive.png')}  style={styles.iconstyle}/>
                ),  
                tabBarLabel:({focused})=>(focused ?<Text style={styles.activelabelstyle}>{Lang.tab2}</Text>:<Text style={styles.inactivelabelstyle}>{Lang.tab2}</Text>),
            }  
        },  
        Testimonial: { 
            screen: Testimonial,  
            navigationOptions:{
                tabBarIcon: ({focused}) =>  (
                    focused ?
                    <Image source={require('../../assets/images/testimonial_active.png')} style={styles.iconstyle}/>
                    : <Image source={require('../../assets/images/testimonial_inactive.png')}  style={styles.iconstyle}/>
                ),  
                tabBarLabel:({focused})=>(focused ?<Text style={styles.activelabelstyle}>{Lang.tab3}</Text>:<Text style={styles.inactivelabelstyle}>{Lang.tab3}</Text>),
            }  
        },  
        MyProfile:{  
            screen: MyProfile,  
            navigationOptions:{  
                tabBarIcon: ({focused}) =>  (
                    focused ?
                    <Image source={require('../../assets/images/user_active.png')} style={styles.iconstyle}/>
                    :   <Image source={require('../../assets/images/user_inactive.png')}  style={styles.iconstyle}/>
                ),  
                tabBarLabel:({focused})=>(focused ?<Text style={styles.activelabelstyle}>{Lang.tab4}</Text>:<Text style={styles.inactivelabelstyle}>{Lang.tab4}</Text>),
                // labeled:false
            }, 
        },    
        // More: {  
        //     screen: more,  
        //     navigationOptions:{  
        //         tabBarIcon: ({focused}) =>  (
        //             focused ?
        //             <Image source={require('./images/more_active.png')} style={styles.iconstyle}/>
        //               :<Image source={require('./images/more_inactive.png')} style={styles.iconstyle}/>
                    
        //         ),  
        //         tabBarLabel:({focused})=>(focused ?<Text style={styles.activelabelstyle}>{Lang.tab5}</Text>:<Text style={styles.inactivelabelstyle}>{Lang.tab5}</Text>),
        //         // labeled:false
        //     }, 
        // },    
    },  
    {  
        tabBarOptions: 
        {   
            activeTintColor: '#419ED3',
            labelStyle: {
                fontSize: 5,
                marginLeft:10,
                minWidth:'25%',
                textAlign:'center',
                marginBottom:10,
                Color:'#000000',
                paddingLeft:15
            },
            inactiveTintColor:'#000000',
            style:{
                paddingTop:0,
                height:64 ,

            },
            
        },

        // initialRouteName:'Notifications'
        
    },

    
);  

export default createAppContainer(TabNavigator);
