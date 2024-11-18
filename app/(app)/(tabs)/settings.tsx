import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useSession } from "@/context/authContext";

const Settings = () => {
  // test to log out
  const { signOut } = useSession();
  useEffect(() => {
    signOut();
  }, []);
  return (
    <View>
      <Text>S</Text>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
