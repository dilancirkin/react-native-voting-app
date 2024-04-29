import { View, Text, FlatList } from "react-native";
import React from "react";
import Item from "./Item";

const List = ({ data }) => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default List;