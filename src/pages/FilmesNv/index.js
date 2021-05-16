import React, { useState, useCallback, useEffect } from "react";
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
import * as Animatable from "react-native-animatable";
import TaskListn from "../../Components/TaskListNv";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import {
  AdMobBanner,
  AdMobInterstitial,
  setTestDeviceIDAsync,
} from "expo-ads-admob";
const Animatedbtn = Animatable.createAnimatableComponent(TouchableOpacity);
const AnimatedFl = Animatable.createAnimatableComponent(FlatList);
export default function FilmesNv() {
  async function InterstitialAd() {
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
    await AdMobInterstitial.showAdAsync();
  }
  const navigation = useNavigation();
  const [task, setTask] = useState([]);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [inputTemp, setInputTemp] = useState("");

  useEffect(() => {
    async function loadTask() {
      const taskStorange = await AsyncStorage.getItem("@novoF");

      if (taskStorange) {
        setTask(JSON.parse(taskStorange));
      }
    }

    loadTask();
  }, []);

  useEffect(() => {
    async function saveTask() {
      await AsyncStorage.setItem("@novoF", JSON.stringify(task));
    }
    saveTask();
  }, [task]);

  function handleAdd() {
    if (input === "") return;

    const data = {
      key: input,
      task: input,
    };

    setTask([...task, data]);
    setOpen(false);
    setInput("");
  }

  const handleDelete = useCallback((data) => {
    const find = task.filter((r) => r.key !== data.key);
    setTask(find);
    navigation.navigate("Filmes");
    //InterstitialAd()
  });
  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.titulo}>
        <Text style={styles.textTitulo}>Filmes Não Vistos</Text>
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
          <TaskListn data={item} handleDelete={handleDelete} />
        )}
      />

      <Modal animationType="slide" transparent={false} visible={open}>
        <SafeAreaView style={styles.modal}>
          <View style={styles.modalHeader}>
            <TouchableOpacity
              onPress={() => setOpen(false)}
              style={styles.modalbtn}
            >
              <Ionicons name="md-arrow-back" size={40} color="#fff"></Ionicons>
            </TouchableOpacity>
            <Text style={styles.tituloModal}>Novo Filme</Text>
          </View>

          <Animatable.View
            animation="fadeInUp"
            useNativeDriver
            style={styles.corpoModal}
          >
            <TextInput
              placeholder="Qual o nome do filme?"
              textAlign="center"
              style={styles.TextInput}
              maxLength={30}
              autoCorrect={false}
              value={input}
              onChangeText={(texto) => setInput(texto)}
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
  btnAdd: {
    alignItems: "center",
    alignContent: "center",
    marginLeft: 120,
    marginRight: 10,
    marginTop: 50,
    backgroundColor: "#fff",
    padding: 9,
    height: 40,
    width: 190,
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
});
