import React from "react-native";
import { View, Text, FlatList, SectionList, StyleSheet } from "react-native";

import BookCard from "./BookCard";

const BookList = ({ list, navigation }) => {
  // Header
  const renderSectionHeader = ({ section: { title, data } }) => (
    <View style={styles.sectionHeaderContainerStyle}>
      <Text style={styles.titleTextStyle}>{title}</Text>
      <FlatList
        horizontal={true}
        data={data}
        renderItem={({ item }) => (
          <BookCard book={item} navigation={navigation} />
        )}
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
      sections={list}
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
