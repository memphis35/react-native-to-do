import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.title_container}>
        <Text style={styles.title}>Simple TO-DO List</Text>
        <Text style={styles.description}>
          Sometimes it is really important to organize your days and tasks to
          keep things simple. This lightweight app is your little helper to do
          that. Rack and track!
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Type a task here..." style={styles.inputText} />
        <Button title="Add a task" />
      </View>
      <View style={styles.board_container}>
        <Text>Lucky you! There is nothing to do!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title_container: {
    paddingTop: 50,
    paddingBottom: 8,
    backgroundColor: "powderblue",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
    marginBottom: 20,
  },
  description: {
    paddingLeft: 10,
    textAlign: "justify",
  },
  inputContainer: {
    width: "100%",
    paddingVertical: 8,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "skyblue",
    borderTopWidth: 2,
    borderBottomWidth: 2,
  },
  inputText: {
    backgroundColor: "white",
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    flex: 1,
  },
  board_container: {
    flex: 3,
    backgroundColor: "white",
    paddingVertical: 8,
    alignItems: "center",
  },
});
