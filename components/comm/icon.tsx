import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Entypo from "@expo/vector-icons/Entypo";
import Octicons from "@expo/vector-icons/Octicons";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";

// four Icons for tabs
export const ChatIcon = () => {
  return <AntDesign name="message1" size={26} color="black" />;
};

export const ContactIcon = () => {
  return <FontAwesome6 name="contact-card" size={26} color="black" />;
};

export const MomentIcon = () => {
  return <Entypo name="qq" size={26} color="black" />;
};

export const SettingsIcon = () => {
  return <Octicons name="gear" size={26} color="black" />;
};

export const EmojiIcon = () => {
  return <Entypo name="emoji-happy" size={26} color="black" />;
};

export const MicIcon = () => {
  return <Feather name="mic" size={26} color="black" />;
};

export const AttachmentIcon = () => {
  return <Entypo name="attachment" size={26} color="black" />;
};

export const SendIcon = () => {
  return <Ionicons name="send-outline" size={26} color="black" />;
};

export const SearchIcon = () => {
  return <Feather name="search" size={24} color="black" />;
};

export const ArrowLeft = () => {
  return <AntDesign name="arrowleft" size={24} color="black" />;
};
