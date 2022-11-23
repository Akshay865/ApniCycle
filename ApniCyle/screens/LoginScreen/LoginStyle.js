import {
    StyleSheet,
   
  } from 'react-native';
  const styles=StyleSheet.create({
      container:{
              flex:1,
              //justifyContent: 'center',
             // alignSelf:'center',
             paddingLeft:20,
             paddingRight:20,
             paddingBottom:30,
             paddingTop:50,
             backgroundColor:"#EBF0F3",
             borderRadius:20   
             
                 
      },
      flex1:{
      flex:1,
       //justifyContent:'space-between',
       alignItems:'center',
       marginVertical:0,
       justifyContent:'center'
      },
      flex2:{
        flex:1,
      //justifyContent:"center",
       
      },
      input:{
        height:50,
        backgroundColor:"white",
        borderRadius:15,
        justifyContent:"center"
      },
      input2:{
        height:50,
        backgroundColor:"white",
        borderRadius:15,
        justifyContent:"center",
        marginTop:30
      },
      
      flex3:{
        flex:1,
      //justifyContent:"center",
      // alignItems:'center',
       
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
      , error: {
        // position: "absolute",
        // bottom:-15,
        marginLeft:10,
        marginTop:5,
        color: "red",
        fontSize: 12,
      
      },
      
      });
  export  {styles};
  