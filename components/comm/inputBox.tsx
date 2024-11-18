import {
  Keyboard,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import { AttachmentIcon, EmojiIcon, MicIcon, SendIcon } from "./icon";

const InputBox = () => {
  const [focus, setFocus] = useState(false);
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          backgroundColor: "white",
          borderRadius: 30,
          alignItems: "flex-end",
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "flex-end",
            marginLeft: 10,
            marginBottom: 10,
          }}
        >
          <View>
            <EmojiIcon />
          </View>
          <View style={{ flex: 1, marginLeft: 5 }}>
            <TouchableWithoutFeedback
              onPress={Keyboard.dismiss}
              accessible={false}
            >
              <TextInput
                style={styles.input}
                placeholder="Message"
                placeholderTextColor={"gray"}
                multiline={true}
                scrollEnabled={true}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
              />
            </TouchableWithoutFeedback>
          </View>
          <View
            style={{
              marginRight: 10,
              marginLeft: 8,
            }}
          >
            <AttachmentIcon />
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#667aea",
          borderRadius: 40,
          marginHorizontal: 8,
          height: 45,
          width: 45,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 5,
        }}
      >
        {focus ? <SendIcon /> : <MicIcon />}
      </View>
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 5,
    left: 10,
    right: 10,
    alignItems: "flex-end",
  },
  input: {
    flex: 1,
    backgroundColor: "white",
    fontSize: 18,
    minHeight: 40,
    maxHeight: 150,
    textAlignVertical: "bottom",
    paddingHorizontal: 8,
  },
});
