import { SectionList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Image_MD } from "../comm/image";
import { getFriendList } from "@/api/user";
import { useSession } from "@/context/authContext";
import { default_img_url } from "@/config/default";
import { SingleTouchable } from "../comm/touchable";
import { router } from "expo-router";

const ContactItem = ({ friend }: { friend: T_FRIEND }) => {
  return (
    <SingleTouchable
      onPress={() => {
        router.push(`/detail/222`);
      }}
    >
      <View style={styles.itemContainer}>
        <View>
          <Image_MD source={friend.friend_img_url || default_img_url} />
        </View>
        <View style={{ flex: 1 }}>
          <Text
            style={{ fontSize: 18, marginLeft: 10 }}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {friend.friend_displayName}
          </Text>
        </View>
      </View>
    </SingleTouchable>
  );
};

const ContactList = () => {
  const [data, setData] = useState<T_FRIEND[]>([]);
  const [groupFriends, setGroupFriend] = useState<
    {
      title: string;
      data: T_FRIEND[];
    }[]
  >([]);
  const { session } = useSession();

  // request the data
  const getData = async () => {
    if (!session) return;
    const res = await getFriendList(session);
    setData(res);
  };

  //format the friend data, minitor the data
  useEffect(() => {
    if (data.length < 1) return;
    const acc = groupAndSortFriends(data);
    // console.log(JSON.stringify(acc));
    setGroupFriend(acc);
  }, [data]);

  const groupAndSortFriends = (friends: T_FRIEND[]) => {
    // const groupFriends: { title: string; data: T_FRIEND[] }[] = [];
    const groupFriends = friends.reduce<{ [key: string]: T_FRIEND[] }>(
      (acc, item) => {
        const firstLetter = item.friend_displayName[0].toUpperCase();

        if (!acc[firstLetter]) {
          acc[firstLetter] = [];
        }
        acc[firstLetter].push(item);
        return acc;
      },
      {}
    );

    // based on the array of data, resort by title in order by first letter,start from A
    const section = Object.keys(groupFriends)
      .sort()
      .map((item) => ({ title: item, data: groupFriends[item] }));

    return section;
  };

  //initial data
  useEffect(() => {
    getData();
  }, []);
  return (
    <View>
      <SectionList
        sections={groupFriends}
        renderItem={({ item }) => <ContactItem friend={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.title}>{title}</Text>
        )}
        keyExtractor={(item, index) => item.friend_displayName + index}
      />
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 8,
    alignItems: "center",
  },
  title: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    fontSize: 14,
    backgroundColor: "#586cb2",
    opacity: 0.4,
  },
});
