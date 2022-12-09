import {
  Alert,
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import client from "../app/Api/client";
import { StackActions } from "@react-navigation/native";

const ImageLibrary = (props) => {
  const [profileImage, setProfileImage] = useState();
  const { token } = props.route.params;

  const ImageUpload = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
    }

    if (status === "granted") {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
      });
      if (!result.cancelled) {
        setProfileImage(result.uri);
      }
    }
  };

  const UploadImage = async () => {
    const formData = new FormData();
    formData.append("profile", {
      name: new Date() + "_profile",
      uri: profileImage,
      type: "image/jpg",
    });
    try {
      const res = await client.post("/upload-profile", formData, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
          authorization: `JWT ${token}`,
        },
      });
      if (res.data.success) {
        props.navigation.dispatch(StackActions.replace("Home"));
      }
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity onPress={ImageUpload} style={styles.uploadBtn}>
          {profileImage ? (
            <Image
              source={{ uri: profileImage }}
              style={{ width: "100%", height: "100%" }}
            />
          ) : (
            <Text style={styles.uploadBtn_Text}>Upload Profile Image</Text>
          )}
        </TouchableOpacity>
      </View>
      {profileImage ? (
        <View>
          <TouchableOpacity onPress={UploadImage} style={styles.postBtn}>
            <Text style={styles.postBtn_Text}>Upload Image</Text>
          </TouchableOpacity>
        </View>
      ) : null}
      <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
        <Text>Skip</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ImageLibrary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // justifyContent: "center",
    alignItems: "center",
  },
  uploadBtn: {
    height: 150,
    width: 150,
    borderRadius: 150 / 2,
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "dashed",
    borderWidth: 1,
    overflow: "hidden",
  },
  uploadBtn_Text: {
    fontSize: 16,
    textAlign: "center",
    opacity: 0.5,
    fontWeight: "bold",
  },
  postBtn: {
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    fontWeight: "bold",
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 5,
  },
  postBtn_Text: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});
