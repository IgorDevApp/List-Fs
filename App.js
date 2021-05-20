import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const tab = createMaterialTopTabNavigator();

import lazer from "./src/pagesInit/lazer";
import niver from "./src/pagesInit/niver";
import Home from "./src/pagesInit/home";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
//const tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#191E1F80" },
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            headerTitle: "Home",
          }}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="niver" component={niver} />
        <Stack.Screen name="lazer" component={lazer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
