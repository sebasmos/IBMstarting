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
import bgImage from '../assets/bg4.jpg';
import Logo from '../assets/LOGOFINAL.png'
import Icon from 'react-native-vector-icons/Ionicons'


const {width: WIDTH} = Dimensions.get('window')
export default class Login extends Component{
  render(){
    console.log('Esta es una prueba')

    return (
          <ImageBackground source={bgImage} style={styles.backgroundContainer}>
            <View style={styles.TextWelcome} >
                  <Text style= {styles.WelcomeText} >Bienvenido a </Text>
            </View>
              <View style={styles.logoContainer}>
                  <Image source={Logo} style={styles.Logo} ></Image>
                  <Text style={styles.logoText}> Aplicacion de monitoreo para ventiladores mecanicos</Text>
              </View>
           
            <View style={styles.inputContainer}>
                  <Icon name={'ios-arrow-dropright'} size={28} color={'rgba(255,255,255,0.7)'}
                      style={styles.inputIcon}
                  />
                      <TextInput
                      style={styles.input}
                          placeholder={'Nombre de usuario'}
                          placeholderTextColor={'rgba(255,255,255,0.7)'}
                          underlineColorAndroid='transparent'
                      />           
            </View>

            <View style={styles.inputContainer}>
                <Icon name={'ios-arrow-dropright'} size={28} color={'rgba(255,255,255,0.7)'}
                        style={styles.inputIcon}
                    />

                    <TextInput
                        style={styles.input}
                            placeholder={'Contraseña'}
                            secureTextEntry={true}
                            placeholderTextColor={'rgba(255,255,255,0.7)'}
                            underlineColorAndroid='transparent'
                        />
                    <TouchableOpacity  style={styles.btnEye}>
                          <Icon name={'ios-cloud'} size={26} color={'rgba(255,255,255,0.7)'} 
                          />
                    </TouchableOpacity>
            </View>
            <View > 
                   <Text style={styles.textforgot}>Olvidaste tu clave?</Text>

            </View>
                    <TouchableOpacity  style={styles.btnLogin}>
                         <Text style={styles.text} > Entrar </Text>
                    </TouchableOpacity>

            <View style={styles.ContainerHighlighted}> 
                    <Text style={styles.textRegister}>Crea una nueva cuenta</Text>
            </View>
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
    fontFamily:'tipo_letra',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50
  },
  WelcomeText:{
    color:'#001696',
    fontFamily:'tipo_letra',
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
    fontFamily:'tipo_letra',
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
    fontFamily:'tipo_letra',
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
    fontFamily:'tipo_letra',
    textAlign:'center'
  },
  textforgot:{
    color:'#001696',
    fontSize:16,
    fontFamily:'tipo_letra',
    textAlign:'center',
    textDecorationLine:'underline'
  },
  textRegister:{
    fontWeight:'bold',
    color:'#001696',
    fontSize:16,
    fontFamily:'tipo_letra',
    textAlign:'center',
    textDecorationLine:'underline'
  }
});
