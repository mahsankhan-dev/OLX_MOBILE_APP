import { Image, StyleSheet, Text, View } from "react-native";
import Olx_Icon from "../../assets/images/olxlogo3.png";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper_container}>
        <Image source={Olx_Icon} style={{}} />
        <View style={styles.flex_container}>
          <AntDesign style={styles.icon} name="car" size={20} color="#000" />
          <Text style={styles.text}>MOTORS</Text>
        </View>
        <View style={styles.flex_container}>
          <MaterialCommunityIcons
            style={styles.icon}
            name="office-building"
            size={20}
            color="#222"
          />
          <Text style={styles.text}>PROPERTY</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  wrapper_container: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flex_container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    padding: 7,
  },
  text: {
    marginLeft: 10,
  },
});
