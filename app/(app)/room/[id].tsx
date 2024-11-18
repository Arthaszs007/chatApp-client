import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import ChatRoom from "@/components/chat/chatRoom";

const Room = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <ChatRoom />
    </View>
  );
};

export default Room;

const styles = StyleSheet.create({});
