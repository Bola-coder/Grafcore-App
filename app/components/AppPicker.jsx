import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { Picker } from "@react-native-picker/picker";

const AppPicker = ({
  items,
  bgColor,
  prompt,
  defaultValue,
  onPickerValueChange,
}) => {
  const [selectedItem, setSelectedItem] = useState(defaultValue);

  // useEffect(() => {
  //   onPickerValueChange(items[0].value);
  // }, []);

  const handleChange = (itemValue, itemIndex) => {
    if (itemValue !== null) {
      onPickerValueChange(itemValue);
      setSelectedItem(itemValue);
    }
  };

  return (
    <View
      style={{
        // padding: 15,
        borderWidth: 1,
        borderColor: "#B0ABAD",
        backgroundColor: bgColor ? bgColor : "#ECECEC",
        borderRadius: 8,
        // color: "#333",
      }}
    >
      <Picker
        selectedValue={selectedItem}
        // prompt={prompt}
        onValueChange={handleChange}
        style={{
          alignSelf: "center",
          width: "100%",
          //   padding: 15,
          //   borderWidth: 1,
          //   borderColor: "#B0ABAD",
          //   backgroundColor: bgColor ? bgColor : "#ECECEC",
          //   borderRadius: 8,
        }}
        //   mode="dropdown"
      >
        <Picker.Item label={prompt} value={null} key={-1} />
        {/* Title/label item */}
        {items.map((item, index) => (
          <Picker.Item label={item.label} value={item.value} key={index} />
        ))}
      </Picker>
    </View>
  );
};

export default AppPicker;
