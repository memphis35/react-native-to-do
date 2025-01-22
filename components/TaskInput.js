import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

function TaskInput({ addTask }) {
  const [taskName, setTaskName] = useState("");

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Type a task here..."
        style={styles.inputText}
        color="#16404D"
        onChangeText={(text) => {
          setTaskName(text.trimStart());
        }}
        value={taskName}
      />
      <Button
        title="Add a task"
        color="#16404D"
        onPress={() => {
          const trimmedName = taskName.trimEnd();
          if (trimmedName.length > 5) {
            addTask(trimmedName);
            setTaskName("");
          } else {
            console.error("Trimmed name is less than 5: ", trimmedName);
          }
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
    backgroundColor: "#FBF5DD",
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: "#16404D",
  },
  inputText: {
    backgroundColor: "#fff",
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    flex: 1,
  },
});
