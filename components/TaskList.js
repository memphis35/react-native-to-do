import { View, Text, StyleSheet } from "react-native";

function TaskList() {
  return (
    <View style={styles.board_container}>
      <Text>Lucky you! There is nothing to do!</Text>
    </View>
  );
}

export default TaskList;

const styles = StyleSheet.create({
  board_container: {
    flex: 3,
    backgroundColor: "white",
    paddingVertical: 8,
    alignItems: "center",
  },
});
