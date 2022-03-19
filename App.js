import React from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";

import BookList from "./src/components/BookList";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <BookList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
