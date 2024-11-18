import { FlatList, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { Image_MD } from "../comm/image";
import { MyMessage } from "../comm/message";
import { useNavigation } from "expo-router";
import InputBox from "../comm/inputBox";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f64",
    title: "Fourth Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d75",
    title: "Fifth Item",
  },
];

// right side icon with mesage
const Ichat = () => {
  return (
    <View style={styles.iChatContainer}>
      <View>
        <Image_MD
          source={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPJtydZePQWuOVtLT7i6w_b9UpG26ZVX6JsQ&s"
          }
        />
      </View>
      <View style={{ paddingLeft: 10 }}>
        <MyMessage />
      </View>
    </View>
  );
};

// left side icon with message
const Uchat = () => {
  return (
    <View style={styles.uChatContainer}>
      <View>
        <MyMessage />
      </View>
      <View style={{ paddingLeft: 10 }}>
        <Image_MD
          source={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPJtydZePQWuOVtLT7i6w_b9UpG26ZVX6JsQ&s"
          }
        />
      </View>
    </View>
  );
};

// list all message with a data list
const ChatRoom = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({});
  }, []);
  return (
    <View>
      <View style={{ marginHorizontal: 15, marginBottom: 50 }}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Ichat />}
          keyExtractor={(item) => item.id}
        />
      </View>

      <InputBox />
    </View>
  );
};

export default ChatRoom;

const styles = StyleSheet.create({
  iChatContainer: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 10,
    paddingRight: 120,
  },
  uChatContainer: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: 120,
    paddingRight: 10,
    marginVertical: 10,
    justifyContent: "flex-end",
  },
});
