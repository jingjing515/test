import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
} from "react-native";
import Header from "./components/Header";
import Input from "./components/Input";

export default function App() {
  const name = "my awesome app";
  const [enteredText, setEnteredText] = useState("Your goals will appear here");
  const [modalVisible, setModalVisible] = useState(false);

  function onTextEntered(changedText) {
    setEnteredText(changedText);
    setModalVisible(false);
  }

  function onCancel() {
    setModalVisible(false);
  }
  // function onAddTaskPress() {
  //   setModalVisible(true);
  // }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topContainer}>
        <Header appName={name} />
        <Button
          title="Add A Task"
          onPress={() => {
            setModalVisible(true);
          }}
        />
      </View>
      <Input
        modalIsVisible={modalVisible}
        sendChangedText={onTextEntered}
        cancelPressed={onCancel}
      />
      <View style={styles.bottomContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{enteredText}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
  topContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    flex: 4,
    backgroundColor: "#dcd",
    alignItems: "center",

    // alignSelf: "stretch",
  },
  text: {
    fontSize: 18,
    color: "purple",

    padding: 5,
  },
  textContainer: {
    backgroundColor: "#999",
    borderRadius: 5,
  },
});
