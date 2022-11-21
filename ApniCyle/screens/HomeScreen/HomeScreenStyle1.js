import {
  StyleSheet,
 
} from 'react-native';
const styles=StyleSheet.create({
    container:{
            flex:1,
            //justifyContent: 'center',
           // alignSelf:'center',
           backgroundColor:"#FCF5D9",   
           
               
    },
    flex1:{
    flex:1,
     //justifyContent:'space-between',
     alignSelf:'center',
     marginVertical:0
    },
    flex2:{
      flex:1,
    //justifyContent:"center",
     alignItems:'center',
     
    },
    cycleimage:{
      width:400,
      height:200,
     // backgroundColor:"#ffffff",
      borderRadius:150,
      marginTop:"60%"
     // shadowColor: '#00000025',
      //shadowOffset: { width: 2, height:12 },
      //shadowOpacity: 0.9,
     // shadowRadius: 2,
   //   elevation: 5,
    },
    text:{
      fontSize:35,
      color:'#314866',
      fontFamily:'Roboto-Bold',
      paddingTop:40,
      
    },
    text1:{
      fontSize:48,
      color:'#D50A81',
      fontFamily:'Roboto-Medium',
      
    }
    
    
    });
export  {styles};
