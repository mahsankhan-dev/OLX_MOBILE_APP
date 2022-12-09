import { Linking, Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import DetailFooterButton from "./DetailFooterButton";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const DetailFooter = ({ seller }) => {
  let phoneNumber = "";

  const callNumber = () => {
    if (Platform.OS === "android") {
      phoneNumber = `tel:${seller.phone}`;
    } else {
      phoneNumber = `telprompt:${seller.phone}`;
    }

    Linking.openURL(phoneNumber);
  };
  const messageNumber = () => {
    const url =
      Platform.OS === "android"
        ? `sms:${seller.phone}?body=yourMessage`
        : `sms:${seller.phone}`;

    Linking.canOpenURL(url)
      .then((supported) => {
        if (!supported) {
          console.log("Unsupported url: " + url);
        } else {
          return Linking.openURL(url);
        }
      })
      .catch((err) => console.error("An error occurred", err));
  };

  const whatsappNumber = () => {
    Linking.openURL(
      `https://api.whatsapp.com/send?phone=92${seller.phone}&text=%0A`
    );
  };

  return (
    <View style={styles.footer}>
      <View style={styles.footer_wrapper}>
        <DetailFooterButton
          Title={"Chat"}
          Icon={
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={24}
              color="#fff"
            />
          }
          onPress={whatsappNumber}
        />
        <DetailFooterButton
          Title={"Call"}
          Icon={<Ionicons name="call-outline" size={24} color="#fff" />}
          onPress={callNumber}
        />
        <DetailFooterButton
          Title={"SMS"}
          Icon={<FontAwesome name="envelope-o" size={24} color="#fff" />}
          onPress={messageNumber}
        />
      </View>
    </View>
  );
};

export default DetailFooter;

const styles = StyleSheet.create({
  footer: {
    // flex: 1,
    // justifyContent: "flex-end",
  },
  footer_wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
