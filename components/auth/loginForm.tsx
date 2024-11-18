import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import MyButton from "../comm/button";
import MyTextLink from "../comm/link";
import { inputMaxLen } from "@/config/default";
import { handleInputChange } from "@/utils/inputEvent";
import { userLogin } from "@/api/auth";
import { useSession } from "@/context/authContext";
import { router } from "expo-router";

const LoginForm = () => {
  // storage the attribute
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // use to login
  const { signIn } = useSession();
  // submit func
  const handleSubmit = async () => {
    const res = await userLogin(username, password);
    if (res.error) {
      setError(res.error);
    } else {
      signIn(res.username, res.token);
      router.replace("/");
    }
  };

  return (
    <View style={styles.loginContainer}>
      <Text style={{ fontSize: 30 }}>Hello!</Text>
      <Text style={{ fontSize: 16 }}>Sign in to your account</Text>
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
      <Text style={{ color: "red" }}>{error}</Text>
      <MyButton onPress={handleSubmit} title={"Continue"} />
      <Text>
        Not a member?
        <MyTextLink
          href={"/register"}
          title={"  join now. "}
          fontStyle={{ color: "blue", fontSize: 16 }}
        />
      </Text>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  loginContainer: {
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
