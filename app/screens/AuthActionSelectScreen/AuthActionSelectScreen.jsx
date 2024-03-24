import { View, Image } from "react-native";
import React from "react";
import logo from "./../../../assets/images/logo.png";
import splashImage from "./../../../assets/images/splashImage.png";
import styles from "./style";
import AppButton from "../../components/AppButton";

const AuthActionSelectScreen = ({ navigation }) => {
  const handleSignupNav = () => {
    navigation.navigate("Signup");
  };

  const handleLoginNav = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={styles.splash}>
      <View style={styles.logo}>
        <Image source={logo} style={styles.logoImage} />
      </View>
      <View style={styles.imageContainer}>
        <Image source={splashImage} style={styles.image} />
      </View>
      <View style={styles.btns}>
        <View style={styles.btn}>
          <AppButton text={"Log In"} handlePress={handleLoginNav} />
          <AppButton text={"Sign Up"} handlePress={handleSignupNav} />
        </View>
      </View>
    </View>
  );
};

export default AuthActionSelectScreen;
