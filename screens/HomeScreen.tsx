import { RootTabScreenProps } from "../types";
import { StyleSheet, Text, FlatList, Pressable } from "react-native";
import ChatRoomItem from "../components/ChatRoomItem";
import { Auth } from "aws-amplify";

import dummyData from "../assets/dummy-data/ChatRooms";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const onPress = () => {
    Auth.signOut();
  };
  return (
    <SafeAreaView style={styles.page}>
      <FlatList
        data={dummyData}
        renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
      />
      <Pressable onPress={onPress} style={styles.logout}>
        <Text>Logout</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {},
  logout: {
    backgroundColor: "lightblue",
    padding: 10,
    width: 70,
    alignSelf: "flex-end",
    borderRadius: 25,
  },
});
