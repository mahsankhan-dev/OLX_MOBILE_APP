import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const AddImages = ({ ImageUpload }) => {
  const uploadImage = () => {
    console.log("upload image");
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_text}>UPLOAD PHOTOS</Text>
      </View>
      <TouchableOpacity onPress={ImageUpload} style={styles.wrapper}>
        <View style={styles.image_wrapper}>
          <View style={styles.wrapper_row}>
            <AntDesign name="pluscircleo" size={20} color="#fff" />
            <Text style={styles.wrapper_text}>ADD images</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AddImages;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    backgroundColor: "#fafafa",
    padding: 10,
  },
  header_text: {
    fontSize: 20,
    color: "#435f60",
    fontWeight: "bold",
  },
  wrapper: {
    backgroundColor: "#22e6dc",
    borderRadius: 10,
  },
  image_wrapper: {
    backgroundColor: "#218386",
    padding: 70,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 70,
    borderTopLeftRadius: 70,
    borderBottomRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderColor: "green",
    borderWidth: 1,
  },
  wrapper_row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper_text: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 20,
    marginLeft: 10,
  },
});
