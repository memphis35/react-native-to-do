import { useState } from "react";
import { View, Text, TextInput, Button, Modal, Image, StyleSheet } from "react-native";

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

  const onCancelTaskHandler = () => {
    setText("");
    setModalVisible(false);
  };

  return (
    <Modal visible={isModalVisible} animationType="slide">
      <View style={styles.modalWindowWrapper}>
        <Image source={require("../assets/images/calendar.png")} />
        <Text style={{ color: "#003049" }}>Describe a task here...</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={onInputTextHandler}
            value={text}
            placeholder="Type something..."
          />
          <View style={styles.buttons}>
            <Button title="Add a task" color="#c1121f" onPress={onAddTaskHandler} />
            <Button title="Cancel" color="#780000" onPress={onCancelTaskHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default TaskInput;

const styles = StyleSheet.create({
  modalWindowWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    rowGap: 10,
  },
  inputContainer: {
    width: "80%",
    gap: 20,
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
