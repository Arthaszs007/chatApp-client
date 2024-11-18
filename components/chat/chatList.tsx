import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

import { Image_MD } from "../comm/image";
import { SingleTouchable } from "../comm/touchable";
import { router } from "expo-router";

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
];
// single item to show
const Item = ({ title }: { title: string }) => {
  return (
    <View>
      <SingleTouchable
        onPress={() => {
          router.push(`/room/${title}`);
        }}
        Color={"#B5AEAE"}
      >
        <View style={styles.itemContainer}>
          <View>
            <Image_MD
              source={
                "https://dogsinc.org/wp-content/uploads/2021/08/extraordinary-dog.png"
              }
            />
          </View>
          <View style={styles.title}>
            <View>
              <Text style={{ fontSize: 16 }}>{title}</Text>
            </View>
            <View>
              <Text
                style={{
                  color: "gray",
                }}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                22222456789012222222222222222222222222222222223456789
              </Text>
            </View>
          </View>
        </View>
      </SingleTouchable>
    </View>
  );
};

// list all item with flatlist, need a data list
const ChatList = () => {
  return (
    <View style={{ marginBottom: 50 }}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ChatList;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 8,
  },
  title: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    marginLeft: 15,
  },
});
