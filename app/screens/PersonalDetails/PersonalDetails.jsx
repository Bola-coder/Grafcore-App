import { View, Text, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import AppHeader from "../../components/AppHeader";
import styles from "./style";
import AppPicker from "../../components/AppPicker";
import AppDatePicker from "../../components/AppDate";
import AppButton from "../../components/AppButton";

const PersonalDetails = ({ navigation }) => {
  const [personalDetails, setPersonalDetails] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
  });
  const [buttonDIsabled, setButtonDisabled] = useState(true);

  const handleInputChange = (key, value) => {
    // console.log(value);
    setPersonalDetails({
      ...personalDetails,
      [key]: value,
    });
  };

  useEffect(() => {
    if (
      personalDetails.firstName &&
      personalDetails.lastName &&
      personalDetails.dateOfBirth &&
      personalDetails.gender
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [personalDetails]);

  const handleNext = () => {
    navigation.navigate("PhoneNumberInput");
  };
  console.log(personalDetails);
  return (
    <View style={styles.personalDetails}>
      <AppHeader />
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>Tell us a little bit about yourself</Text>
          <Text style={styles.description}>
            Please add your name as it appears on your official documents and
            IDs.
          </Text>
          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>First Name</Text>
              <TextInput
                style={styles.input}
                placeholder="John"
                onChangeText={(text) => handleInputChange("firstName", text)}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Middle Name (Optional)</Text>
              <TextInput
                style={styles.input}
                placeholder="Lol"
                onChangeText={(text) => handleInputChange("middleName", text)}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Last Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Doe"
                onChangeText={(text) => handleInputChange("lastName", text)}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Gender</Text>
              <AppPicker
                items={[
                  { label: "Male", value: "male" },
                  { label: "Female", value: "female" },
                ]}
                prompt={"Choose One"}
                onPickerValueChange={(value) =>
                  handleInputChange("gender", value)
                }
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Date of birth</Text>
              <AppDatePicker
                defaultValue={Date.now()}
                label={"DOB:"}
                styles={styles}
                onDateChange={(value) =>
                  handleInputChange("dateOfBirth", value)
                }
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

export default PersonalDetails;
