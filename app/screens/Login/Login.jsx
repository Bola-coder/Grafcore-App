import {
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import AppButton from "../../components/AppButton";
import styles from "./style";
import logo from "./../../../assets/images/logo.png";
import fingerprint from "./../../../assets/images/fingerprint.png";
import * as LocalAuthentication from "expo-local-authentication";

const Login = ({ navigation }) => {
  const [biometricsSupported, setBiometricsSupported] = useState(false);
  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setBiometricsSupported(compatible);
    })();
  }, []);

  const handleBiometricAuth = async () => {
    const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
    if (!savedBiometrics) {
      return Alert.alert(
        "No biometrics record found on device",
        "Please sign in using your email and password."
      );
    }
    const biometricAuth = await LocalAuthentication.authenticateAsync({
      promptMessage: "Authenticate to continue",
      // disableDeviceFallback: true,
    });

    if (biometricAuth.success) {
      Alert.alert("Authentication Successful", "Welcome back!");
    } else {
      Alert.alert("Authentication Failed", "Please try again.");
    }
  };

  console.log(biometricsSupported);
  return (
    <View style={styles.login}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Hello there!</Text>
      </View>
      <KeyboardAvoidingView behavior="padding" style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} placeholder="youremail@domain.com" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="password"
            secureTextEntry
          />
        </View>
        <View style={styles.btn}>
          <AppButton text={"Continue"} />
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          <Text style={styles.changePasswordLink}>Forgot Password</Text>
        </TouchableOpacity>
        {biometricsSupported && (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleBiometricAuth}
            style={styles.fingerprintImageContainer}
          >
            <Image source={fingerprint} />
          </TouchableOpacity>
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;
