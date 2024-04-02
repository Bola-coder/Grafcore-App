import {
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import AppHeader from "../../components/AppHeader";
import AppButton from "../../components/AppButton";
import styles from "./../EmailConfirmation/style";

const PhoneNumberConfirmation = ({ navigation }) => {
  const [buttonDIsabled, setButtonDisabled] = useState(true);
  const [verificationCode, setVerificationCode] = useState("");

  const handleInputChange = (value) => {
    setVerificationCode(value);
  };

  const handleNext = () => {
    navigation.navigate("AddressInformation");
  };

  useEffect(() => {
    if (verificationCode.length === 6) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [verificationCode]);
  return (
    <KeyboardAvoidingView style={styles.emailConfirmation}>
      <AppHeader />
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>Confirm Your Phone Number</Text>
          <Text style={styles.description}>
            We’ll send a code to the phone number you provided to confirm you
            own it.
          </Text>
          <View style={styles.form}>
            <Text style={styles.formText}>(234) 08106454127</Text>
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
              {/* <TouchableOpacity
              activeOpacity={0.7}
              onPress={openEmailApp}
              style={styles.actionBtn}
            >
              <Text style={styles.emailBtnText}>Open Email App</Text>
            </TouchableOpacity> */}
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <AppButton
            text={"Next"}
            isDisabled={buttonDIsabled}
            handlePress={handleNext}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default PhoneNumberConfirmation;
