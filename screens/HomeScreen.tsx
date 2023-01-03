import { RootTabScreenProps } from "../types";
import { StyleSheet, View, FlatList } from "react-native";
import ChatRoomItem from "../components/ChatRoomItem";

import dummyData from "../assets/dummy-data/ChatRooms";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <SafeAreaView style={styles.page}>
      <FlatList
        data={dummyData}
        renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {},
});
