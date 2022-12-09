import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const DetailFooterButton = ({ Title, Icon, onPress }) => {
  // const UserPhoneData = async () => {
  //   const response = await
  // }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.TouchableOpacity}>
        <View style={styles.footer_wrapper}>
          <Text style={styles.TouchableOpacity_icon}>{Icon}</Text>
          <Text style={styles.TouchableOpacity_text}>{Title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default DetailFooterButton;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  footer_wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  TouchableOpacity: {
    // // width: "100%",
    backgroundColor: "#003034",
    paddingVertical: 15,
    paddingHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  TouchableOpacity_text: {
    // fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  TouchableOpacity_icon: {
    marginRight: 10,
  },
});
