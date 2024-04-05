import { View, Text, Platform, Alert, Image } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./../CheckMailForPasswordReset/style";
import successIcon from "./../../../assets/icons/successIcon.png";
import AppButton from "../../components/AppButton";

const ResetPasswordSuccess = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.checkMailForPasswordReset}>
      <View style={styles.iconContainer}>
        <Image source={successIcon} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.mainText}>Password Reset Successful</Text>
        <Text style={styles.subText}>
          You have successfully reset your password
        </Text>
      </View>
      <View style={styles.btn}>
        <AppButton text={"Open email app"} handlePress={handlePress} />
      </View>
    </View>
  );
};

export default ResetPasswordSuccess;
