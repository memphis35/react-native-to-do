import { View, Text, Pressable, StyleSheet } from "react-native";

function TaskItem({ text, onDeleteTask, taskId }) {
  return (
    <View style={styles.item}>
      <Pressable onPress={() => onDeleteTask(taskId)} style={styles.pressable}>
        <Text style={styles.darkText}>{text}</Text>
        <Text style={styles.darkText}>[TAP TO DELETE]</Text>
      </Pressable>
    </View>
  );
}

export default TaskItem;

const styles = StyleSheet.create({
  item: {
    width: "100%",
    backgroundColor: "#f4a261",
    borderRadius: 8,
  },
  darkText: {
    color: "#003049",
  },
  pressable: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
});
