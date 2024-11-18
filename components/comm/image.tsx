import { Image, StyleSheet } from "react-native";
import React from "react";

// middle size Image componengt
export const Image_MD = ({ source }: { source: string }) => {
  return <Image source={{ uri: source }} style={styles.imageMD} />;
};

export const Image_LG = ({ source }: { source: string }) => {
  return <Image source={{ uri: source }} style={styles.imageLG} />;
};

const styles = StyleSheet.create({
  imageMD: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  imageLG: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});
