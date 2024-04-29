import React, { useState } from "react";
import { Box, Button, Heading, Input, useToast } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ADD_NEW_QUESTION_MUTATION } from "./queries";
import { useMutation } from "@apollo/client";
import { auth } from "../../../auth";

const AddNewModal = ({ closeModal }) => {
  const toast = useToast();

  const [AddNewQuestion, { loading, error }] = useMutation(
    ADD_NEW_QUESTION_MUTATION
  );

  const [title, setTitle] = useState("");
  const [options, setOptions] = useState([{ text: "" }, { text: "" }]);

  const handleOptionChange = (value, index) => {
    const newOptions = [...options];
    newOptions[index].text = value;
    setOptions(newOptions);
  };

  const handleNewOption = () => {
    if (options.length >= 5) {
      return;
    }
    setOptions((prev) => [...prev, { text: "" }]);
  };

  const handleSubmit = async () => {
    const options_data = options.filter((item) => item.text !== "");

    if (!title || options_data.length < 2) {
      return;
    }

    await AddNewQuestion({
      variables: {
        title,
        user_id: auth.currentUser.uid,
        options: options_data,
      },
    });

    closeModal();

    toast.show({
      title: "Question Added",
      placement: "top",
      status: "success",
    });
  };

  return (
    <Box backgroundColor="#ddd" flex={"1"}>
      <Box p={6} flex={"1"}>
        <Heading mb={2}>Question</Heading>
        <Input
          placeholder="Enter your question here"
          fontSize={20}
          borderColor="#686565"
          value={title}
          onChangeText={setTitle}
        />
        <Heading mt={6} mb={2}>
          Options
        </Heading>
        {options.map((item, index) => (
          <Input
            placeholder="Enter a new option"
            fontSize={18}
            borderColor="#686565"
            mb={1}
            key={index}
            value={item.text}
            onChangeText={(value) => handleOptionChange(value, index)}
          />
        ))}

        <Box mt={2} alignItems={{ base: "flex-end", md: "flex-start" }}>
          <Button
            onPress={handleNewOption}
            disabled={options.length >= 5}
            size={"xs"}
            colorScheme={"blueGray"}
            leftIcon={<Ionicons name="add-circle" color={"white"} size={26} />}
          />
        </Box>
      </Box>
      <Box>
        <Button style={{height:70}} isLoading={loading} onPress={handleSubmit}>
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default AddNewModal;