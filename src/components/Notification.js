import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

const Notification = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          onPress={() => navigation.navigate("Home")}
          name="arrow-back"
          size={24}
          color="black"
        />
        <Text style={styles.header_text}>Notification</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.text}>No, Notification !</Text>
      </View>
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    padding: 20,
    fontSize: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  header_text: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
