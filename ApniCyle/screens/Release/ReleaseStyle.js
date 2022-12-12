import { Dimensions } from 'react-native';
const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;
const styles = {
    scrollViewStyle: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#EBF0F3'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '10%',
        paddingLeft: 15,
        paddingTop: 10,
        width: deviceWidth,
    },
    textTitle: {
        fontFamily:'Roboto-Bold',
        fontSize: 18,
        textAlign: 'center',
        padding: 16,
       // color: 'white'
    },
    textTitle1: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        padding: 16,
        color: 'white'
    },
    cardView: {
        width: deviceWidth - 32,
        height: deviceHeight - 380,
        alignSelf: 'center',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 10,
        padding: 25,
        marginLeft: 5,
        marginRight: 5,
        marginTop: '10%',
        backgroundColor: 'white'
    },
    scanCardView: {
        width: deviceWidth - 52,
        height: deviceHeight / 2.1,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding: 25,
        marginLeft: 25,
        marginRight: 25,
        marginTop: 10,
        backgroundColor: 'white'
    },

    buttonWrapper: {
        display: 'flex', 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center'
    },
    logo:{
        width:190,
        height:190,
        backgroundColor:"#E8E4E2",
        borderRadius:170,
        marginTop:"7%"
       // shadowColor: '#00000025',
        //shadowOffset: { width: 2, height:12 },
        //shadowOpacity: 0.9,
       // shadowRadius: 2,
     //   elevation: 5,
      },
    buttonScan: {
         
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#707070',
        paddingTop: 5,
        paddingRight: 25,
        paddingBottom: 5,
        paddingLeft: 25,
        marginTop: 20,
        backgroundColor:"white"
    },
    buttonScan1: {
         
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#707070',
        paddingTop: 5,
        paddingRight: 25,
        paddingBottom: 5,
        paddingLeft: 25,
       // marginTop: 20,
        width:"75%",
        marginTop:170,
        backgroundColor:"#314866"
    },
    buttonScan2: {
        marginLeft: deviceWidth / 2 - 50,
        width: 100,
        height: 100,
    },
    descText: {
        padding: 16,
        textAlign: 'center',
        fontSize: 16
    },
    highlight: {
        fontWeight: '700',
    },
    centerText: {
        flex: 1,
        textAlign: 'center',
        fontFamily:'Roboto-Medium',
        fontSize: 18,
       // padding: 32,
       
    },
    textBold: {
        fontWeight: '500',
        color: '#000',
    },
    bottomContent: {
       width: deviceWidth,
       height: 120,
    },
    buttonTouchable: {
        fontSize: 21,
        backgroundColor: 'white',
        marginTop: 32,
        width: deviceWidth - 62,
        justifyContent: 'center',
        alignItems: 'center',
        height: 44
    },
    buttonTextStyle: {
        color: 'black',
        //fontWeight: 'bold',
        //fontFamily:'Roboto-Bold',
    },
    cardText:{

        //fontWeight:20,
        fontSize:20,
        fontFamily:'Roboto-Bold',
        color:'white',
        marginTop:3
        
    }
}
export default styles;