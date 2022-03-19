import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text>I am Header</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 56,
  },
});

export default Header;
