import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import AppHeader from "./components/AppHeader";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

export default function App() {
  const [tasks, setTasks] = useState([
    "Mop the floor",
    "Clean the bath",
    "Wash the dishes",
  ]);

  const addTask = (taskName) =>
    setTasks((currentTasks) => [...currentTasks, taskName]);

  return (
    <View style={{ flex: 1 }}>
      <AppHeader />
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} />
    </View>
  );
}

const styles = StyleSheet.create({});
