import React from "react";
import { View, Text, Button,ScrollView } from "react-native";
import laptopData from "../../data/laptopData";
import productData from "../../data/MobileData";
import ProductShowComponent from "../components/ProductShow";

export const Homepage = ({ navigation }) => {
  return (
    <ScrollView>
   <View style={{backgroundColor:'black',flex:1}}>

    <View style={{marginTop:25}}>
    <Text style={{fontSize:16,color:'white'}}>Hello</Text>
    <Text style={{paddingLeft:25,color:'white',fontSize:18}}>Rumais !</Text>
    </View>


    <Text style={{paddingLeft:25,color:'white',fontSize:18,marginTop:30}}>Mobile Phones !</Text>
    <ProductShowComponent data={productData}/>

    <Text style={{paddingLeft:25,color:'white',fontSize:18,paddingTop:20}}>Laptops !</Text>
    <ProductShowComponent data={laptopData}/>
   </View>
   </ScrollView>

  );
};
