import { View, Text } from "react-native";
import React from "react";
import { Box, Button, Heading } from "native-base";
import { auth } from "../../auth";

const Profile = ({ navigation }) => {
  const handleSignout = () => {
    auth
      .signOut()
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: "Login" }],
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <Box justifyContent={"center"} alignItems={"center"} flex={1}>
      <Heading size={"md"}>Welcome, {auth.currentUser?.email}</Heading>
      <Button onPress={handleSignout} my={5} colorScheme={"danger"}>
        Sign out
      </Button>
    </Box>
  );
};

export default Profile;