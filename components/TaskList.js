import { View, Text, FlatList, StyleSheet } from "react-native";
import TaskItem from "./TaskItem";

function TaskList({ tasks, onDeleteTask }) {
  const renderTask = (itemWrapper) => (
    <TaskItem text={itemWrapper.item} onDeleteTask={onDeleteTask} taskId={itemWrapper.index} />
  );
  const emptyList = (
    <View style={styles.board_container}>
      <Text>Lucky you! There is nothing to do!</Text>
    </View>
  );
  const notEmptyList = (
    <View style={styles.board_container}>
      <Text>Today you have the following errands: </Text>
      <FlatList
        data={tasks}
        renderItem={renderTask}
        contentContainerStyle={{ gap: 10 }}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
  const rendered = tasks.length > 0 ? notEmptyList : emptyList;
  return rendered;
}

export default TaskList;

const styles = StyleSheet.create({
  board_container: {
    flex: 3,
    rowGap: 16,
    paddingVertical: 8,
    paddingHorizontal: 10,
    alignItems: "center",
  },
});
