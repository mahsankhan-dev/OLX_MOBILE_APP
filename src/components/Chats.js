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
import HomeFooter from "./HomeFooter";

const Chats = ({ navigation }) => {
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
        <Text style={styles.header_text}>Chats</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.text}>No, Chats</Text>
      </View>
      <HomeFooter navigation={navigation} />
    </SafeAreaView>
  );
};

export default Chats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
