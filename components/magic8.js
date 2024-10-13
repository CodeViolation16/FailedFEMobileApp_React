import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState, useContext } from "react";
import { DataContext } from "./Context";
export default function Ball() {
  const { data, setData } = useContext(DataContext);
  const magic8BallAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don’t count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful.",
  ];

  const [text, setText] = useState("");
  const [answer, setAnswer] = useState("");
  function getFormattedDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const date = now.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${date}`;
  }

  function randomizeAnswer() {
    const random = Math.floor(Math.random() * magic8BallAnswers.length);
    const answer = magic8BallAnswers[random];
    setAnswer(answer);
    return answer;
  }

  const handleSend = () => {
    if (text.trim() === "") {
      return;
    }
    const date = getFormattedDate();
    const answer = randomizeAnswer();
    const loggedData = {
      text,
      answer,
      date,
    };

    setData((prev) => [loggedData, ...prev]);

    setText("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* <Button title="Log" /> */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Mystic Mac Prediction</Text>
        </View>
        <View style={styles.box}>
          <TextInput
            style={styles.input}
            placeholder="Type something..."
            value={text}
            onChangeText={setText}
          />
          <Button title="Ask" onPress={handleSend} />
        </View>
        <Text style={styles.textDisplay}>{answer}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    padding: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 23,
    color: "black",
    fontWeight: "bold",
  },
  box: {
    flexDirection: "row",
  },
  textDisplay: {
    width: "65%",
    marginTop: 20,
    fontWeight: "bold",
    marginRight: 10,
  },
  container: {
    flex: 1,
    position: "relative",
  },
  text: {
    marginBottom: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
  input: {
    width: 190,
    padding: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    marginRight: 10,
  },

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    width: "100%",
  },
});
