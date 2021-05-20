import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
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

  const backg = () => {
    return (
      <LinearGradient
        colors={[
          "#00FFFF",
          "#17C8FF",
          "#329BFF",
          "#4C64FF",
          "#6536FF",
          "#8000FF",
        ]}
        start={{ x: 0.0, y: 1.0 }}
        end={{ x: 1.0, y: 1.0 }}
        style={styles.btn}
      ></LinearGradient>
    );
  };

  return (
    <ScrollView style={styles.Container}>
      <StatusBar backgroundColor="#0d212f"></StatusBar>
      <TouchableOpacity onPress={() => navigation.navigate("lazer")}>
        <LinearGradient
          colors={[
            "#00FFFF",
            "#17C8FF",
            "#329BFF",
            "#4C64FF",
            "#6536FF",
            "#8000FF",
          ]}
          start={{ x: 0.0, y: 1.0 }}
          end={{ x: 1.0, y: 1.0 }}
          style={styles.btn}
        >
          <Text style={styles.txt}>LAZER</Text>
          <Image
            style={styles.cin}
            source={require("../../img/cinema.png")}
          ></Image>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("niver")}>
        <LinearGradient
          colors={["#f12711", "#f5af19"]}
          start={{ x: 0.0, y: 1.0 }}
          end={{ x: 1.0, y: 1.0 }}
          style={styles.btn1}
        >
          <Text style={styles.txt}>ANIVERSARIO</Text>
          <Image
            style={styles.bol}
            source={require("../../img/bolo.png")}
          ></Image>
        </LinearGradient>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#054f77",
  },
  cin: {
    width: 130,
    height: 110,
    position: "absolute",
    left: 260,
    zIndex: 5,
  },
  bol: {
    width: 130,
    height: 110,
    position: "absolute",
    left: 260,
  },
  btn: {
    marginTop: 50,
    marginHorizontal: 15,
    marginVertical: 20,
    borderWidth: 2,
    borderBottomColor: "#000000",
    width: 400,
    height: 120,
    backgroundColor: "#ff0000",
    elevation: 50,
    borderRadius: 10,
    zIndex: 9,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3,
    },
  },
  btn1: {
    borderWidth: 2,
    borderBottomColor: "#000000",
    marginHorizontal: 15,
    marginVertical: 10,
    width: 400,
    height: 120,
    elevation: 10,
    borderRadius: 10,
    zIndex: 9,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3,
    },
  },
  txt: {
    fontWeight: "bold",
    color: "#ffffff",
    fontSize: 35,
    textAlignVertical: "center",
    textShadowColor: "#000",
    marginLeft: 20,
    marginTop: 25,
  },
});
