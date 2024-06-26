import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import styles from "./style";
import onboardingImageOne from "./../../../assets/images/onboardingImageOne.png";
import onboardingImageTwo from "./../../../assets/images/onboardingImageTwo.png";
import onboardingImageThree from "./../../../assets/images/onboardingImageThree.png";
import activeIcon from "./../../../assets/icons/activeIcon.png";
import inactiveIcon from "./../../../assets/icons/inactiveIcon.png";

const OnboardingScreen = ({ navigation }) => {
  const width = Dimensions.get("window");
  const [active, setActive] = useState(0);
  const position = useSharedValue(-100);

  const startAnimation = () => {
    position.value = withTiming(0, { duration: 1000 });
  };

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: position.value }],
    };
  });

  useEffect(() => {
    position.value = -100;
    startAnimation();
  }, [active]);

  const onboarding = [
    {
      id: 1,
      image: onboardingImageOne,
      mainText: "Send Money",
      subText:
        "Send money instantly from your Graftcore account to all networks and banks.",
    },
    {
      id: 2,
      image: onboardingImageTwo,
      mainText: "Pay Bills",
      subText:
        "Pay Bills such as Water bill, Electricity, TV subscriptions etc. Buy airtime & Bundles.",
    },
    {
      id: 3,
      image: onboardingImageThree,
      mainText: "Pay Merchants",
      subText:
        "Pay by Phone at merchants with Graftcore accounts even with insufficient balance.",
    },
  ];

  const handleNext = () => {
    if (active < 2) {
      setActive(active + 1);
    } else {
      navigation.navigate("AuthActionSelect");
    }
  };

  const handleSkip = () => {
    navigation.navigate("AuthActionSelect");
  };

  return (
    <View style={styles.onboarding}>
      <Animated.View style={animatedStyles}>
        <View style={styles.onboardingImageContainer}>
          <Image source={onboarding[active].image} style={styles.image} />
        </View>
        <View style={styles.contents}>
          <View style={styles.textContainer}>
            <Text style={styles.mainText}>{onboarding[active].mainText}</Text>
            <Text style={styles.subText}>{onboarding[active].subText}</Text>
          </View>
          {onboarding[active].id === 1 ? (
            <View style={styles.iconContainer}>
              <Image source={activeIcon} style={styles.icon} />
              <Image source={inactiveIcon} style={styles.icon} />
              <Image source={inactiveIcon} style={styles.icon} />
            </View>
          ) : onboarding[active].id === 2 ? (
            <View style={styles.iconContainer}>
              <Image source={inactiveIcon} style={styles.icon} />
              <Image source={activeIcon} style={styles.icon} />
              <Image source={inactiveIcon} style={styles.icon} />
            </View>
          ) : (
            <View style={styles.iconContainer}>
              <Image source={inactiveIcon} style={styles.icon} />
              <Image source={inactiveIcon} style={styles.icon} />
              <Image source={activeIcon} style={styles.icon} />
            </View>
          )}
          <View style={styles.btns}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.skipBtn}
              onPress={handleSkip}
            >
              <Text style={styles.skipBtnText}>Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.nextBtn}
              onPress={handleNext}
            >
              <Text style={styles.nextBtnText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

export default OnboardingScreen;
