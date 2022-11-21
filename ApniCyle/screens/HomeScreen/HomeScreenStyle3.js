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
        width:220,
        height:220,
        backgroundColor:"#E8E4E2",
        borderRadius:170,
        marginTop:"45%"
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
      text1:{
        fontSize:17,
        fontFamily:'Roboto-Regular',
        padding:17       
      },
      login:{
        flexGrow:1,
        flexDirection:'row',
        height:"14%",
        width:"90%",
        marginTop:"37%",
        borderRadius:20,
        borderWidth:2,
        borderColor:'white',
      //  alignItems:'flex-start',
        backgroundColor:'#EBF0F3'
      },
     button1:{
     // flex:1,
      width:"50%",
      alignItems:'center',
      borderRadius:20,
      backgroundColor:'white',
      justifyContent:'center'
     },
     button2:{
    //  flex:1,
      width:"50%",
      alignItems:'center',
      justifyContent:'center',
      borderRadius:20,
    //  backgroundColor:'black'
     }
      
      });
  export  {styles};
  