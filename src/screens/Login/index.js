import React, { useEffect, useState } from "react";
import { Box, Button, Heading, Input } from "native-base";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../auth";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.replace("Home");
      }
    });

    return unsubscribe;
  }, []);

  const handleSignup = () => {
    if (!email || !password) {
      return;
    }
    console.log("auth", auth);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("user", user);
      })
      .catch((err) => alert(err.message));
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password).then(
      (userCredentials) => {
        const user = userCredentials.user;
        console.log("user", user);
      }
    );
  };

  return (
    <Box p={6}>
      <Box mb={2}>
        <Heading mb={2}>E-mail</Heading>
        <Input
          placeholder="Please enter your e-mail address"
          fontSize={20}
          borderColor="#686565"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
      </Box>
      <Box my={2}>
        <Heading mb={2}>Password</Heading>
        <Input
          placeholder="Enter password"
          fontSize={20}
          borderColor="#686565"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </Box>
      <Box mt={4}>
        <Button onPress={handleLogin} size={"lg"}>
          Login
        </Button>
        <Button onPress={handleSignup} mt={2} variant={"outline"} size={"lg"}>
          Register
        </Button>
      </Box>
    </Box>
  );
};

export default Login;