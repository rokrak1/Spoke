import React from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { View, StyleSheet, FlatList, SafeAreaView } from "react-native";
import Message from "../components/Message";
import dummyData from "../assets/dummy-data/Chats";
import MessageInput from "../components/MessageInput";

export default function ChatRoomScreen() {
  const route = useRoute();
  const navigation = useNavigation();

  navigation.setOptions({ title: "Elon muskl" });
  console.warn(route.params?.id);
  return (
    <SafeAreaView style={styles.page}>
      <FlatList
        data={dummyData.messages}
        renderItem={({ item }) => <Message message={item} />}
        inverted
      />
      <MessageInput />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flex: 1,
  },
});
