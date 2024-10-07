import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";

export default function Ball() {
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

  const [text, setText] = useState();
  const [answer, setAnswer] = useState("");

  function randomizeAnswer() {
    const random = Math.floor(Math.random() * magic8BallAnswers.length);
    const answer = magic8BallAnswers[random];
    setAnswer(answer);
  }

  const handleSend = () => {
    setText("");
    randomizeAnswer();
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Magic 8 Ball Prediction</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Type something..."
          value={text}
          onChangeText={setText}
        />
        <Text style={styles.textDisplay}>{answer}</Text>
        <Button title="Send" onPress={handleSend} />
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
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
  textDisplay: {
    width: "80%",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    position: "relative",
  },
  text: {
    marginBottom: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
  input: {
    width: "80%",
    padding: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
  },
  customText: {
    fontSize: 20, // Font size
    color: "black",
    fontWeight: "bold", // Make the text bold
    padding: 10, // Add padding around the text
    borderRadius: 8, // Rounded corners
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
