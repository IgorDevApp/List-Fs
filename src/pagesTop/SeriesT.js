import React, { useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Series from "../pages/Series";
import SeriesNv from "../pages/SeriesNv";
const tab = createBottomTabNavigator();

export default function SeriesT() {
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
        name="SeriesNv"
        component={SeriesNv}
        options={{
          tabBarLabel: "Series",
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
        name="Series"
        component={Series}
        options={{
          tabBarLabel: "Series",
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
