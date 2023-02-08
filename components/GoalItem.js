import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import React from "react";

export default function GoalItem({ goal, onDelete, onGoalPress }) {
  return (
    <View>
      <Pressable
        style={({ pressed }) => {
          return [pressed && styles.pressedStyle, styles.textContainer];
          // return pressed ? styles.pressedStyle : null;
          // if (pressed)
          // {
          //   return styles.pressedStyle
          // }
        }}
        android_ripple={{ color: "red" }}
        onPress={() => onGoalPress(goal.id)}
      >
        <Text style={styles.text}>{goal.text}</Text>
        <Button
          title="X"
          onPress={() => {
            onDelete(goal.id);
          }}
          color="black"
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: "purple",

    padding: 15,
  },
  textContainer: {
    backgroundColor: "#999",
    borderRadius: 5,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  pressedStyle: {
    backgroundColor: "#e9e",
    opacity: 0.5,
  },
});
