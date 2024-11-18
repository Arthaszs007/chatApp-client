import { TouchableHighlight, ViewStyle } from "react-native";
import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

// receive a func and inherit the childrennode,rceive a color string ,color has a default value as no color
export const SingleTouchable = ({
  onPress,
  Color = "rgba(0, 0, 0, 0)",
  children,
  style,
}: {
  onPress: () => void;
  Color?: string;
  children: ReactNode;
  style?: ViewStyle;
}) => {
  // limit the touch 1 time press
  const [disable, setDisable] = useState(false);
  // get timer component
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  // check the disable state to ban the component and jump to new screens
  const handlePress = useCallback(() => {
    if (!disable) {
      setDisable(true);
      onPress();
      // Re-enable the button after 1 second
      timerRef.current = setTimeout(() => {
        setDisable(false);
      }, 1000);
    }
  }, [disable]);
  // clean the timer after unmount this component
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <TouchableHighlight
      underlayColor={Color}
      activeOpacity={0.5}
      onPress={handlePress}
      disabled={disable}
      style={style}
    >
      {children}
    </TouchableHighlight>
  );
};
