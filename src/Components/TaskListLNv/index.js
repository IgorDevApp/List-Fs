import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  TextInput,
  Card,
} from "react-native";
import { Divider } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import { divide } from "react-native-reanimated";

//Quando recebe coloca chaves:Estou recebendo meu data
export default function TaskListLNv({ data, handleDelete }) {
  const [Open, setOpen] = useState(false);
  return (
    <Animatable.View animation="bounceIn" useNativeDriver>
      <TouchableOpacity onPress={() => setOpen(true)}>
        <View style={styles.Container} animation="bounceIn" useNativeDriver>
          <View>
            <Text style={styles.Text}>{data.task}</Text>
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.TempEdi}>
        <TouchableOpacity onPress={() => handleDelete(data)}>
          <Ionicons name="trash" color="#fff" size={30}></Ionicons>
        </TouchableOpacity>
      </View>

      <Modal animationType="fade" transparent={true} visible={Open}>
        <SafeAreaView style={styles.modalComp}>
          <View style={styles.modalHeader}>
            <TouchableOpacity
              onPress={() => setOpen(false)}
              style={styles.modalbtn}
            >
              <Ionicons name="close-circle" size={23} color="#fff"></Ionicons>
            </TouchableOpacity>
            <Text style={styles.tituloModal}>{data.task}</Text>
          </View>

          <Animatable.View
            animation="fadeInUp"
            useNativeDriver
            style={styles.corpoModal}
            transparent
          >
            <View
              style={styles.ModalContainer}
              animation="bounceIn"
              useNativeDriver
            >
              <View>
                <Text style={styles.TextAt}>Autor(a): {data.At}</Text>
              </View>
            </View>
            <View
              style={styles.ModalContainer}
              animation="bounceIn"
              useNativeDriver
            >
              <View>
                <Text style={styles.TextAt}>Ano: {data.ano}</Text>
              </View>
            </View>
            <View
              style={styles.ContainerCit}
              animation="bounceIn"
              useNativeDriver
            >
              <View>
                <Text style={styles.TextAt}>1ª Citação: {data.cit}</Text>
              </View>
            </View>
            <View
              style={styles.ContainerCit}
              animation="bounceIn"
              useNativeDriver
            >
              <View>
                <Text style={styles.TextAt}>2ª Citação : {data.cit2}</Text>
              </View>
            </View>
          </Animatable.View>
        </SafeAreaView>
      </Modal>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  Container: {
    width: 345,
    height: 55,
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
  ModalContainer: {
    width: 345,
    height: 55,
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
  ContainerCit: {
    width: 345,
    height: 158,
    margin: 8,
    flexDirection: "row",
    alignItems: "flex-start",
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
  modalComp: {
    width: 370,
    height: 600,
    backgroundColor: "#4969e1",
    position: "absolute",
    alignSelf: "center",
    marginTop: 70,
    borderRadius: 10,
    padding: 7,
    elevation: 50,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3,
    },
  },
  div: {
    width: 345,
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
  TextAt: {
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
    fontSize: 20,
    color: "#fff",
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
