import React, { useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const tab = createMaterialTopTabNavigator();
import SeriesT from "../pagesTop/SeriesT";
import FilmesT from "../pagesTop/FilmesT";
import LivrosT from "../pagesTop/LivrosT";
//const tab = createBottomTabNavigator();
export default function lazer() {
  return (
    <tab.Navigator
      tabBarOptions={{
        showLabel: 10,
        activeTintColor: "#fff",
        inactiveTintColor: "#0d212f",
        showIcon: true,
        labelStyle: {
          fontSize: 10,
        },
        style: {
          paddingTop: 10,
          height: 70,
          backgroundColor: "#0d212f",
          ...Platform.select({
            android: {
              elevation: 3,
            },
          }),
        },
      }}
    >
      <tab.Screen
        name="Filmes"
        component={FilmesT}
        options={{
          tabBarLabel: "Filmes",
          tabBarIcon: () => <Ionicons name="film" color="#fff" size={26} />,
        }}
      />
      <tab.Screen
        name="Series"
        component={SeriesT}
        options={{
          tabBarLabel: "Series",
          tabBarIcon: () => <Ionicons name="tv" color="#fff" size={26} />,
        }}
      />
      <tab.Screen
        name="Livros"
        component={LivrosT}
        options={{
          tabBarLabel: "Livros",
          tabBarIcon: () => <Ionicons name="book" color="#fff" size={26} />,
        }}
      />
    </tab.Navigator>
  );
}
