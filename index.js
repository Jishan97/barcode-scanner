/** @format */

import {AppRegistry,Text,View,TouchableOpacity} from 'react-native';
import React,{Component} from 'react';
import {RNCamera}  from 'react-native-camera';
import Toast, {DURATION} from 'react-native-easy-toast'

class  App extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            qrcode: '',
            msg:'',
            add:''
        }
    }
    // onBarCodeRead = (e) => this.setState({
    //     qrcode: e.data,
    //     msg:'Scan for another product',
    //     add:'Product is added sucessfully to your cart'
    
    
    // });
    onBarCodeRead = (e) => this.setState({
        qrcode: e.data,
        msg:'Scan for another product',
        add:'Product is added sucessfully to your cart'
    
    
    });
    render(){
     
    return(
        <View  style={styles.container}>
        <RNCamera
            style={styles.preview}
            // onBarCodeRead={this.onBarCodeRead}
            
            onGoogleVisionBarcodesDetected={({ barcodes }) => {
                
                   
                this.setState({
                    qrcode: barcodes[0].data,
                    msg:'Scan for another product',
                    add:'Product is added sucessfully to your cart'
                
                
                });
            
                console.log(barcodes[0].data)
              }}
            ref={cam => this.camera = cam}
            autoFocus={RNCamera.Constants.AutoFocus.on}
            // aspect={RNCamera.constants.As gpect.fill}
            >
         
            <View style={styles.containerStyle}>
            <Text style={styles.btn3}> Scan the product barcode below </Text>
   <Text style={styles.btn1}>{this.state.qrcode} </Text>
   <Text style={styles.btn1}>{this.state.add} </Text>
   <Text style={styles.btn1}>{this.state.msg} </Text>
  
   
     </View>
     <View style={styles.frame}>
              </View>
     <View style={styles.containerStyle1}>
     <Text style={styles.btn2}>Checkout! </Text>
  </View>
        


            </RNCamera>
    </View>
    );
}
}
const styles ={
    frame:{
        
        justifyContent:'center',
        alignItems:'center',
        height:200,
        width:300, 
        borderColor:'#1D2645',
        borderWidth:2
    
    },
    chk:{
    //     flex:1,
       
    //     justifyContent:'space-between',
    //   alignItems:'center'
    },
    btn2:{
        
    
        color:'white',
        fontSize:18
    
    
      },   
       containerStyle1:{
        marginTop:100,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FF5656',
        height:50,
        width:200, 
    
        elevation   : 30,
    
        borderRadius:30
      },

    containerStyle:{
      marginBottom:100,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#1D2645',
        height:100,
        width:300, 
    
        elevation   : 30,
    
        borderRadius:30
      },
    container: {
        flex: 1,
        flexDirection: 'row',
      },
      preview: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    
      },
      btn1:{
        
   
        color:'white',
        fontSize:15
      
   
   
      },
      btn3:{
        
   
        color:'yellow',
        fontSize:15
      
   
   
      }
}

AppRegistry.registerComponent('tryS', () => App);
