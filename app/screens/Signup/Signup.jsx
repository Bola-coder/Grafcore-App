import { View, Text, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./style";
import AppHeader from "../../components/AppHeader";
import AppButton from "../../components/AppButton";

const Signup = () => {
  const [buttonDIsabled, setButtonDisabled] = useState(true);
  const [formDetails, setFormDetails] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSignup = () => {
    console.log("Signup");
    console.log(formDetails);
  };

  const handleInputChange = (key, value) => {
    setFormDetails({
      ...formDetails,
      [key]: value,
    });
  };

  useEffect(() => {
    const { email, password, confirmPassword } = formDetails;
    if (email && password && confirmPassword) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [formDetails]);

  return (
    <View style={styles.signup}>
      <AppHeader />
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>Email & Password</Text>
          <Text style={styles.description}>
            Open a Graftcore account with a few details. your password must have
            at least 8 characters including letters and a number
          </Text>

          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email Address</Text>
              <TextInput
                style={styles.input}
                placeholder="example@email.com"
                onChangeText={(text) => handleInputChange("email", text)}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                onChangeText={(text) => handleInputChange("password", text)}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Confirm Password</Text>
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                onChangeText={(text) =>
                  handleInputChange("confirmPassword", text)
                }
              />
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            By tapping “Next”, you agree to our{" "}
            <Text style={styles.footerLink}>Terms & Conditions</Text> and{" "}
            <Text style={styles.footerLink}>Privacy Policy.</Text>
          </Text>
          <AppButton
            text={"Next"}
            isDisabled={buttonDIsabled}
            handlePress={handleSignup}
          />
        </View>
      </View>
    </View>
  );
};

export default Signup;
