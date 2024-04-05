import {
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useState } from "react";
import AppButton from "../../components/AppButton";
import styles from "./../Login/style";
import logo from "./../../../assets/images/logo.png";

const ResetPassword = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate("ResetPasswordSuccess");
  };
  return (
    <View style={styles.login}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Create new password</Text>
      </View>
      <KeyboardAvoidingView behavior="padding" style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="password"
            secureTextEntry
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            placeholder="password"
            secureTextEntry
          />
        </View>
        <View style={styles.btn}>
          <AppButton text={"Continue"} handlePress={handlePress} />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ResetPassword;
