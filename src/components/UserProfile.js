import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import image from "../../assets/images/avatar_1.png";

const UserProfile = ({ route, navigation }) => {
  const { sellerData, profileData } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const d = new Date();
  let year = d.getFullYear();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons
          onPress={() => navigation.goBack()}
          name="keyboard-arrow-left"
          size={34}
          color="black"
        />
      </View>
      <View style={styles.wrapper_container}>
        <View style={styles.wrapper}>
          {sellerData.URL ? (
            <Image source={{ uri: sellerData.URL }} style={styles.images} />
          ) : (
            <Image source={image} style={styles.image} />
          )}
          <View style={styles.texts}>
            <Text style={styles.user_name}>{sellerData.name}</Text>
            <Text style={styles.user_year}>Member since Sep {year}</Text>
          </View>
        </View>
        <View style={styles.add}>
          <Text style={styles.user_name}>Published ads</Text>
        </View>
      </View>
      <>
        {profileData ? (
          <ScrollView>
            <View style={styles.containers}>
              {/* <Text>Recomended Adds</Text> */}
              {profileData.map((item, index) => {
                console.log(index);
                return (
                  <View style={styles.card} key={index}>
                    <View style={styles.card_menu}>
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
                  </View>
                );
              })}
            </View>
          </ScrollView>
        ) : (
          ""
        )}
      </>
    </SafeAreaView>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    padding: 10,
  },
  wrapper_container: {
    backgroundColor: "#fff",
  },
  wrapper: {
    flexDirection: "row",
    padding: 10,
    // justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
  images: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  texts: {
    paddingLeft: 20,
  },
  user_name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#003034",
  },
  user_year: {
    fontSize: 16,
    color: "#003034",
    marginTop: 5,
    fontWeight: "300",
  },
  add: {
    padding: 20,
  },

  containers: {
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
