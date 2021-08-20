import React, { useState } from "react";
import { StyleSheet, Text, Button, TextInput, View } from "react-native";

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");
  const changeHandler = (val) => {
    setText(val);
  };
  return (
    <View>
      <TextInput
        placeholder="new todo..."
        onChangeText={(val) => changeHandler(val)}
        style={styles.input}
      />
      <Button
        onPress={() => submitHandler(text)}
        title="Add Todo"
        color="#171717"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#111",
  },
});
