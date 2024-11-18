import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchUser from "@/components/search/searchUser";

const Search = () => {
  return (
    <View style={styles.searchContainer}>
      <SearchUser />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    marginTop: 35,
  },
});
