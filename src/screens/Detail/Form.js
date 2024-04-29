import React, { useState } from "react";
import { Box, Button, Radio } from "native-base";
import { useMutation } from "@apollo/client";
import { NEW_ANSWER_MUTATION } from "./queries";
import { auth } from "../../auth";

const Form = ({ options, setIsVoted, id }) => {
  const [selected, setSelected] = useState("");

  const [newAnswer, { loading }] = useMutation(NEW_ANSWER_MUTATION);

  const handleSubmit = async () => {
    if (!selected) {
      return;
    }

    await newAnswer({
      variables: {
        option_id: selected,
        user_id: auth.currentUser?.uid,
        question_id: id,
      },
    });

    setIsVoted(true);
  };

  return (
    <Box py={3}>
      <Radio.Group value={selected} onChange={setSelected}>
        {options.map((option) => (
          <Radio value={option.id} my={1} key={option.id}>
            {option.text}
          </Radio>
        ))}
      </Radio.Group>
      <Button isLoading={loading} mt={5} onPress={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
};

export default Form;