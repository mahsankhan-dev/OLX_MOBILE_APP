import { StyleSheet, Text, TextInput, View } from "react-native";
import { EvilIcons, Entypo, Ionicons, AntDesign } from "@expo/vector-icons";
import React from "react";

const Location = ({ navigation, setSearch, search }) => {
  console.log("search", search);
  return (
    <View style={styles.container}>
      <View style={styles.main_wrapper}>
        <View style={styles.wrapper}>
          <EvilIcons
            style={styles.margin_right}
            name="location"
            size={24}
            color="#3a77ff"
          />
          <Text style={[styles.margin_right, styles.wrapper_Text]}>
            Nazimabad, Kararchi
          </Text>
          <Entypo
            style={styles.margin_right}
            name="chevron-down"
            size={24}
            color="#045159"
          />
        </View>
        <View style={styles.notification}>
          <Ionicons
            onPress={() => navigation.navigate("Notification")}
            name="notifications-outline"
            size={24}
            color="#3a77ff"
          />
        </View>
      </View>
      <View style={styles.input_fields}>
        <TextInput
          placeholderTextColor="#045159"
          placeholder="What are you looking for?"
          style={styles.text_input}
          onChangeText={(e) => setSearch(e)}
        />
        <AntDesign
          name="search1"
          size={24}
          color="#045159"
          style={styles.input_fields_icon}
        />
      </View>
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  main_wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  margin_right: {
    marginRight: 10,
  },
  wrapper_Text: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#045159",
    letterSpacing: 0.7,
  },
  input_fields: {
    marginTop: 20,
  },
  input_fields_icon: {
    position: "relative",
    bottom: "50%",
    left: 10,
  },
  text_input: {
    paddingLeft: 50,
    padding: 10,
    borderWidth: 1,
    backgroundColor: "#fff",
    borderColor: "#fff",
    color: "#222",
    fontSize: 18,
  },
});
