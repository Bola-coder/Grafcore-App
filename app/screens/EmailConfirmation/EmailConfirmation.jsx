import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { openInbox } from "react-native-email-link";
import * as IntentLauncher from "expo-intent-launcher";
import styles from "./style";
import AppHeader from "../../components/AppHeader";
import { TouchableOpacity } from "react-native-gesture-handler";
import AppButton from "../../components/AppButton";

const EmailConfirmation = () => {
  const [buttonDIsabled, setButtonDisabled] = useState(true);
  const [verificationCode, setVerificationCode] = useState("");

  const handleInputChange = (value) => {
    setVerificationCode(value);
  };

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

  useEffect(() => {
    if (verificationCode.length === 6) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  });
  return (
    <KeyboardAvoidingView style={styles.emailConfirmation}>
      <AppHeader />
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>Confirm your email address</Text>
          <Text style={styles.description}>
            We’ll send a code to your email address to confirm you own it.
          </Text>
          <View style={styles.form}>
            <Text style={styles.formText}>testingaccount@ev.com</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Verification Code</Text>
              <TextInput
                style={styles.input}
                keyboardType="number-pad"
                placeholder="000000"
                maxLength={6}
                onChangeText={(text) => handleInputChange(text)}
              />
            </View>
            <View style={styles.actions}>
              <TouchableOpacity style={styles.actionBtn}>
                <Text style={styles.resendBtnText}>Resend Code</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={openEmailApp}
                style={styles.actionBtn}
              >
                <Text style={styles.emailBtnText}>Open Email App</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <AppButton text={"Next"} isDisabled={buttonDIsabled} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default EmailConfirmation;
