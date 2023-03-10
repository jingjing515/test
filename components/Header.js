import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Header({ appName }) {
  // console.log(appName);
  return (
    <View>
      <Text style={styles.header}>Welcome to {appName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    color: "purple",
    borderWidth: 2,
    borderColor: "rebeccapurple",
    fontSize: 24,
    padding: 5,
  },
});
