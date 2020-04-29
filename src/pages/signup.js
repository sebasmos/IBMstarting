import React,{Component} from 'react';
import { StyleSheet, 
  Text,
   View,
    ImageBackground,
  Image, 
  TextInput,
  Dimensions,
  TouchableOpacity} from 'react-native';
import { Button } from "react-native-elements";
import bgImage from './assets/bg4.jpg';
import Logo from './assets/LOGOFINAL.png'
import Icon from 'react-native-vector-icons/Ionicons'

const {width: WIDTH} = Dimensions.get('window')
export default class LOGINIBM extends Component{
  render(){
    console.log('Esta es una prueba')

    return (
          <ImageBackground source={bgImage} style={styles.backgroundContainer}>
            <View style={styles.TextWelcome} >
                  <Text style= {styles.WelcomeText} >Registrate </Text>
            </View>
              <View style={styles.logoContainer}>
                  <Image source={Logo} style={styles.Logo} ></Image>
              </View>
           
            <View style={styles.inputContainer}>
                      <TextInput
                      style={styles.input}
                          placeholder={'Nombres'}
                          placeholderTextColor={'rgba(255,255,255,0.7)'}
                          underlineColorAndroid='transparent'
                      />           
            </View>
            <View style={styles.inputContainer}>
                      <TextInput
                      style={styles.input}
                          placeholder={'Apellidos'}
                          placeholderTextColor={'rgba(255,255,255,0.7)'}
                          underlineColorAndroid='transparent'
                      />           
            </View>
            <View style={styles.inputContainer}>
                      <TextInput
                      style={styles.input}
                          placeholder={'Cedula'}
                          placeholderTextColor={'rgba(255,255,255,0.7)'}
                          underlineColorAndroid='transparent'
                      />           
            </View>
            <View style={styles.inputContainer}>
                      <TextInput
                      style={styles.input}
                          placeholder={'Correo Electronico'}
                          placeholderTextColor={'rgba(255,255,255,0.7)'}
                          underlineColorAndroid='transparent'
                      />           
            </View>
            <View style={styles.inputContainer}>
                      <TextInput
                      style={styles.input}
                          placeholder={'Genero'}
                          placeholderTextColor={'rgba(255,255,255,0.7)'}
                          underlineColorAndroid='transparent'
                      />           
            </View>
                    <TouchableOpacity  style={styles.btnLogin}>
                         <Text style={styles.text} > Registrate </Text>
                    </TouchableOpacity>

          </ImageBackground>
          
      
  


    );  
  }
}


const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width:null,
    height:null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer:{
    alignContent:'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50
  },
  TextWelcome:{
    alignContent:'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50
  },
  WelcomeText:{
    color:'#001696',
    fontSize:35,    
    textAlign:"center",
    justifyContent: 'center',    
    alignItems: 'center',    
    alignContent:'center',
    fontWeight:'500',
    marginTop:5,
  },
  Logo:{
    width:330,
    height:90,
  }, 
  logoText:{
    color:'#001696',
    fontSize:25,    
    textAlign:"center",
    justifyContent: 'center',    
    alignItems: 'center',    
    alignContent:'center',
    fontWeight:'500',
    marginTop:10,
  },
  input:{
    width:WIDTH-55,
    height: 45,
    borderRadius: 45,
    fontSize:16,
    paddingLeft:45,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'rgba(255,255,255,0.7)',
    marginHorizontal:25,

  },
  inputIcon:{
    position:'absolute',
    top:8,
    left:37
  },
  inputContainer:{
    marginTop:10,
  },
  btnEye:{
    position:'absolute',
    top: 3,
    right:37
  },
  btnLogin:{
    width:WIDTH-55,
    height: 45,
    borderRadius: 45,
    justifyContent:'center',
    backgroundColor:'#001696',
    marginTop: 50
  },
  text:{
    color: 'rgba(255,255,255,0.7)',
    fontSize:16,
    textAlign:'center'
  },
  textforgot:{
    color:'#001696',
    fontSize:16,
    textAlign:'center',
    textDecorationLine:'underline'
  },
  textRegister:{
    fontWeight:'bold',
    color:'#001696',
    fontSize:16,
    textAlign:'center',
    textDecorationLine:'underline'
  }
});
