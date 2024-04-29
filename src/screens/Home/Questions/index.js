import { View, Text } from "react-native";
import React from "react";
import { useSubscription } from "@apollo/client";
import { GET_QUESTIONS_SUBSCRIPTION } from "./queries";
import List from "./List";
import Loading from "../../../components/Loading";
import EmptyList from "../../../components/EmptyList";

const Questions = () => {
  const { loading, data, error } = useSubscription(GET_QUESTIONS_SUBSCRIPTION);

  if (loading) {
    return <Loading />;
  }

  if (error) return <Text>{JSON.stringify(error)}</Text>;

  console.log("data", data);
  return (
    <View>
      {data.questions.length > 0 ? (
        <List data={data.questions} />
      ) : (
        <EmptyList message={"No surveys yet."} />
      )}
    </View>
  );
};

export default Questions;