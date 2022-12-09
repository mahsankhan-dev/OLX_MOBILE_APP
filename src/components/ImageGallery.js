import { StyleSheet, ImageBackground, View } from "react-native";
import React from "react";

const ImageGallery = (props) => {
  console.log(props.route.params.URL);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: props.route.params.URL }}
        style={styles.image}
      />
    </View>
  );
};

export default ImageGallery;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 250,
  },
});
