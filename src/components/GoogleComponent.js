import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

const GoogleComponent = ({ Icon, Title }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.loginComponent}>
        <View style={styles.iconContainer}>
          {/* <Text style={styles.icons}> {Icon}</Text> */}
          <Image source={Icon} style={{ height: 20, width: 20 }} />
          <Text style={styles.textIcon}>{Title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default GoogleComponent;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 5,
    paddingRight: 5,
  },
  loginComponent: {
    marginTop: "3%",
    borderWidth: 1,
    padding: 15,
    width: 350,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icons: {},
  textIcon: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#002f34",
    marginLeft: 20,
  },
});
