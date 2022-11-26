import {
    StyleSheet,
   
  } from 'react-native';
  const styles=StyleSheet.create({
      container:{
              flex:1,
           // justifyContent: 'center',
            //alignSelf:'center',
            borderRadius:30,
            backgroundColor:"#EBF0F3",   
            
           //  backgroundColor:"#FCF5D9"
                 
      },
      content:{
        flex:1,
        marginTop:27,
        alignItems:'center',
        justifyContent: 'center',
      },
      flex1:{
       
       // flex:1,
         //justifyContent:'space-between',
         height:"40%",
        // width:,
         alignItems:'center',
         marginVertical:0,
          // borderTopLeftRadius:30,
          // borderTopRightRadius:30,
         borderBottomLeftRadius:50,
         borderBottomRightRadius:50,
        backgroundColor:"#D50A81",
        transform: [
          {scaleX: 1}
          ]
         //elevation:10
        },
        flex2:{
            flex:1,
             //justifyContent:'space-between',
             alignItems:'center',
             marginVertical:"25%"
            },
       logo:{
      //   width:40,
        // height:50,
         alignItems:"center" ,
         justifyContent:"center",
         flexDirection:'column',
         
       // backgroundColor:"#E8E4E2",
     //   borderRadius:170,
        marginTop:"5%",
        marginLeft:"80%"
       // shadowColor: '#00000025',
        //shadowOffset: { width: 2, height:12 },
        //shadowOpacity: 0.9,
       // shadowRadius: 2,
     //   elevation: 5,
      },
      text:{
        fontSize:24,
        color:'#314866',
        fontFamily:'Roboto-Bold',
        paddingTop:40,
        
      },
   
     
     img:{
    //  flex:1,
      width:30,
      height:33,
 
    //  backgroundColor:'black'
     },
     cycleCard:{
      
      width:"84%",
      height:160,
      borderRadius:5,
      flexDirection:'row',
      backgroundColor:"#EFECE8",
      
      marginTop:25,
      borderRadius:10,
     // alignItems:"center"
     },

     cycle:{
    height:120,
    width:120,
    marginLeft:30   
     }
      });
  export  {styles};
  