import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import Details from "@/components/contact/detail";

const Detail = () => {
  // const { user } = useLocalSearchParams<{ user: string }>();
  // const parseUser = user ? JSON.parse(decodeURIComponent(user)) : null;
  return (
    <View>
      <Details />
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({});
