import { View, Text, Pressable, StyleSheet } from "react-native";

function TaskItem({ text, onDeleteTask, taskId }) {
  return (
    <View style={styles.item}>
      <Pressable onPress={() => onDeleteTask(taskId)} style={styles.pressable}>
        <Text>{text}</Text>
        <Text>[DELETE]</Text>
      </Pressable>
    </View>
  );
}

export default TaskItem;

const styles = StyleSheet.create({
  item: {
    width: "100%",
    backgroundColor: "#DDA853",
    borderRadius: 8,
  },
  pressable: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
});
