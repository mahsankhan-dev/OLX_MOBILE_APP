import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  Entypo,
  Feather,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import React from "react";

const HomeFooter = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.footer_container}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.footer_icon}
        >
          <Entypo name="home" size={24} color="#002f34" />
          <Text>HOME</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Chats")}
          style={styles.footer_icon}
        >
          <Feather name="message-square" size={24} color="#002f34" />
          <Text>CHATS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("SellerScreen")}
          style={styles.footer_icon}
        >
          <AntDesign name="pluscircleo" size={24} color="#002f34" />
          <Text>SELL</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("MyAdds")}
          style={styles.footer_icon}
        >
          <Entypo name="heart-outlined" size={24} color="#002f34" />
          <Text>MY ADS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("UserAccount")}
          style={styles.footer_icon}
        >
          <MaterialCommunityIcons
            name="account-outline"
            size={24}
            color="#002f34"
          />
          <Text>ACCOUNTS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeFooter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  footer_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  footer_icon: {
    justifyContent: "center",
    alignItems: "center",
  },
});
