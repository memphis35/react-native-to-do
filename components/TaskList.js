import { View, Text, FlatList, StyleSheet } from "react-native";

function TaskList({ tasks }) {
  const renderTask = (itemWrapper) => (
    <View>
      <Text>{itemWrapper.item}</Text>
    </View>
  );
  const emptyList = (
    <View style={styles.board_container}>
      <Text>Lucky you! There is nothing to do!</Text>
    </View>
  );
  const notEmptyList = (
    <View style={styles.board_container}>
      <FlatList data={tasks} renderItem={renderTask} />
    </View>
  );
  const rendered = tasks ? notEmptyList : emptyList;
  return rendered;
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
