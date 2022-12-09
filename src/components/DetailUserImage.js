import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import image from "../../assets/images/avatar_1.png";
import { MaterialIcons } from "@expo/vector-icons";
import { getuserData } from "../config";

const DetailUserImage = ({ seller, navigation, profile }) => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {seller.URL ? (
          <Image source={{ uri: seller.URL }} style={styles.images} />
        ) : (
          <Image source={image} style={styles.image} />
        )}
        <View style={styles.texts}>
          <Text style={styles.user_name}>{seller.name}</Text>
          <Text style={styles.user_year}>Member since Sep {year}</Text>
          <TouchableOpacity style={styles.TouchableOpacity}>
            <Text
              style={styles.TouchableOpacity_text}
              onPress={() => {
                navigation.navigate("UserProfile", {
                  sellerData: seller,
                  profileData: profile,
                });
              }}
            >
              SEE PROFILE
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      </View>
    </View>
  );
};

export default DetailUserImage;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
  },
  images: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  texts: {
    paddingLeft: 20,
  },
  user_name: {
    fontSize: 20,
    fontWeight: "500",
    color: "#003034",
  },
  user_year: {
    fontSize: 16,
    color: "#003034",
    marginTop: 5,
  },
  TouchableOpacity: {
    marginTop: 5,
  },
  TouchableOpacity_text: {
    color: "#4e6caa",
    fontSize: 20,
    fontWeight: "500",
  },
});
