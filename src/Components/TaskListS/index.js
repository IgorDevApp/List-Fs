import React from "react";
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
export default function TaskListS({ data, handleDelete }) {
  return (
    <Animatable.View animation="bounceIn" useNativeDriver>
      <View style={styles.Container} animation="bounceIn" useNativeDriver>
        <TouchableOpacity>
          <Ionicons
            name="md-checkmark-circle"
            size={30}
            color="#00825f"
          ></Ionicons>
        </TouchableOpacity>
        <View>
          <Text style={styles.Text}>{data.task}</Text>
        </View>
        <View style={styles.tempvi}>
          <Text style={styles.Temp}>{data.temp}</Text>
        </View>
        <TouchableOpacity style={styles.Epvi}>
          <Text style={styles.Temp}>{data.ep}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.TempEdi}>
        <TouchableOpacity onPress={() => handleDelete(data)}>
          <Ionicons name="trash" color="#fff" size={30}></Ionicons>
        </TouchableOpacity>
      </View>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  Container: {
    width: 230,
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
  modalbtn: {
    marginLeft: 5,
    marginRight: 5,
  },
  Text: {
    color: "#121212",
    fontSize: 20,
    paddingLeft: 10,
  },
  Temp: {
    textAlignVertical: "center",
    fontSize: 23,
    textAlign: "center",
    padding: 2,
    fontWeight: "bold",
  },
  tempvi: {
    position: "absolute",
    left: 240,
    width: 45,
    height: 47,
    backgroundColor: "#fff",
    alignItems: "center",
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
  Epvi: {
    position: "absolute",
    left: 295,
    width: 45,
    height: 47,
    backgroundColor: "#fff",
    alignItems: "center",
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
  TempEdi: {
    position: "absolute",
    left: 355,
    top: 15,
    zIndex: 5,
  },
  modal: {
    flex: 1,
    backgroundColor: "#4834df",
  },
  modalbtn: {
    marginLeft: 5,
    marginRight: 5,
  },
  modalHeader: {
    marginTop: 10,
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 20,
    alignItems: "center",
  },
  tituloModal: {
    fontSize: 38,
    color: "#fff",
    marginLeft: 15,
  },
  corpoModal: {
    marginTop: 15,
  },
  TextInput: {
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 30,
    backgroundColor: "#fff",
    padding: 9,
    height: 90,
    textAlignVertical: "center",
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3,
    },
    color: "#000",
  },
  TempInput: {
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 30,
    backgroundColor: "#fff",
    padding: 9,
    height: 50,
    textAlignVertical: "center",
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3,
    },
    color: "#000",
  },
  btnAdd: {
    alignItems: "center",
    alignContent: "center",
    marginLeft: 105,
    marginRight: 10,
    marginTop: 100,
    backgroundColor: "#fff",
    padding: 9,
    height: 40,
    width: 200,
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3,
    },
    color: "#000",
  },
});
