import React, { useState } from "react";
import { Modal, Text, View } from "react-native";
import Questions from "./Questions";
import IconButton from "../../components/IconButton";
import AddNewModal from "./Questions/AddNewModal";

const Home = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon_name={"add-outline"}
          onPress={() => setModalVisible((prev) => !prev)}
        />
      ),
      headerLeft: () => (
        <IconButton
          icon_name={"person-circle-outline"}
          onPress={() => navigation.navigate("Profile")}
        />
      ),
    });
  }, [navigation]);
  return (
    <View>
      <Questions />

      <Modal
        animationType="slide"
        visible={modalVisible}
        presentationStyle="pageSheet"
        onRequestClose={() => setModalVisible(false)}
      >
        <AddNewModal closeModal={() => setModalVisible(false)} />
      </Modal>
    </View>
  );
};

export default Home;