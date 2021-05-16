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
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TaskListLNv from "../../Components/TaskListLNv";
import * as Animatable from "react-native-animatable";
import { color } from "react-native-reanimated";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export default function LivrosNv() {
  const Animatedbtn = Animatable.createAnimatableComponent(TouchableOpacity);
  const AnimatedFl = Animatable.createAnimatableComponent(FlatList);
  const navigation = useNavigation();
  const [task, setTask] = useState([]);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [inputAt, setInputAt] = useState("");
  const [inputAno, setInputAno] = useState("");
  const [inputCit, setInputCit] = useState("");
  const [inputCit2, setInputCit2] = useState("");

  useEffect(() => {
    async function loadTask() {
      const taskStorange = await AsyncStorage.getItem("@LivrosN");

      if (taskStorange) {
        setTask(JSON.parse(taskStorange));
      }
    }

    loadTask();
  }, []);

  useEffect(() => {
    async function saveTask() {
      await AsyncStorage.setItem("@LivrosN", JSON.stringify(task));
    }
    saveTask();
  }, [task]);

  function handleAdd() {
    if (input === "") return;

    const data = {
      key: input,
      task: input,
      At: inputAt,
      ano: inputAno,
      cit: inputCit,
      cit2: inputCit2,
    };

    setTask([...task, data]);
    setOpen(false);
    setInput("");
    setInputAt("");
    setInputAno("");
    setInputCit("");
    setInputCit2("");
  }

  const handleDelete = useCallback((data) => {
    const find = task.filter((r) => r.key !== data.key);
    setTask(find);
    navigation.navigate("Livros");
  });

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.titulo}>
        <Text style={styles.textTitulo}>Livros Não Lidos</Text>
      </View>
      <AnimatedFl
        animation="fadeInUp"
        useNativeDriver
        marginVertical={5}
        marginHorizontal={10}
        showsHorizontalScrollIndicator={false}
        data={task.sort((a, b) => a.task.localeCompare(b.task))}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <TaskListLNv data={item} handleDelete={handleDelete} />
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
            <Text style={styles.tituloModal}>Novo Livro</Text>
          </View>

          <ScrollView>
            <Animatable.View
              animation="fadeInUp"
              useNativeDriver
              style={styles.corpoModal}
            >
              <TextInput
                placeholder="Qual o nome do Livro?"
                textAlign="center"
                style={styles.TextInput}
                maxLength={50}
                multiline
                autoCorrect={false}
                value={input}
                editable={true}
                onChangeText={(texto) => setInput(texto)}
              ></TextInput>

              <TextInput
                placeholder="Qual o nome do autor(a)?"
                textAlign="center"
                style={styles.TextInput}
                maxLength={35}
                autoCorrect={false}
                multiline
                value={inputAt}
                editable={true}
                onChangeText={(texto) => setInputAt(texto)}
              ></TextInput>
              <TextInput
                placeholder="Qual do Ano de Lançamento?"
                textAlign="center"
                style={styles.TextInput}
                maxLength={4}
                autoCorrect={false}
                multiline
                keyboardType="numeric"
                value={inputAno}
                editable={true}
                onChangeText={(texto) => setInputAno(texto)}
              ></TextInput>
              <TextInput
                placeholder="Quer Colocar uma citação?"
                textAlign="center"
                style={styles.TextInput}
                maxLength={200}
                defaultValue="Sem Citação"
                autoCorrect={false}
                multiline
                value={inputCit}
                editable={true}
                onChangeText={(texto) => setInputCit(texto)}
              ></TextInput>
              <TextInput
                placeholder="Quer Colocar outra citação?"
                textAlign="center"
                style={styles.TextInput}
                maxLength={200}
                defaultValue="Sem Citação"
                autoCorrect={false}
                multiline
                value={inputCit2}
                editable={true}
                onChangeText={(texto) => setInputCit2(texto)}
              ></TextInput>
            </Animatable.View>
          </ScrollView>

          <TouchableOpacity style={styles.btnAdd} onPress={handleAdd}>
            <Text style={styles.TxtBtn}>Adicionar</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>

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
    backgroundColor: "#0d241f",
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
    marginTop: 50,
    marginBottom: 25,
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
