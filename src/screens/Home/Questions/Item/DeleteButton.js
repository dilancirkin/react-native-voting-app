
import { View, Text } from "react-native";
import React from "react";
import { useMutation } from "@apollo/client";
import { DELETE_QUESTION_MUTATION } from "../queries";
import IconButton from "../../../../components/IconButton";
import { Spinner } from "native-base";

const DeleteButton = ({ id }) => {
  const [deleteQuestion, { loading }] = useMutation(DELETE_QUESTION_MUTATION, {
    variables: {
      id,
    },
  });

  const handleDelete = async () => {
    await deleteQuestion();
  };

  if (loading) {
    return <Spinner color="indigo.500" mr={3} />;
  }

  return (
    <View>
      <IconButton
        color={"red"}
        icon_name={"trash-outline"}
        onPress={handleDelete}
      />
    </View>
  );
};

export default DeleteButton;
