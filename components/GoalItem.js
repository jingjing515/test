import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function GoalItem({ goal }) {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>{goal.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 80,
    color: "purple",

    padding: 15,
  },
  textContainer: {
    backgroundColor: "#999",
    borderRadius: 5,
    marginBottom: 15,
  },
});
