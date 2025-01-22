import { View, Text, StyleSheet } from "react-native";

function AppHeader() {
  return (
    <View style={styles.title_container}>
      <Text style={styles.title}>Simple TO-DO List</Text>
      <Text style={styles.description}>
        Sometimes it is really important to organize your days and tasks to keep
        things simple. This lightweight app is your little helper to do that.
        Rack and track!
      </Text>
    </View>
  );
}

export default AppHeader;

const styles = StyleSheet.create({
  title_container: {
    paddingTop: 50,
    paddingBottom: 8,
    backgroundColor: "#FBF5DD",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
    marginBottom: 20,
    color: "#16404D",
  },
  description: {
    paddingLeft: 10,
    textAlign: "justify",
  },
});
