import { View, Text, Button, StyleSheet } from "react-native";

function TaskItem({ text }) {
  return (
    <View style={styles.item}>
      <Text>{text}</Text>
      <Button title="X" color="#16404D" />
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
