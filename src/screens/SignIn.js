import React from "react";
import { View, Text, Image, TextInput, TouchableHighlight } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export const SignIn = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "black",
        paddingHorizontal: 15,
        paddingVertical: 15,
      }}
    >
      <Image
        source={require("../../assets/SplashImage.jpg")}
        style={{ height: 220, width: 220 }}
      />
      <View
        style={{
          flexDirection: "row",
          height: 50,
          borderRadius: 5,
          width: 320,
          backgroundColor: "#383838",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextInput
          style={{ padding: 10, color: "white" }}
          placeholder="Email"
          placeholderTextColor={"#A0A0A0"}
        />
        <FontAwesome
          name="envelope-o"
          size={15}
          color="#A0A0A0"
          style={{ paddingRight: 8 }}
        />
      </View>
      <View
        style={{
          marginTop: 15,
          height: 50,
          borderRadius: 5,
          width: 320,
          backgroundColor: "#383838",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextInput
          style={{ padding: 10, color: "white" }}
          placeholder="Password"
          placeholderTextColor={"#A0A0A0"}
        />
        <TouchableHighlight underlayColor={""}>
          <FontAwesome
            name="eye"
            size={15}
            color="#A0A0A0"
            style={{ paddingRight: 8 }}
          />
        </TouchableHighlight>
      </View>
      <TouchableHighlight>
        <View
          style={{
            width: 320,
            height: 40,
            backgroundColor: "#FED500",
            flexDirection: "row",
            borderRadius: 5,
            marginVertical: 15,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesome
            name="sign-in"
            color={"gray"}
            size={18}
            style={{ marginRight: 20 }}
          />
          <Text style={{ color: "gray", fontSize: 16 }}>{"SIGN IN"}</Text>
        </View>
      </TouchableHighlight>
      <Text
        style={{
          color: "#FED500",
          marginTop: 10,
          letterSpacing: 2,
          fontSize: 18,
        }}
      >
        {"OR"}
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 15,
        }}
      >
        <TouchableHighlight style={{ marginRight: 10 }}>
          <View
            style={{
              paddingHorizontal: 30,
              paddingVertical: 20,
              marginLeft: 10,
              backgroundColor: "black",
              borderColor:'#FED500',
              borderWidth:1,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
              
            }}
          >
            <FontAwesome name="google" color={"white"} size={18} style={{ }}/>
          </View>
        </TouchableHighlight>

        <TouchableHighlight style={{}}>
          <View
            style={{
              paddingHorizontal: 30,
              paddingVertical: 20,
              backgroundColor: "black",
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
              borderColor:'#FED500',
              borderWidth:1,
              borderRadius: 5,
            }}
          >
            <FontAwesome name="facebook" color={"white"} size={18} />
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};
