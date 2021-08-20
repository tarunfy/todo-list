import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function TodoItem({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#444444",
    borderStyle: "solid",
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: "#DA0037",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
});
