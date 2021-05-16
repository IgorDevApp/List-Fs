import React, { useState, Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

//Quando recebe coloca chaves:Estou recebendo meu data
export default function TaskList({ data, handleDelete }) {
  const [open, setOpen] = useState(false);
  return (
    <Animatable.View animation="bounceIn" useNativeDriver>
      <View style={styles.Container}>
        <TouchableOpacity onPress={() => setOpen(true)}>
          <Ionicons
            name="md-checkmark-circle"
            size={30}
            color="#00825f"
          ></Ionicons>
        </TouchableOpacity>
        <View>
          <Text style={styles.Text}>{data.task}</Text>
          <Text style={styles.Text}>{data.da}</Text>
        </View>
      </View>

      <View style={styles.delete}>
        <TouchableOpacity onPress={() => handleDelete(data)}>
          <Ionicons name="trash" color="#fff" size={30}></Ionicons>
        </TouchableOpacity>
      </View>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  Container: {
    width: 335,
    height: 50,
    margin: 8,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 7,
    elevation: 1.5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3,
    },
  },
  delete: {
    position: "absolute",
    left: 350,
    zIndex: 5,
    top: 15,
  },
  Text: {
    color: "#121212",
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 20,
  },
});
