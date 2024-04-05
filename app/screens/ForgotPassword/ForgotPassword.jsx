import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import styles from "./style";
import AppHeader from "../../components/AppHeader";
import AppButton from "../../components/AppButton";

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [disabledButton, setDisabledButton] = useState(true);

  const handleEmailChange = (email) => {
    setEmail(email);
    if (email.length > 0) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  };

  const handlePress = () => {
    navigation.navigate("CheckMailForPasswordReset");
  };
  return (
    <View style={styles.forgotPassword}>
      <AppHeader />
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>Forget your Password?</Text>
          <Text style={styles.description}>
            Enter the email associated with your account and we’ll send an email
            with instructions to reset your password.
          </Text>
          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email Address</Text>
              <TextInput
                style={styles.input}
                placeholder="email@domain.com"
                onChangeText={(text) => handleEmailChange(text)}
              />
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <AppButton
            text={"Send Instructions"}
            isDisabled={disabledButton}
            handlePress={handlePress}
          />
        </View>
      </View>
    </View>
  );
};

export default ForgotPassword;
