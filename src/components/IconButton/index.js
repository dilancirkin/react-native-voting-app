import React from "react";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const IconButton = ({ onPress, icon_name, color }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons color={color ? color : {}} name={icon_name} size={32} />
    </TouchableOpacity>
  );
};

export default IconButton;