import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowLeft } from "../comm/icon";
import { Image_MD } from "../comm/image";
import { SingleTouchable } from "../comm/touchable";
import { router } from "expo-router";
import { default_img_url } from "@/config/default";
import { handleInputChange } from "@/utils/inputEvent";
import { searchUser } from "@/api/user";

// based on the input to fetch api and pass the result to list all items
const SearchUser = () => {
  const [result, setResult] = useState<T_User[]>([]); // handle the fetch result
  const [input, setInput] = useState(""); // handle the user input
  const [isLoading, setIsLoading] = useState(false); // the switch of loading status

  // handle the input value
  const inquery = async () => {
    if (!input) return;
    const data = await searchUser(input);
    setResult(data);
    setIsLoading(false);
  };
  useEffect(() => {
    if (!input) return;
    setIsLoading(true);
  }, [input]);
  // delay to fetch api
  useEffect(() => {
    const timer = setTimeout(() => {
      inquery();
    }, 1000);

    return () => clearTimeout(timer);
  }, [input]);

  return (
    <View style={{ flexDirection: "column" }}>
      <SearchBar input={input} setInput={setInput} />
      <View style={{ gap: 10 }}>
        <Text style={{ marginHorizontal: 15 }}>Filter by</Text>
        <View style={{ flex: 1, alignItems: "center" }}>
          <View
            style={{
              width: "95%",
              height: 1,
              backgroundColor: "grey",
            }}
          />
        </View>
        <View style={{ marginHorizontal: 15 }}>
          <SearchResultBoard
            result={result}
            input={input}
            isLoading={isLoading}
          />
        </View>
      </View>
    </View>
  );
};

export default SearchUser;

// monitor the input
const SearchBar = ({
  setInput,
  input,
}: {
  setInput: React.Dispatch<React.SetStateAction<string>>;
  input: string;
}) => {
  return (
    <View style={styles.searchBar}>
      <SingleTouchable
        onPress={() => {
          router.back();
        }}
      >
        <ArrowLeft />
      </SingleTouchable>

      <TextInput
        style={styles.inputContainer}
        placeholder="Search"
        value={input}
        onChange={handleInputChange(setInput)}
        autoFocus={true}
      />
    </View>
  );
};

// list all item info
const SearchResultBoard = ({
  result,
  input,
  isLoading,
}: {
  result: T_User[];
  input: string;
  isLoading: boolean;
}) => {
  return (
    <View style={styles.searchBoard}>
      <FlatList
        data={result}
        renderItem={({ item }) => <SearchResultItem item={item} />}
        keyExtractor={(item, index) => item.displayName + index}
        ListEmptyComponent={() => (
          <View>
            {input === "" ? (
              <Text>Input username to search!</Text>
            ) : isLoading ? (
              <Text>Please stand by!</Text>
            ) : (
              <Text>No result</Text>
            )}
          </View>
        )}
      />
    </View>
  );
};

// display the item info
const SearchResultItem = ({ item }: { item: T_User }) => {
  return (
    <View style={styles.searchItem}>
      <View>
        <Image_MD source={item.img_url || default_img_url} />
      </View>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          flex: 1,
        }}
      >
        <Text
          style={{ fontSize: 18, marginLeft: 10 }}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {item.displayName}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  searchItem: {
    flexDirection: "row",
    padding: 8,
    alignItems: "center",
  },
  searchBoard: {
    flexDirection: "column",
  },
  inputContainer: {
    height: 40,
    marginLeft: 20,
    paddingBottom: 15,
    padding: 5,
    fontSize: 18,
    width: "100%",
  },
});
