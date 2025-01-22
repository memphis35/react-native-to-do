import { useState } from "react";
import { View, Button } from "react-native";
import AppHeader from "./components/AppHeader";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

export default function App() {
  const [tasks, setTasks] = useState(["Mop the floor", "Clean the bath", "Wash the dishes"]);
  const [isModalVisible, setModalVisible] = useState(false);

  const addNewTaskHandler = () => setModalVisible(true);

  const addTask = (taskName) => setTasks((currentTasks) => [...currentTasks, taskName]);

  const deleteTask = (id) => {
    const updated = tasks.filter((el, index) => index !== id);
    setTasks(updated);
  };

  return (
    <View style={{ flex: 1 }}>
      <AppHeader />
      <Button title="Add a new task" onPress={addNewTaskHandler} />
      <TaskInput addTask={addTask} isModalVisible={isModalVisible} setModalVisible={setModalVisible} />
      <TaskList tasks={tasks} onDeleteTask={deleteTask} />
    </View>
  );
}
