import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
export default function CustomModal({ setModalVisible, answers, setAnswers }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    if (inputValue.trim() === "") return; // Prevent empty input
    setAnswers((prevAnswers) => [...prevAnswers, inputValue]); // Append to answers array
    setInputValue(""); // Clear input after submission
  };
  const handleDelete = (index) => {
    setAnswers((prevAnswers) =>
      prevAnswers.filter((_, answerIndex) => answerIndex !== index)
    );
  };
  return (
    <View style={styles.ModalContainer}>
      <View style={styles.ModalContent}>
        <View style={styles.ModalHeader}>
          <TextInput
            style={styles.ModalInput}
            placeholder="Enter Custom Answer here"
            placeholderTextColor="gray"
            value={inputValue}
            onChangeText={setInputValue}
          ></TextInput>
          <Button title="Add" onPress={handleSubmit}></Button>
        </View>
        <View style={styles.ModalAnswers}>
          <View style={styles.ModalSub}>
            {answers
              .filter((answer) => answer.trim() !== "")
              .map((answer, index) => (
                <View key={index} style={styles.ModalSubSub}>
                  <Text key={index}>{answer}</Text>
                  <TouchableOpacity onPress={() => handleDelete(index)}>
                    <Text style={styles.X_sign}>X</Text>
                  </TouchableOpacity>
                </View>
              ))}
          </View>
        </View>
        <Button title="Close" onPress={() => setModalVisible(false)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ModalContainer: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  ModalContent: {
    width: "99%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
  },
  ModalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ModalAnswers: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "99%",
  },
  ModalSub: {
    flexDirection: "column",
  },
  ModalSubSub: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "99%",
    marginTop: 8,
  },
  ModalInput: {
    width: "80%",
    padding: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
  },

  X_sign: {
    fontWeight: "bold",
  },
});
