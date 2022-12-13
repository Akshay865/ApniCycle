// import React, { Component, Fragment } from 'react';
// import { TouchableOpacity, Text, Image, ImageBackground, BackHandler, Linking, View } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import QRCodeScanner from 'react-native-qrcode-scanner';
// import styles from './ScanQrStyle.js';

// class Scan extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             scan: false,
//             ScanResult: false,
//             result: null
//         };
//     }
//     onSuccess = (e) => {
//         const check = e.data.substring(0, 4);
//         console.log('scanned data' + check);
//         this.setState({
//             result: e,
//             scan: false,
//             ScanResult: true
//         })
//         if (check === 'http') {
//             Linking.openURL(e.data).catch(err => console.error('An error occured', err));
//         } else {
//             this.setState({
//                 result: e,
//                 scan: false,
//                 ScanResult: true
//             })
//         }
//     }
//     activeQR = () => {
//         this.setState({ scan: true })
//     }
//     scanAgain = () => {
//         this.setState({ scan: true, ScanResult: false })
//     }
//     render() {
//         const { scan, ScanResult, result } = this.state
//         return (
//             <View style={styles.scrollViewStyle}>
//             <Fragment>
//                 <View style={styles.header}>
//                     <TouchableOpacity onPress={()=> BackHandler.exitApp()}>
//                         <Image source={require('../../images/arrow1.png')} style={{height: 36, width: 36}}></Image>
//                     </TouchableOpacity>
//                     <Text style={styles.textTitle}>Scan QR Code</Text>
//                 </View>
//                 {!scan && !ScanResult &&
//                     <View style={styles.cardView} >
//                         <Image source={require('../../images/camera1.jpg')} style={{height: 36, width: 36}}></Image>
//                         <Text numberOfLines={8} style={styles.descText}>Please move your camera {"\n"} over the QR Code</Text>
//                         <Image source={require('../../images/scan1.png')} style={{margin: 20,height:260,width:260}}></Image>
//                         <TouchableOpacity onPress={this.activeQR} style={styles.buttonScan}>
//                             <View style={styles.buttonWrapper}>
//                             <Image source={require('../../images/camera1.jpg')} style={{height: 36, width: 36}}></Image>
//                             <Text style={{...styles.buttonTextStyle,fontFamily:'Roboto-Bold'}}>Scan QR Code</Text>
//                             </View>
//                         </TouchableOpacity>
//                     </View>
//                 }
//                 {ScanResult &&
//                     <Fragment >
//                         {/* <Text style={styles.textTitle1}>Result</Text> */}
//                         <LinearGradient
//                         start={{x: 0.0, y: 0}} end={{x: 1, y: 0}}colors={['#D50A81', '#B61883','#C01483',
//                         '#9A2686',
//                         '#9F2385',
//                         '#9F2385', '#643F8A']}
                        
//                         style={ScanResult ? styles.scanCardView : styles.cardView}>
                        
//                             {/* <Text>Type : {result.type}</Text> */}
//                             {/* <Text>Result : {result.data}</Text> */}
//                             <Text numberOfLines={1}
                            
//                             style={ 
//                                 {fontSize:20,
//                                 fontFamily:'Roboto-Bold',
//                                 color:'white',
//                                 marginTop:"55%",
                                
                               
//                                }
//                                 }
//                             >Cycle Model Details</Text>
//                             <Image source={require('../../images/cyclelogo3.jpg')} style={styles.logo} />
//                             {/* <Text numberOfLines={1}>RawData: {result.rawData}</Text> */}
//                             <Text style={styles.cardText} >Model Id</Text>
//                             <Text style={styles.cardText} >Model Details</Text>
                           
//                             <TouchableOpacity onPress={this.scanAgain} style={styles.buttonScan1}>
//                                 <View style={styles.buttonWrapper}>
//                                     {/* <Image source={require('../../images/camera.png')} style={{height: 36, width: 36}}></Image> */}
//                                     <Text style={{
                                        
//                                         fontFamily:'Roboto-Bold',
//                                         fontSize:20,
//                                         color:'white',
//                                         }}> Book</Text>
//                                 </View>
//                             </TouchableOpacity>
//                         </LinearGradient>
                      
//                         <View style={{flex:1}}>
//                         </View>
                            
//                     </Fragment>
//                 }
//                 {scan &&
//                     <QRCodeScanner
//                         reactivate={true}
//                         showMarker={true}
//                         ref={(node) => { this.scanner = node }}
//                         onRead={this.onSuccess}
//                         topContent={
//                             <Text style={styles.centerText}>
//                                Please Scan Your Cycle to Book {"\n"} over the QR Code
//                             </Text>
//                         }
//                         bottomContent={
//                             <View>
//                                 <ImageBackground source={require('../../images/bottom-panel.png')} style={styles.bottomContent}>
//                                     <TouchableOpacity style={styles.buttonScan2} 
//                                         onPress={() => this.scanner.reactivate()} 
//                                         onLongPress={() => this.setState({ scan: false })}>
//                                         <Image source={require('../../images/qr.png')}></Image>
//                                     </TouchableOpacity>
//                                 </ImageBackground>
//                             </View>
//                         }
//                     />
//                 }
//             </Fragment>
//         </View>
//         );
//     }
// }
// export default Scan;


import React, { Component, Fragment } from 'react';
import { TouchableOpacity, Text, Image, ImageBackground, BackHandler, Linking, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import QRCodeScanner from 'react-native-qrcode-scanner';
import styles from './ScanQrStyle.js';
import Loader from "../../Components/Loader.js";
// import swal from '@sweetalert/with-react'
class Scan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scan: false,
            ScanResult: false,
            result: null,
            isLoading:false
        };
    }
    onSuccess = (e) => {
       // const check = e.data.substring(0, 4);
        console.log("ssssss",e);
        
         const x=JSON.parse(e.data);
         console.log("aaaaaaaaaaaa",x);
        // console.log("ooooooo",x.course.id);
       //  console.log('scanned data' + check);

        this.setState({
            
            //result: x.course,
            result:x,
            scan: false,
            ScanResult: true
        })
        // if (check === 'http') {
        //     Linking.openURL(e.data).catch(err => console.error('An error occured', err));
        // } else {
        //     this.setState({
        //         result: x.course,
        //         scan: false,
        //         ScanResult: true
        //     })
        // }
    }
    activeQR = () => {
        this.setState({ scan: true })
    }
    scanAgain =async () => {
       await this.setState({ scan: true, ScanResult: false, })
       await this.setState({isLoading:true})
       console.log("aaaaaaaaaaaaa")
      await fetch('http://172.17.49.230:8080/reservation', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          
            {
                "id": 1,
                "dueDate": "2022-10-16T18:25:43.511Z",
                "cycle" : {
                    "cycleId": 1
                 },
                "user": {
                    "id": 1
                }
            }
        )
      }).then( async(response)=>{
        console.log('qqqqqqqqqqqq',response);
        if(response.status===200)
        {
        //this.props.navigation.navigate('Balance',{key:1})
        console.log("dddddddddddddddd")
        alert("Cycle Booked");
        this.setState({isLoading:false});
     
       // this.props.navigation.navigate('Tab1');
        }
       
      }
        
      )

    }

    
    render() {
        const { scan, ScanResult, result } = this.state

        if(this.state.isLoading===false)
        return (

            <View style={styles.scrollViewStyle}>
            <Fragment>
                <View style={styles.header}>
                    <TouchableOpacity onPress={()=> BackHandler.exitApp()}>
                        <Image source={require('../../images/arrow1.png')} style={{height: 36, width: 36}}></Image>
                    </TouchableOpacity>
                    <Text style={styles.textTitle}>Scan QR Code</Text>
                </View>
                {!scan && !ScanResult &&
                    <View style={styles.cardView} >
                        <Image source={require('../../images/camera1.jpg')} style={{height: 36, width: 36}}></Image>
                        <Text numberOfLines={8} style={styles.descText}>Please move your camera {"\n"} over the QR Code</Text>
                        <Image source={require('../../images/scan1.png')} style={{margin: 20,height:260,width:260}}></Image>
                        <TouchableOpacity onPress={this.activeQR} style={styles.buttonScan}>
                            <View style={styles.buttonWrapper}>
                            <Image source={require('../../images/camera1.jpg')} style={{height: 36, width: 36}}></Image>
                            <Text style={{...styles.buttonTextStyle,fontFamily:'Roboto-Bold'}}>Scan QR Code</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                }
                {ScanResult &&
                    <Fragment >
                        {/* <Text style={styles.textTitle1}>Result</Text> */}
                        <LinearGradient
                        start={{x: 0.0, y: 0}} end={{x: 1, y: 0}}colors={['#D50A81', '#B61883','#C01483',
                        '#9A2686',
                        '#9F2385',
                        '#9F2385', '#643F8A']}
                        
                        style={ScanResult ? styles.scanCardView : styles.cardView}>
                        
                            {/* <Text>Type : {result.type}</Text> */}
                            {/* <Text>Result : {result.data}</Text> */}
                            <Text numberOfLines={1}
                            
                            style={ 
                                {fontSize:20,
                                fontFamily:'Roboto-Bold',
                                color:'white',
                                marginTop:"55%",
                                
                               
                               }
                                }
                            >Cycle Details</Text>
                            <Image source={require('../../images/cycle.png')} style={styles.logo} />
                            {/* <Text numberOfLines={1}>RawData: {result.rawData}</Text> */}
                            
                            {/* <Text style={styles.cardText} >Details</Text> */}
                            <Text style={styles.cardText} >Model Id :{result.id}</Text>
                            <Text style={styles.cardText} > Name: {result.name}</Text>
                            <Text style={styles.cardText} > Price: {result.price}</Text>
                            {/* <Text style={styles.cardText} > Sem: {result.semester}</Text> */}
                            {/* <Text style={styles.cardText} > {result.data}</Text> */}
                           
                           
                            <TouchableOpacity

                             
                             onPress= {
                                this.scanAgain
                            
                            }
                               style={styles.buttonScan1}>
                                <View style={styles.buttonWrapper}>
                                    {/* <Image source={require('../../images/camera.png')} style={{height: 36, width: 36}}></Image> */}
                                    <Text style={{
                                        
                                        fontFamily:'Roboto-Bold',
                                        fontSize:20,
                                        color:'white',
                                        }}>Book</Text>
                                </View>
                            </TouchableOpacity>
                        </LinearGradient>
                      
                        <View style={{flex:1}}>
                        </View>
                            
                    </Fragment>
                }
                {scan &&
                    <QRCodeScanner
                        reactivate={true}
                        showMarker={true}
                        ref={(node) => { this.scanner = node }}
                        onRead={this.onSuccess}
                        topContent={
                            <Text style={styles.centerText}>
                               Please Scan QR to Book Cycle {"\n"} 
                            </Text>
                        }
                        bottomContent={
                            <View>
                                <ImageBackground source={require('../../images/bottom-panel.png')} style={styles.bottomContent}>
                                    <TouchableOpacity style={styles.buttonScan2} 
                                        onPress={() => this.scanner.reactivate()} 
                                        onLongPress={() => this.setState({ scan: false })}>
                                        <Image source={require('../../images/qr.png')}></Image>
                                    </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        }
                    />
                }
            </Fragment>
        </View>
        );
        else
        return (

            <Loader/>
        )
    }
}
export default Scan;