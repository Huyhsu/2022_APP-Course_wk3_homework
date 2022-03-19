import React from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";

import Header from "./src/components/Header";
import BookList from "./src/components/BookList";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Header />
      <BookList />
    </SafeAreaView>
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
