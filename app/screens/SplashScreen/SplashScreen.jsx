import { View, Image } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import logo from "./../../../assets/images/logo.png";
import splashImage from "./../../../assets/images/splashImage.png";
import styles from "./style";
const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      navigation.navigate("Onboarding");
    }, 2000);
    return () => clearTimeout(splashTimeout);
  }, []);

  return (
    <View style={styles.splash}>
      <View style={styles.logo}>
        <Image source={logo} style={styles.logoImage} />
      </View>
      <View style={styles.imageContainer}>
        <Image source={splashImage} style={styles.image} />
      </View>
    </View>
  );
};

export default SplashScreen;
