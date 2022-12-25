import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Text, COLORS } from "../styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text fontType="Body">Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.Black,
  },
});
