import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import MyButton from "../comm/button";
import MyTextLink from "../comm/link";
import { inputMaxLen } from "@/config/default";
import { userRegister } from "@/api/auth";
import { handleInputChange } from "@/utils/inputEvent";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeat, setRepeat] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    const res = await userRegister(username, password, repeat);
    if (res.error) {
      setError(res.error);
    } else {
      console.log(res);
    }
  };

  return (
    <View style={styles.registerContainer}>
      <Text style={{ fontSize: 30 }}>Hello!</Text>
      <Text style={{ fontSize: 16 }}>Register an account</Text>
      <TextInput
        style={[styles.inputContainer, { marginTop: 40 }]}
        placeholder="username"
        maxLength={inputMaxLen}
        value={username}
        onChange={handleInputChange(setUsername)}
      />
      <TextInput
        style={styles.inputContainer}
        placeholder="password"
        maxLength={inputMaxLen}
        value={password}
        onChange={handleInputChange(setPassword)}
      />
      <TextInput
        style={styles.inputContainer}
        placeholder="repeat password"
        maxLength={inputMaxLen}
        value={repeat}
        onChange={handleInputChange(setRepeat)}
      />
      <Text style={{ color: "red" }}>{error}</Text>
      <MyButton onPress={handleSubmit} title={"Continue"} />
      <Text>
        Already have an account?
        <MyTextLink
          href={"/login"}
          title={" login now. "}
          fontStyle={{ color: "blue", fontSize: 16 }}
        />
      </Text>
    </View>
  );
};

export default RegisterForm;

const styles = StyleSheet.create({
  registerContainer: {
    flexDirection: "column",
    gap: 25,
    width: 300,
    marginTop: 20,
    alignItems: "center",
  },
  inputContainer: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    padding: 5,
    fontSize: 16,
    width: "100%",
  },
});
