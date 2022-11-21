import React, {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex:1,
    

    
  },
  flex1:{
   // flex:1,
         //justifyContent:'space-between',
         height:"20%",
        // width:,
         alignItems:'center',
         marginVertical:0,
         justifyContent:"center",
          borderRadius:15,
        backgroundColor:"#D50A81",
      
         //elevation:10
        },
        flex2:{
            flex:1,
             //justifyContent:'space-between',
             alignItems:'center',
             marginVertical:"25%"

  },
  userBtn:{
    
    backgroundColor:"#D50A81",
    padding:15,
    borderRadius:4,
    shadowColor: 'rgba(72, 72, 72, 0.3)',
    shadowOffset: { width: 2, height:12 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 3,
  },
  btnTxt:{
    fontSize:16,
    textAlign:"center",
    fontWeight:"bold",
    fontStyle:"normal",
    color:'#FFFFFF',
    lineHeight:22,
    fontFamily:"Nunito-Bold",
    textTransform:'uppercase',
  },
});
export {styles}  