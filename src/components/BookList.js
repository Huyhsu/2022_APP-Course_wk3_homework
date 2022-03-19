import React from "react-native";
import { View, Text, FlatList, SectionList, StyleSheet } from "react-native";

import sections from "../json/book_section.json";
import BookCard from "./BookCard";

const BookList = () => {
  // Header
  const renderSectionHeader = ({ section: { title, data } }) => (
    <View style={styles.sectionHeaderContainerStyle}>
      <Text style={styles.titleTextStyle}>{title}</Text>
      <FlatList
        horizontal={true}
        data={data}
        renderItem={({ item }) => <BookCard book={item} />}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
  // Item
  const renderSectionItem = () => null;
  // Section List
  return (
    <SectionList
      sections={sections}
      // contentContainerStyle={{ paddingHorizontal: 10 }}
      stickySectionHeadersEnabled={false}
      showsHorizontalScrollIndicator={false}
      renderSectionHeader={renderSectionHeader}
      renderItem={renderSectionItem}
      keyExtractor={(item) => item.title}
    />
  );
};

const styles = StyleSheet.create({
  sectionHeaderContainerStyle: {
    paddingLeft: 20,
    marginBottom: 16,
  },
  titleTextStyle: {
    fontSize: 24,
    fontFamily: "Roboto",
    fontWeight: "500",
    marginBottom: 16,
  },
});

export default BookList;
