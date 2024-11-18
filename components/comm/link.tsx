import { StyleSheet, Text, TextStyle } from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Href, router } from "expo-router";

const MyTextLink = ({
  title,
  href,
  push = true,
  fontStyle,
}: {
  title: string;
  href: Href<string>;
  push?: boolean;
  fontStyle?: TextStyle;
}) => {
  //  limit the touch 1 time press
  const [disable, setDisable] = useState(false);
  // get timer component
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // start the timer and push after click
  const handlePress = useCallback(() => {
    if (!disable) {
      setDisable(true);
      if (push) router.push(href);
      else router.replace(href);
      timerRef.current = setTimeout(() => {
        setDisable(false);
      }, 1000);
    }
  }, [disable]);

  // clean the timer after unmount the component
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);
  return (
    <Text style={fontStyle} onPress={handlePress}>
      {title}
    </Text>
  );
};

export default MyTextLink;

const styles = StyleSheet.create({});
