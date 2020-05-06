import React from 'react';
import {Stylesheet,
        View,
      Text}
      from  'react-native';

export default function GettingStarted(){
    return(
        <View style = {Stylesheet.container} >
            <Text> GettingStarted screen TODO </Text>
        </View>
    )
}

const  styles  =  Stylesheet.create({
    container:{
        padding:24
    }
});