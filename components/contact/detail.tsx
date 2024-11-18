import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image_LG } from "../comm/image";

const Details = () => {
  return (
    <View>
      <View>
        <Image_LG
          source={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_NKcfVcI-1uku8QPtByMCSssV8A3gz_VbJA&s"
          }
        />
        <Text>Username: 2000000</Text>
      </View>
      <View>
        <Text>Message/ Add friend</Text>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
