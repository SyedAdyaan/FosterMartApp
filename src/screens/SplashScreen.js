import React from "react";
import { View,Text,Image } from "react-native";


export const SplashScreen = () => {
  return (
    <View style={{justifyContent:'center',alignItems:'center',flex:1,backgroundColor:'black'}}>
      {/* <Text style={{color:'white',fontSize:24}}>{"Splash Screen"}</Text> */}
      {/* <Image source={require('../../Images/SplashImage.jpg')} style={{height:300,width:300}} resizeMode='cover'/> */}
    </View>
  );
};
