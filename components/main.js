import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import CustomModal from "./customModal";
import Ball from "./magic8";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState("");
  const [display, setDisplay] = useState();
  const [isNormalMode, setIsNormalMode] = useState(true);
  const toggleMode = () => {
    setIsNormalMode((prevMode) => !prevMode);
  };
  const [answers, setAnswers] = useState([
    "That Would Be Insane",
    "THAT RAW!!!",
    "TOO GOOD!!!",
    "it a!!!",
  ]);

  const mathRandom = () => {
    if (text == "") {
      return;
    }

    const random = Math.floor(Math.random() * answers.length);
    const randomAnswer = answers[random];
    setDisplay(randomAnswer); // Fix this to set randomAnswer
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* <Button title="Normal Mode" onPressed={ } /> */}
      <View style={styles.container}>
        <Modal visible={modalVisible} transparent={true} animationType="slide">
          <CustomModal
            setModalVisible={setModalVisible}
            answers={answers}
            setAnswers={setAnswers} // Include setAnswers here
          />
        </Modal>

        <TouchableOpacity
          onPress={() => setModalVisible((prev) => !prev)}
          style={styles.touchable}
        >
          <Image source={require("../public/2.png")} style={styles.image} />
        </TouchableOpacity>

        <View style={styles.Main}>
          <Text style={styles.textHeader}>Magic 8 Ball Prediction</Text>
          <TextInput
            style={styles.input}
            placeholder="Type something..."
            value={text}
            onChangeText={setText}
          />
          <Button title="Send" onPress={mathRandom} />
          <Text style={styles.textDisplay}>{display}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  ModalContainer: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    width: "100%",
  },

  touchable: {
    position: "absolute",
    top: 10,
    right: 5,
    padding: 10,
  },
  image: {
    width: 50,
    height: undefined,
    aspectRatio: 1,
  },
  Main: {
    width: "90%",
    padding: 20,
    alignItems: "center",
  },
  textHeader: {
    width: "100%",
    textAlign: "center",
    fontSize: 24,
    marginBottom: 20,
    color: "black",
    fontWeight: "bold",
  },
  input: {
    width: "75%", // Make input take full width
    padding: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10, // Space below the input
  },
  textDisplay: {
    width: "100%", // Ensure textDisplay takes full width
    textAlign: "center", // Center align text
    marginTop: 10, // Space above the text display
    fontSize: 18, // Adjust font size if needed
  },
});
