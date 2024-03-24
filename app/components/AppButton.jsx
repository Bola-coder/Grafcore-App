import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const AppButton = ({ text, handlePress, isDisabled }) => {
  return (
    <TouchableOpacity
      style={[styles.container, isDisabled && { opacity: 0.6 }]}
      activeOpacity={0.7}
      onPress={handlePress}
      disabled={isDisabled}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {
    width: "100%",
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
