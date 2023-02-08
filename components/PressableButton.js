import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

export default function PressableButton({
  buttonPressed,
  customizedStyle,
  pressedStyle,
}) {
  return (
    <Pressable
      style={({ pressed }) => {
        return [
          styles.pressableDefault,
          customizedStyle,
          pressed && pressedStyle,
        ];
      }}
      onPress={buttonPressed}
    >
      <Text>X</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressableDefault: { backgroundColor: "beige" },
});
