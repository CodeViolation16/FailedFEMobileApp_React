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

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Modal visible={modalVisible} transparent={true} animationType="slide">
          <TouchableWithoutFeedback
            onPress={() => setModalVisible((prev) => !prev)}
          >
            <View style={styles.ModalContainer}>
              <TouchableWithoutFeedback>
                <CustomModal />
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
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
          <Button title="Send" />
          <Text style={styles.textDisplay}>That's Insane</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    width: "100%", // Set container to full width
  },

  ModalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  touchable: {
    position: "absolute",
    top: -10,
    right: -45,
    padding: 10,
  },
  image: {
    width: 50,
    height: undefined,
    aspectRatio: 1,
  },
  Main: {
    width: "90%", // Set Main to take 90% of the width
    padding: 20, // Add padding to the Main container
    alignItems: "center", // Center items horizontally
  },
  textHeader: {
    width: "100%", // Ensure textHeader takes full width
    textAlign: "center", // Center align text
    fontSize: 24, // Increase font size for better visibility
    marginBottom: 20, // Space below the header
  },
  input: {
    width: "100%", // Make input take full width
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
