import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

function TaskInput({ addTask }) {
  const [taskName, setTaskName] = useState("");

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Type a task here..."
        style={styles.inputText}
        onChangeText={(text) => setTaskName(text)}
        value={taskName}
      />
      <Button
        title="Add a task"
        onPress={() => {
          addTask(taskName.trim());
          setTaskName("");
        }}
      />
    </View>
  );
}

export default TaskInput;

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    paddingVertical: 8,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "skyblue",
    borderTopWidth: 2,
    borderBottomWidth: 2,
  },
  inputText: {
    backgroundColor: "white",
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    flex: 1,
  },
});
