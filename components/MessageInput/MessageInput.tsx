import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import {
  SimpleLineIcons,
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const MessageInput = () => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    console.warn("sending message");

    setMessage("");
  };
  const onPlusClicked = () => {
    console.warn("on plus clickedd");
  };

  const onPress = () => {
    if (message) return sendMessage();
    onPlusClicked();
  };

  return (
    <KeyboardAvoidingView
      style={styles.root}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
    >
      <View style={styles.inputContainer}>
        <SimpleLineIcons
          style={styles.icon}
          name="emotsmile"
          size={24}
          color="#595959"
        />
        <TextInput
          style={styles.inputText}
          onChangeText={setMessage}
          value={message}
          placeholder="Spoke message..."
        />
        <Ionicons
          style={styles.icon}
          name="camera-outline"
          size={26}
          color="#595959"
        />
        <MaterialCommunityIcons
          style={styles.icon}
          name="microphone-outline"
          size={26}
          color="#595959"
        />
      </View>
      <Pressable onPress={onPress} style={styles.buttonContainer}>
        {message ? (
          <Ionicons name="send" size={24} color="white" />
        ) : (
          <AntDesign name="plus" size={24} color="white" />
        )}
      </Pressable>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    marginBottom: 5,
  },
  inputContainer: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    marginRight: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#dedede",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    marginHorizontal: 10,
  },
  inputText: {
    flex: 1,
    marginHorizontal: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
  buttonContainer: {
    width: 50,
    height: 50,
    backgroundColor: "#3777f0",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5,
  },
  buttonText: {
    fontSize: 30,
    color: "white",
  },
});

export default MessageInput;
