import React, { useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SignIn } from "../src/screens/SignIn";
import { Gadgets } from "../src/screens/Gadgets";
import { ComputerLaptops } from "../src/screens/ComputerLaptops";
import { GetDiscount } from "../src/screens/Mobiles";
import { Mobiles } from "../src/screens/Mobiles";
import { Homepage } from "../src/screens/Homepage";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign, FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function DrawerNavigation() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false,
        drawerStyle: { backgroundColor: "#282828", width: "70%" },
        drawerActiveBackgroundColor: "#FED500",
        drawerActiveTintColor: "white",
        drawerInactiveTintColor: "#A0A0A0",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Homepage}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name="md-home"
              size={18}
              color={focused ? "white" : "#A0A0A0"}
            />
          ),
        }}
      />
      
      <Drawer.Screen
        name="Gadgets"
        component={Gadgets}
        options={{
          drawerIcon: ({ focused, size }) => (
            <FontAwesome
              name="gamepad"
              size={18}
              color={focused ? "white" : "#A0A0A0"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Computer and Laptops"
        component={ComputerLaptops}
        options={{
          drawerIcon: ({ focused, size }) => (
            <MaterialIcons
              name="computer"
              size={18}
              color={focused ? "white" : "#A0A0A0"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Mobiles"
        component={Mobiles}
        options={{
          drawerIcon: ({ focused, size }) => (
            <AntDesign
              name="mobile1"
              size={18}
              color={focused ? "white" : "#A0A0A0"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Sign In"
        component={SignIn}
        options={{
          drawerIcon: ({ focused, size }) => (
            <FontAwesome
              name="sign-in"
              size={18}
              color={focused ? "white" : "#A0A0A0"}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
