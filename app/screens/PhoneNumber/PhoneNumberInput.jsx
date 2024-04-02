import { View, Text, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./style";
import AppHeader from "../../components/AppHeader";
import AppButton from "../../components/AppButton";

const PhoneNumberInput = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [buttonDIsabled, setButtonDisabled] = useState(true);

  const handleInputChange = (value) => {
    setPhoneNumber(value);
  };

  const handleNext = () => {
    navigation.navigate("PhoneNumberConfirmation");
  };

  useEffect(() => {
    if (phoneNumber.length > 10) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [phoneNumber]);

  return (
    <View style={styles.phoneNumberInput}>
      <AppHeader />
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>What’s Your Phone Number?</Text>
          <Text style={styles.description}>
            We’ll need a phone number you own.
          </Text>
          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Phone Number</Text>
              <TextInput
                style={styles.input}
                keyboardType="phone-pad"
                placeholder="09088776633"
                onChangeText={(text) => handleInputChange(text)}
              />
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
    </View>
  );
};

export default PhoneNumberInput;
