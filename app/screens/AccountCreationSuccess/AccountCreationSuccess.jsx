import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./style";
import logo from "./../../../assets/images/logo.png";
import accountSuccessImage from "./../../../assets/images/accountSuccessImage.png";
import AppButton from "../../components/AppButton";

const AccountCreationSuccess = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={styles.accountCreationSuccess}>
      <View>
        <Image source={logo} style={styles.logo} />
        <View style={styles.imageContainer}>
          <Image source={accountSuccessImage} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.mainText}>Welcome</Text>
          <Text style={styles.subText}>
            You’ve successfully created your account
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <AppButton text={"Continue"} handlePress={handlePress} />
      </View>
    </View>
  );
};

export default AccountCreationSuccess;
