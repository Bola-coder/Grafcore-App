import { View, Text, Platform, Alert, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { openInbox } from "react-native-email-link";
import * as IntentLauncher from "expo-intent-launcher";
import styles from "./style";
import send from "./../../../assets/icons/send.png";
import AppButton from "../../components/AppButton";
import { TouchableOpacity } from "react-native-gesture-handler";

const CheckMailForPasswordReset = ({ navigation }) => {
  const openEmailApp = async () => {
    if (Platform.OS === "ios") {
      try {
        await openInbox({ title: "Open mail app" });
      } catch (error) {
        console.log(`OpenEmailBox > IOS Error ${error}`);
      }
    } else if (Platform.OS === "android") {
      try {
        const activityAction = "android.intent.action.MAIN";
        const intentParams = {
          category: "android.intent.category.APP_EMAIL",
        };
        IntentLauncher.startActivityAsync(activityAction, intentParams);
      } catch (error) {
        console.log(`OpenEmailBox > Android Error ${error}`);
      }
    } else {
      Alert("This feature is not supported on this platform");
      return;
    }
  };

  const handleRedirect = () => {
    navigation.navigate("ResetPassword");
  };

  return (
    <View style={styles.checkMailForPasswordReset}>
      <View style={styles.iconContainer}>
        <Image source={send} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.mainText}>Check your mail</Text>
        <Text style={styles.subText}>
          We have sent instructions to reset your password to your email
          address.
        </Text>
      </View>
      <View style={styles.btn}>
        <AppButton text={"Open email app"} handlePress={openEmailApp} />
      </View>
      <View style={styles.textContainer}>
        <TouchableOpacity activeOpacity={0.7} onPress={handleRedirect}>
          <Text style={styles.subText}>
            Click me to process to reset password page
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckMailForPasswordReset;
