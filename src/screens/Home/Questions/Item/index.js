import { Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Box } from "native-base";
import DeleteButton from "./DeleteButton";
import { auth } from "../../../../auth";

const Item = ({ item }) => {
  const navigation = useNavigation();

  return (
    <Box style={styles.container}>
      <TouchableOpacity
        style={styles.title}
        onPress={() => navigation.navigate("Detail", { id: item.id })}
      >
        <Text style={styles.text}>{item.text}</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity style={styles.removeBtn}></TouchableOpacity> */}
      {auth.currentUser.uid === item.user_id && <DeleteButton id={item.id} />}
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "#DDD",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
  },
  title: {
    flex: 1,
    padding: 10,
  },
});

export default Item;