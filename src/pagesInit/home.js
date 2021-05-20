import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import lazer from "../pagesInit/lazer";
import niver from "../pagesInit/lazer";
import { ScrollView } from "react-native-gesture-handler";
export default function Home() {
  const navigation = useNavigation();
  const Drawer = createDrawerNavigator();
  const Stack = createStackNavigator();
  return (
    <ScrollView style={styles.Container}>
      <StatusBar backgroundColor="#808080"></StatusBar>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("lazer")}
      >
        <Text style={styles.txt}>LAZER</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn1}
        onPress={() => navigation.navigate("niver")}
      >
        <Text style={styles.txt}>ANIVERSARIO</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#0d212f",
  },
  btn: {
    marginTop: 50,
    marginHorizontal: 15,
    marginVertical: 20,
    width: 420,
    height: 120,
    backgroundColor: "#346698",
    elevation: 10,
    zIndex: 9,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3,
    },
  },
  btn1: {
    marginHorizontal: 15,
    marginVertical: 10,
    width: 420,
    height: 120,
    backgroundColor: "#346698",
    elevation: 10,
    zIndex: 9,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3,
    },
  },
  txt: {
    color: "#fff",
    fontSize: 25,
    textAlignVertical: "center",
    textAlign: "center",
    textShadowColor: "#000",
    marginTop: 25,
  },
});
