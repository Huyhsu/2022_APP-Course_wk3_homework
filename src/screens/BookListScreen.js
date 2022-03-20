import React from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";

import Header from "../components/Header";
import BookList from "../components/BookList";

import sections from "../json/book_section.json";

const BookListScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <BookList list={sections} navigation={navigation} />
    </View>
  );
};

export default BookListScreen;
