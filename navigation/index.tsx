import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import {
  ColorSchemeName,
  Text,
  View,
  Image,
  StatusBar,
  useWindowDimensions,
  Platform,
} from "react-native";

import { RootStackParamList } from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import ChatRoomScreen from "../screens/ChatRoomScreen";
import HomeScreen from "../screens/HomeScreen";
import { Ionicons, Feather } from "@expo/vector-icons";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ header: HomeHeader }}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        options={{
          header: ChatRoomHeader,
          headerBackTitleVisible: false,
          headerBackVisible: true,
        }}
      />
      <Stack.Screen
        name="NotFound"
        component={ChatRoomScreen}
        options={{ title: "Oops !" }}
      />
    </Stack.Navigator>
  );
}

const ChatRoomHeader = (props) => {
  console.log("props:", props.options.title);
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: Platform.OS === "ios" ? width - 25 : width,
        alignItems: "center",
        padding: 10,
        marginLeft: "auto",
        marginTop: StatusBar.currentHeight,
      }}
    >
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png",
        }}
        style={{
          width: 30,
          height: 30,
          borderRadius: 30,
          marginHorizontal: 15,
        }}
      />
      <Text
        style={{
          flex: 1,
          textAlign: "left",
          marginLeft: 0,
          fontSize: 16,
          fontWeight: "bold",
        }}
      >
        {props.options.title}
      </Text>
      <View style={{ flexDirection: "row" }}>
        <Feather
          name="camera"
          size={24}
          color="black"
          style={{ marginHorizontal: 7 }}
        />
        <Feather
          name="edit-2"
          size={24}
          color="black"
          style={{ marginHorizontal: 7 }}
        />
      </View>
    </View>
  );
};

const HomeHeader = (props) => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: width,
        alignItems: "center",
        padding: 10,
        marginTop: StatusBar.currentHeight,
      }}
    >
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png",
        }}
        style={{
          width: 30,
          height: 30,
          borderRadius: 30,
          marginHorizontal: 15,
        }}
      />
      <Text
        style={{
          flex: 1,
          textAlign: "center",
          marginLeft: 50,
          fontSize: 17,
          fontWeight: "bold",
        }}
      >
        Spoke
      </Text>
      <View style={{ flexDirection: "row" }}>
        <Feather
          name="camera"
          size={24}
          color="black"
          style={{ marginHorizontal: 15 }}
        />
        <Feather
          name="edit-2"
          size={24}
          color="black"
          style={{ marginHorizontal: 15 }}
        />
      </View>
    </View>
  );
};
