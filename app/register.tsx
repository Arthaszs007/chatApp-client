import { Image, StyleSheet, View } from "react-native";
import React from "react";
import RegisterForm from "@/components/auth/registerForm";

const Register = () => {
  return (
    <View style={styles.pageContainer}>
      <Image
        style={{ width: "100%", height: 240 }}
        source={{
          uri: "https://storage.googleapis.com/static-seinsights-tw-prod/images/047301e7-880f-4797-8aee-3f2e7639cbd9.jpg",
        }}
      />
      <View
        style={{
          backgroundColor: "white",
          width: "100%",
          height: "100%",
          borderRadius: 20,
          alignItems: "center",
          marginTop: -20,
        }}
      >
        <RegisterForm />
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    alignItems: "center",
  },
});
