import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { getUserAdd } from "../config";
import HomeFooter from "./HomeFooter";

const MyAdds = ({ navigation }) => {
  const [userAdd, setUserAdd] = useState();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  useEffect(() => {
    const focusHandler = navigation.addListener("focus", () => {
      getallAdds();
    });
    return focusHandler;
  }, []);

  const getallAdds = async () => {
    const res = await getUserAdd();
    setUserAdd(res);
  };
  console.log("rrrrrr", userAdd);

  return (
    <SafeAreaView style={styles.containers}>
      {/* <Text style={styles.header_text}>My Ads</Text> */}
      <View style={styles.header}>
        <Ionicons
          onPress={() => navigation.navigate("Home")}
          name="arrow-back"
          size={24}
          color="black"
        />
        <Text style={styles.header_text}>My Ads</Text>
      </View>
      {userAdd ? (
        <ScrollView>
          <View style={styles.container}>
            {userAdd.map((item, index) => {
              return (
                <View style={styles.card} key={index}>
                  <TouchableOpacity
                    onPress={() => {
                      console.log(item.user);
                      // navigation.navigate("DetailScreen", {
                      //   itemId: item.user,
                      // });
                    }}
                  >
                    <View style={styles.card_menu} key={item.user}>
                      <Image
                        source={{ uri: item.add.Url }}
                        style={styles.card_image}
                      />
                      <View style={styles.card_Item_flex}>
                        <Text style={styles.card_title}>{item.add.title}</Text>
                        <Entypo name="heart-outlined" size={24} color="black" />
                      </View>
                      <Text style={styles.card_price}>{item.add.price}</Text>
                      <View style={styles.card_location}>
                        <Text style={styles.card_location_text}>
                          {item.add.location}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </ScrollView>
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            You don't have any ads yet.
          </Text>
        </View>
      )}
      <HomeFooter navigation={navigation} />
    </SafeAreaView>
  );
};

export default MyAdds;

const styles = StyleSheet.create({
  containers: {
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
  container: {
    width: "100%",
    // height: "100%",
    padding: 5,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  card: {
    width: "50%",
    // height: "50%",
    padding: 5,
  },
  card_menu: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  card_image: {
    width: "100%",
    height: 200,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  card_Item_flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  card_title: {
    fontSize: 16,
    width: 120,
    overflow: "hidden",
    height: 20,
  },
  card_price: {
    fontSize: 18,
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    fontWeight: "bold",
  },
  card_location: {
    padding: 10,
    justifyContent: "flex-end",
    flex: 1,
  },
  card_location_text: {
    fontSize: 16,
    width: 190,
    height: 20,
    overflow: "hidden",
  },
});
