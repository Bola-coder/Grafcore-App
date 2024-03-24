import { Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import arrowLeft from "../../assets/icons/arrow-left.png";
import { useNavigation } from "@react-navigation/native";

const AppHeader = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
      <Image source={arrowLeft} />
    </TouchableOpacity>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    alignIems: "flex-start",
    padding: 5,
  },
});
