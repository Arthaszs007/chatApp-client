import { StyleSheet, Text, View } from "react-native";
import React from "react";

// message componengt with a standard form
export const MyMessage = () => {
  return (
    <View>
      <Text style={styles.myContainer}>
        创建三角形：三角形是通过设置 borderLeftWidth、borderRightWidth 和
        borderBottomWidth
        属性来创建的。边框颜色设置为透明，底部边框设置为你想要的颜色。
        绝对定位：使用 position: 'absolute'
        将三角形放置在文本的左上角，具体位置可以通过 top 和 left 属性来调整。
        相对定位的父容器：确保 titleContainer 的 position 设置为
        relative1这样三角形可以相对于这个容器进行定位。
      </Text>
      <Text style={styles.timestamp}>2024.1.12</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  myContainer: {
    flexWrap: "wrap",
    backgroundColor: "gray",
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    lineHeight: 26,
    textAlign: "left",
  },
  timestamp: {
    textAlign: "right",
    color: "gray",
  },
});
