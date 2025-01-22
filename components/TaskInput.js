import { View, TextInput, Button, StyleSheet } from "react-native";

function TaskInput() {
  return (
    <View style={styles.inputContainer}>
      <TextInput placeholder="Type a task here..." style={styles.inputText} />
      <Button title="Add a task" />
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
