import { View, Text, Pressable, Image, StyleSheet } from "react-native";

function TaskItem({ text, onDeleteTask, taskId }) {
  return (
    <View style={styles.item}>
      <Text style={styles.darkText}>{text}</Text>
      <Pressable onPress={() => onDeleteTask(taskId)}>
        <Image source={require("../assets/images/trash2.png")} style={{ width: 24, height: 24 }} />
      </Pressable>
    </View>
  );
}

export default TaskItem;

const styles = StyleSheet.create({
  item: {
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: "#f4a261",
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  darkText: {
    color: "#003049",
  },
});
