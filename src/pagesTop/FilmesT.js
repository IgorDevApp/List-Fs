import React, { useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Filmes from "../pages/Filmes/Index";
import FilmesNv from "../pages/FilmesNv/index";

const Stack = createStackNavigator();
const tab = createBottomTabNavigator();

export default function FilmesT() {
  return (
    <tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: "#fff",
        inactiveBackgroundColor: "#0d212f",
        activeTintColor: "#000",
        inactiveTintColor: "#fff",
        showLabel: 10,
        labelStyle: {
          fontSize: 20,
          paddingBottom: 5,
          paddingRight: 35,
        },
        style: {
          paddingTop: 4,
          backgroundColor: "#fff",
          height: 57,

          ...Platform.select({
            android: {
              elevation: 3,
            },
          }),
        },
      }}
    >
      <tab.Screen
        name="FilmesNv"
        component={FilmesNv}
        options={{
          tabBarLabel: "Filmes ",
          tabBarIcon: ({ color }) => (
            <Ionicons
              style={{
                paddingLeft: 60,
                paddingTop: 43,
              }}
              name="checkmark-sharp"
              color="#0d212f"
              size={30}
            />
          ),
        }}
      />
      <tab.Screen
        name="Filmes"
        component={Filmes}
        options={{
          tabBarLabel: "Filmes",
          tabBarIcon: ({ color }) => (
            <Ionicons
              style={{
                paddingLeft: 60,
                paddingTop: 43,
              }}
              name="checkmark-done-sharp"
              color="#0d212f"
              size={30}
            />
          ),
        }}
      />
    </tab.Navigator>
  );
}
