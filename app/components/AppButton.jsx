import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const AppButton = ({ text, handlePress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={handlePress}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: "#F3387E",
    padding: 12,
    borderRadius: 8,
    marginVertical: 10,
  },

  text: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
  },
});
