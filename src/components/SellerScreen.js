import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import mobile from "../../assets/images/mobile.png";
import car from "../../assets/images/car.png";
import house from "../../assets/images/house.png";
import key from "../../assets/images/key.png";

const SellerScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Entypo
          name="cross"
          size={30}
          color="#002f34"
          style={styles.header_icon}
          onPress={() => navigation.navigate("Home")}
        />
        <Text style={styles.header_text}>What are you offering?</Text>
      </View>
      <View style={styles.center_container}>
        <TouchableOpacity
          onPress={() => navigation.navigate("PostAdd")}
          style={styles.center}
        >
          <View style={styles.category_container}>
            <View
              style={{ backgroundColor: "red", padding: 10, borderRadius: 50 }}
            >
              <Image source={mobile} style={styles.image_category} />
            </View>
            <Text style={styles.text_category}>Mobiles</Text>
          </View>
          <View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="#002f34"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("PostAdd")}
          style={styles.center}
        >
          <View style={styles.category_container}>
            <View
              style={{
                backgroundColor: "gold",
                padding: 10,
                borderRadius: 50,
              }}
            >
              <Image source={car} style={styles.image_category} />
            </View>
            <Text style={styles.text_category}>Vehicles</Text>
          </View>
          <View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="#002f34"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("PostAdd")}
          style={styles.center}
        >
          <View style={styles.category_container}>
            <View
              style={{
                backgroundColor: "pink",
                padding: 10,
                borderRadius: 50,
              }}
            >
              <Image source={house} style={styles.image_category} />
            </View>
            <Text style={styles.text_category}>Property for Sale</Text>
          </View>
          <View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="#002f34"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("PostAdd")}
          style={styles.center}
        >
          <View style={styles.category_container}>
            <View
              style={{
                backgroundColor: "dodgerblue",
                padding: 10,
                borderRadius: 50,
              }}
            >
              <Image source={key} style={styles.image_category} />
            </View>
            <Text style={styles.text_category}>Property for Rent</Text>
          </View>
          <View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="#002f34"
            />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SellerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  header_icon: {
    paddingRight: 20,
  },
  header_text: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#002f34",
  },
  center_container: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 20,
  },
  center: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 20,
  },
  category_container: {
    flexDirection: "row",
    alignItems: "center",
  },
  category: {
    // backgroundColor: "red",
    // padding: 10,
    // borderRadius: 50,
  },
  image_category: {
    width: 30,
    height: 30,
    zIndex: 999,
  },
  text_category: {
    marginLeft: 20,
    fontSize: 20,
    color: "#002f34",
  },
});
