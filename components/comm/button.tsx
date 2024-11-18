import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
// receive 1 func ,1 button displayName, and a color
const MyButton = ({
  onPress,
  title,
  color = "#007bff",
}: {
  onPress: () => void;
  title: string;
  color?: string;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonContainer, { backgroundColor: color }]}
      activeOpacity={0.7}
    >
      <Text style={{ color: "white" }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    height: 50,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
