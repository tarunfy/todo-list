import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Learn React Native", key: "1" },
    { text: "Learn NodeJs", key: "2" },
    { text: "Learn Flutter", key: "3" },
  ]);
  const pressHandler = (key) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.key !== key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prev) => {
        return [{ text, key: Math.random().toString() }, ...prev];
      });
    } else {
      Alert.alert("Oops!", "Todos must be over 3 chars long", [
        { text: "Understood" },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDEDED",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
