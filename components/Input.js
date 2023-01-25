import { View, TextInput, Button } from "react-native";
import { useState } from "react";

export default function Input({ sendChangedText }) {
  const [text, setText] = useState("default value");
  function changeText(changedText) {
    setText(changedText);
  }
  // function buttonPressed() {
  //   sendChangedText(text);
  // }
  return (
    <View>
      <TextInput
        value={text}
        onChangeText={changeText}
        style={{ backgroundColor: "red" }}
      />
      <Button
        title="Confirm"
        onPress={() => {
          sendChangedText(text);
          setText("");
        }}
      />
    </View>
  );
}
