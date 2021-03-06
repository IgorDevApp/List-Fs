import React, { useState, Component, useCallback, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Modal,
  TextInput,
  AsyncStorageStatic,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import NiverN from "../Components/niverN";
import * as Animatable from "react-native-animatable";
import { color } from "react-native-reanimated";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export default function niver() {
  const Animatedbtn = Animatable.createAnimatableComponent(TouchableOpacity);
  const AnimatedFl = Animatable.createAnimatableComponent(FlatList);
  const navigation = useNavigation();
  const [task, setTask] = useState([]);
  const [open, setOpen] = useState(false);
  const [inputDia, setInputDia] = useState("");
  const [inputMes, setInputMes] = useState("");
  const [inputPres, setinputPres] = useState("");
  const [inputNome, setinputNome] = useState("");

  useEffect(() => {
    async function loadTask() {
      const taskStorange = await AsyncStorage.getItem("@niver");

      if (taskStorange) {
        setTask(JSON.parse(taskStorange));
      }
    }

    loadTask();
  }, []);

  useEffect(() => {
    async function saveTask() {
      await AsyncStorage.setItem("@niver", JSON.stringify(task));
    }
    saveTask();
  }, [task]);

  function handleAdd() {
    if (inputDia === "") return;

    const data = {
      key: inputNome,
      dia: inputDia,
      nome: inputNome,
      mes: inputMes,
      pres: inputPres,
    };

    setTask([...task, data]);
    setOpen(false);
    setInputDia("");
    setinputNome("");
    setinputPres("");
    setInputMes("");
  }

  const handleDelete = useCallback((data) => {
    const find = task.filter((r) => r.key !== data.key);
    setTask(find);
  });

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.titulo}>
        <Text style={styles.textTitulo}>Datas de Aniversario</Text>
      </View>
      <AnimatedFl
        animation="fadeInUp"
        useNativeDriver
        marginVertical={5}
        marginHorizontal={10}
        showsHorizontalScrollIndicator={false}
        data={task.sort((a, b) => a.nome.localeCompare(b.nome))}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <NiverN data={item} handleDelete={handleDelete} />
        )}
      ></AnimatedFl>

      <Modal animationType="slide" transparent={false} visible={open}>
        <SafeAreaView style={styles.modal}>
          <View style={styles.modalHeader}>
            <TouchableOpacity
              onPress={() => setOpen(false)}
              style={styles.modalbtn}
            >
              <Ionicons name="md-arrow-back" size={40} color="#fff"></Ionicons>
            </TouchableOpacity>
            <Text style={styles.tituloModal}>Nova Data</Text>
          </View>

          <Animatable.View
            animation="fadeInUp"
            useNativeDriver
            style={styles.corpoModal}
          >
            <TextInput
              placeholder="Quem ???"
              textAlign="center"
              style={styles.TextInput}
              maxLength={30}
              autoCorrect={false}
              value={inputNome}
              editable={true}
              onChangeText={(texto) => setinputNome(texto)}
            ></TextInput>
            <TextInput
              placeholder="Qual o dia?"
              textAlign="center"
              style={styles.TextInput}
              maxLength={30}
              autoCorrect={false}
              value={inputDia}
              editable={true}
              onChangeText={(texto) => setInputDia(texto)}
            ></TextInput>
            <TextInput
              placeholder="Qual o M??s?"
              textAlign="center"
              style={styles.TextInput}
              maxLength={30}
              autoCorrect={false}
              value={inputMes}
              editable={true}
              onChangeText={(texto) => setInputMes(texto)}
            ></TextInput>
            <TextInput
              placeholder="Se vai comprar presente, qual ???"
              textAlign="center"
              style={styles.TextInput}
              maxLength={30}
              autoCorrect={false}
              value={inputPres}
              editable={true}
              onChangeText={(texto) => setinputPres(texto)}
            ></TextInput>
            <TouchableOpacity style={styles.btnAdd} onPress={handleAdd}>
              <Text style={styles.TxtBtn}>Adicionar</Text>
            </TouchableOpacity>
          </Animatable.View>
        </SafeAreaView>
      </Modal>
      <Animatedbtn
        useNativeDriver
        animation="bounceInUp"
        duration={1500}
        style={styles.btback}
        onPress={() => navigation.navigate("home")}
      >
        <Ionicons name="arrow-back-circle" color="#0070ff" size={40}></Ionicons>
      </Animatedbtn>
      <Animatedbtn
        useNativeDriver
        animation="bounceInUp"
        duration={1500}
        style={styles.btAdd}
        onPress={() => setOpen(true)}
      >
        <Ionicons name="add-circle" color="#0094ff" size={65}></Ionicons>
      </Animatedbtn>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#244157",
  },
  titulo: {
    alignItems: "center",
    marginTop: 25,
  },
  textTitulo: {
    fontSize: 40,
    color: "#fff",
  },
  btAdd: {
    position: "absolute",
    bottom: 15,
    right: 3,
    elevation: 2,
    zIndex: 9,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3,
    },
  },
  modal: {
    flex: 1,
    backgroundColor: "#353839",
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
    marginLeft: 120,
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
  TxtBtn: {
    fontSize: 20,
    fontWeight: "bold",
  },
  viewIp: {
    flexDirection: "row",
  },
  btback: {
    position: "absolute",
    bottom: 90,
    right: 3,
    elevation: 2,
    zIndex: 9,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3,
    },
  },
  muda: {
    position: "absolute",
    bottom: 130,
    right: 3,
    elevation: 2,
    zIndex: 9,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3,
    },
  },
  txtS: {
    fontSize: 20,
    color: "#fff",
    right: 140,
  },
  txt: {
    fontSize: 20,
    color: "#fff",
    marginLeft: 30,
  },
  txts: {
    top: 10,
    left: 186,
    flexDirection: "row",
  },
});
