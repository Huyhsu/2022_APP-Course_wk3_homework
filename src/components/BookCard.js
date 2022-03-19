import React from "react-native";
import { Text, View, Image, StyleSheet } from "react-native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const BookCard = ({ book: { title, author, image, star } }) => {
  return (
    <View style={styles.bookCardContainerStyle}>
      <Image style={styles.bookImageStyle} source={{ uri: image }}></Image>
      {star ? (
        <View style={styles.starContainerStyle}>
          {star.map((value, index) => {
            return (
              <>
                {star[index] ? (
                  <Image
                    key={index.toString()}
                    source={require("../icon/icon_star_filled.png")}
                    style={styles.starImageStyle}
                  />
                ) : (
                  <Image
                    key={index.toString()}
                    source={require("../icon/icon_star_empty.png")}
                    style={styles.starImageStyle}
                  />
                )}
              </>
            );
          })}
        </View>
      ) : null}
      <Text style={styles.titleTextStyle}>{title}</Text>
      <Text style={styles.authorTextStyle}>{author}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bookCardContainerStyle: {
    flexDirection: "column",
    marginRight: 16,
  },
  bookImageStyle: {
    width: 140,
    height: 200,
    marginBottom: 16,
  },
  titleTextStyle: {
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#131313",
    marginBottom: 8,
  },
  authorTextStyle: {
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#131313",
    opacity: 0.5,
  },
  starContainerStyle: {
    flexDirection: "row",
    marginBottom: 8,
  },
  starImageStyle: {
    width: 14,
    height: 14,
    marginLeft: 4,
  },
});

export default BookCard;
