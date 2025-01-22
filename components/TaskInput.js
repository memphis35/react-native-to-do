import { useState } from "react";
import { View, TextInput, Button, Modal, StyleSheet } from "react-native";

function TaskInput({ addTask, isModalVisible, setModalVisible }) {
  const [text, setText] = useState("");

  const onInputTextHandler = (text) => {
    setText(text.trimStart());
  };

  const onAddTaskHandler = () => {
    const trimmedName = text.trimEnd();
    if (trimmedName.length > 5) {
      addTask(trimmedName);
      setText("");
      setModalVisible(false);
    } else {
      console.error("Trimmed name is less than 5: ", trimmedName);
    }
  };

  return (
    <Modal visible={isModalVisible} style={styles.modal}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onInputTextHandler}
          value={text}
        />
        <Button title="Add a task" color="#16404D" onPress={onAddTaskHandler} />
      </View>
    </Modal>
  );
}

export default TaskInput;

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "100%",
    height: "100%",
    paddingVertical: 8,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#FBF5DD",
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    flex: 1,
  },
});
