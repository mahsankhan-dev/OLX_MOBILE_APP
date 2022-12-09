import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  ActivityIndicator,
  ScrollView,
  View,
} from "react-native";
import React, { useEffect, useState, useLayoutEffect } from "react";
import { getAddById, getuserData, getUserProfileAdd } from "../config";
import DetailBackgroundImage from "./DetailBackgroundImage";
import DetailTitle from "./DetailTitle";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import DetailUserImage from "./DetailUserImage";
import DetailFooter from "./DetailFooter";

const DetailScreen = ({ route, navigation }) => {
  const [detail, setDetail] = useState();
  const [seller, setSeller] = useState({});
  const [profile, setProfile] = useState({});

  const { itemId } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  useEffect(() => {
    getAddId();
  }, []);

  const getAddId = async () => {
    const res = await getAddById(itemId);
    setDetail(res);
    console.log("resdata", res);
    getSellerData(res.user);
    getProfile(res.user);
  };

  const getSellerData = async (user) => {
    try {
      const response = await getuserData(user);
      setSeller(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getProfile = async (user) => {
    try {
      const response = await getUserProfileAdd(user);
      setProfile(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  console.log("My seller ", seller);
  console.log("My Profile ", profile);

  console.log();
  if (!detail) {
    return (
      <ActivityIndicator
        style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        size="large"
        color="#003034"
      />
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <DetailBackgroundImage image={detail.add.Url} navigation={navigation} />
      <ScrollView>
        <DetailTitle
          price={detail.add.price}
          title={detail.add.title}
          location={detail.add.location}
          date={detail.add.date}
          condition={detail.add.condition}
          iconHeart={<AntDesign name="hearto" size={24} color="#003034" />}
          iconLocation={<EvilIcons name="location" size={24} color="#003034" />}
          description={detail.add.description}
        />
        <DetailUserImage
          seller={seller}
          navigation={navigation}
          profile={profile}
        />
      </ScrollView>
      <DetailFooter seller={seller} />
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
