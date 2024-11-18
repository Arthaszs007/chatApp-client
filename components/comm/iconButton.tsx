import { StyleSheet, View, ViewStyle } from "react-native";
import React, { ReactNode } from "react";
import { SingleTouchable } from "./touchable";

const IconButtion = ({
  onPress,
  icon,
  style,
}: {
  onPress: () => void;
  icon: ReactNode;
  style?: ViewStyle;
}) => {
  return (
    <SingleTouchable onPress={onPress} style={style}>
      <View>{icon}</View>
    </SingleTouchable>
  );
};

export default IconButtion;

const styles = StyleSheet.create({
  iconContainer: {},
});
