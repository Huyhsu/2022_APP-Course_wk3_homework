import React from "react-native";
import { Text, View, Image, StyleSheet } from "react-native";

const BookCard = ({ book: { title, author, image } }) => {
  return (
    <View style={{ flexDirection: "column" }}>
      <Image style={styles.imageStyle} source={{ uri: image }}></Image>
      <Text>{title}</Text>
      <Text>{author}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 140,
    height: 200,
  },
});

export default BookCard;
