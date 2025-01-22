import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import AppHeader from "./components/AppHeader";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

export default function App() {
  const [tasks, setTasks] = useState(["Do an errand"]);

  return (
    <View style={{ flex: 1 }}>
      <AppHeader />
      <TaskInput />
      <TaskList tasks={tasks} />
    </View>
  );
}

const styles = StyleSheet.create({});
