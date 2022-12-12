import {
    StyleSheet,
   
  } from 'react-native';
  const styles=StyleSheet.create({
      container:{
              flex:1,
           // justifyContent: 'center',
            //alignSelf:'center',
            borderRadius:30,
            padding:30,
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
       
        flex:1,
        },
        flex2:{
           
             //justifyContent:'space-between',
             alignItems:'center',
             height:"50%",
             backgroundColor:'white',
             justifyContent:'center',
             borderRadius:10
             //marginVertical:"25%"
            },
            box1:{
                flex:1,
                justifyContent:'center',
                alignContent:'center'
            },
            box2:{
                flex:1,
             //   justifyContent:'center',
                alignContent:'center'
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
        marginTop:110,
       // marginLeft:30,
        fontSize:22,
        fontFamily:'Roboto-Bold',
       
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
     addtowallet:{
      //flex:1,
      flexDirection:'row',
    //  alignContent:'center',
      //justifyContent:'center',
      marginTop:10,
      alignItems:'center',
      backgroundColor:'#F9F7F7',
      height:40,
      width:260,
      borderRadius:15,
      borderWidth:.8,
        borderColor:'black',
     },
     button2:{
    //  flex:1,
      width:"50%",
      alignItems:'center',
      justifyContent:'center',
      borderRadius:20,
    //  backgroundColor:'black'
     },
     img:{

        height:120,
        width:120
     },
     add:{
        height:20,
        width:20,
        marginLeft:10
     }
      
      });
  export  {styles};
  