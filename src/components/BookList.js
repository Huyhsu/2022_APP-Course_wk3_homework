import React from "react-native";
import { Text, FlatList, SectionList, StyleSheet } from "react-native";

import sections from "../json/book_section.json";
import BookCard from "./BookCard";

const BookList = () => {
  // Header
  const renderSectionHeader = ({ section: { title, data } }) => (
    <>
      <Text>{title}</Text>
      <FlatList
        horizontal={true}
        data={data}
        renderItem={({ item }) => <BookCard book={item} />}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.title}
      />
    </>
  );
  // Item
  const renderSectionItem = () => null;
  // Section List
  return (
    <SectionList
      sections={sections}
      contentContainerStyle={{ paddingHorizontal: 10 }}
      stickySectionHeadersEnabled={false}
      showsHorizontalScrollIndicator={false}
      renderSectionHeader={renderSectionHeader}
      renderItem={renderSectionItem}
      keyExtractor={(item) => item.title}
    />
  );
};

export default BookList;
