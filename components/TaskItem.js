import { View, Text, Pressable, StyleSheet } from "react-native";

function TaskItem({ text, onDeleteTask, taskId }) {
  return (
    <View style={styles.item}>
      <Text>{text}</Text>
      <Pressable onPress={() => onDeleteTask(taskId)}>
        <Text>[DELETE]</Text>
      </Pressable>
    </View>
  );
}

export default TaskItem;

const styles = StyleSheet.create({
  item: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#DDA853",
    borderRadius: 8,
  },
});
