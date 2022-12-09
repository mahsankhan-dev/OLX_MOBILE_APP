import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Share,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { MaterialIcons, EvilIcons } from "@expo/vector-icons";

const DetailBackgroundImage = ({ image, navigation }) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: image,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ImageGallery", {
            URL: image,
          })
        }
      >
        <ImageBackground
          source={{ uri: image }}
          resizeMode="cover"
          style={styles.header_image}
        >
          <View style={styles.background_icon}>
            <MaterialIcons
              onPress={() => {
                navigation.navigate("Home");
              }}
              name="keyboard-arrow-left"
              size={34}
              color="#fff"
            />
            <EvilIcons
              onPress={onShare}
              name="share-google"
              size={34}
              color="#fff"
            />
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default DetailBackgroundImage;

const styles = StyleSheet.create({
  header_image: {
    width: "100%",
    height: 250,
  },
  background_icon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
});
