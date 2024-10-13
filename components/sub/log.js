import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import React, { useContext, useState } from "react";
import { DataContext } from "../Context";

const Log = () => {
  const { data, setData } = useContext(DataContext);
  const [btnClicked, setBtnClicked] = useState();

  function handleDelete(index) {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  }

  return (
    <View style={styles.container}>
      {data.length > 0 ? (
        data.map((item, index) => (
          <View key={index} style={styles.data}>
            <View style={styles.questionContainer}>
              <Text>Question: {item.text}</Text>
              <TouchableOpacity onPress={() => handleDelete(index)}>
                <Text style={styles.closeButton}>X</Text>
              </TouchableOpacity>
            </View>
            <Text>Answer: {item.answer}</Text>
            <Text style={styles.date}>{item.date}</Text>
            <View style={styles.BtnContainer}>
              <Button title="True" onPressed={() => {}} />
              <Button title="False" onPressed={() => {}} />
            </View>
          </View>
        ))
      ) : (
        <Text style={styles.default}>No entries available.</Text>
      )}
    </View>
  );
};

export default Log;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  data: {
    display: "flex",
    backgroundColor: "white",
    width: "90%",
    justifyContent: "center",
    padding: 10,
    paddingLeft: 20,
    margin: 10,
    gap: 10,
  },
  date: {
    alignSelf: "flex-end",
    textAlign: "right",
  },
  default: { margin: 10 },
  questionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  closeButton: {
    marginLeft: "auto",
    fontWeight: "bold",
    color: "black",
  },
  BtnContainer: {
    flexDirection: "row",
  },
});
