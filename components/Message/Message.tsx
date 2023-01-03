import React from "react";

import { View, Text, StyleSheet } from "react-native";

const Message = ({ message }) => {
  const isMe = message.user.id === "u1";
  console.log(message);
  return (
    <View
      style={[
        styles.container,
        isMe ? styles.containerRight : styles.containerLeft,
      ]}
    >
      <Text style={{ color: isMe ? "black" : "white" }}>{message.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    maxWidth: "75%",
  },
  containerLeft: {
    backgroundColor: "#3777f0",
    marginLeft: 10,
    marginRight: "auto",
  },
  containerRight: {
    backgroundColor: "lightgrey",
    marginLeft: "auto",
    marginRight: 10,
  },
});

export default Message;
