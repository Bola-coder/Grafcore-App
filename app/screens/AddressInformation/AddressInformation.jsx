import { View, Text, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./style";
import AppHeader from "../../components/AppHeader";
import AppButton from "../../components/AppButton";
import AppPicker from "../../components/AppPicker";
import { ScrollView } from "react-native-gesture-handler";

const AddressInformation = ({ navigation }) => {
  const nigerianStatesApiBaseUrl =
    "https://nigeria-country-api.onrender.com/api/v1";
  const [states, setStates] = useState([]);
  const [lgas, setLgas] = useState([]);
  const [formData, setFormData] = useState({
    state: "",
    lga: "",
    city: "",
    houseNumber: "",
    street: "",
  });
  const [buttonDIsabled, setButtonDisabled] = useState(true);

  const handleInputChange = (key, value) => {
    console.log(key, value);
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const getAllStates = async () => {
    try {
      const response = await fetch(`${nigerianStatesApiBaseUrl}/states`);
      const data = await response.json();
      //   console.log(data);
      if (data) {
        data.states.map((state) => {
          setStates((prev) => [
            ...prev,
            { label: state.state, value: state.state },
          ]);
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getAllLgas = async (stateName) => {
    try {
      const response = await fetch(
        `${nigerianStatesApiBaseUrl}/lga/${stateName}`
      );
      const data = await response.json();
      //   console.log(data);
      if (data) {
        data.lgaData?.localGovernments.map((lga) => {
          setLgas((prev) => [...prev, { label: lga, value: lga }]);
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllStates();
  }, []);

  useEffect(() => {
    if (formData.state) {
      getAllLgas(formData.state);
    }
  }, [formData.state]);

  useEffect(() => {
    if (
      formData.state &&
      formData.lga &&
      formData.city &&
      formData.houseNumber &&
      formData.street
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [formData]);

  const handleNext = () => {
    console.log(formData);
    navigation.navigate("AccountCreationSuccess");
  };

  return (
    <ScrollView
      contentContainerStyle={styles.addressInformation}
      showsVerticalScrollIndicator={false}
    >
      <AppHeader />
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>What’s Your Home Address?</Text>
          <Text style={styles.description}>
            Please use your actual house address.{" "}
          </Text>
          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>State</Text>
              <AppPicker
                items={states}
                prompt={"Choose State"}
                onPickerValueChange={(value) =>
                  handleInputChange("state", value)
                }
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>LGA</Text>
              <AppPicker
                items={lgas}
                prompt={"Choose LGA"}
                onPickerValueChange={(value) => handleInputChange("lga", value)}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>City</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter a city"
                onChangeText={(text) => handleInputChange("city", text)}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Street Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Name of your street"
                onChangeText={(text) => handleInputChange("street", text)}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>House Number</Text>
              <TextInput
                style={styles.input}
                placeholder="House 9"
                onChangeText={(text) => handleInputChange("houseNumber", text)}
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
    </ScrollView>
  );
};

export default AddressInformation;
