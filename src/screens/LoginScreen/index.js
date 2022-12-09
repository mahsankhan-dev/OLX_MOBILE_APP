import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  Platform,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useLayoutEffect } from "react";
import image from "../../../assets/images/olxlogo.png";
import GoogleComponent from "../../components/GoogleComponent";
import google from "../../../assets/images/google-icon.png";
import FacebookComponent from "../../components/FacebookComponent";
import EmailComponent from "../../components/EmailComponent";
import PhoneComponent from "../../components/PhoneComponent";
import {
  Entypo,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
const iconFacebook = (
  <Entypo name="facebook-with-circle" size={24} color="#4267b2" />
);
const iconEmail = (
  <MaterialCommunityIcons name="email-outline" size={24} color="#002f34" />
);
const IconPhone = (
  <SimpleLineIcons name="screen-smartphone" size={24} color="#002f34" />
);

const Login = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  const nav = navigation;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cross}>
        {/* <TouchableOpacity>
          <Entypo name="cross" size={34} color="#002f34" />
        </TouchableOpacity> */}
      </View>
      <View style={styles.image_container}>
        <Image source={image} style={styles.olx_logo} />
        <Text style={styles.logo_text}>WELCOME TO OLX</Text>
        <Text style={styles.logo_subtext}>
          The trusted community of buyers and sellers
        </Text>
        <View>
          {/* <GoogleComponent Icon={google} Title={"Continue with Google"} />
          <FacebookComponent
            Icon={iconFacebook}
            Title={"Continue with Facebook"}
          /> */}
          <EmailComponent
            nav={nav}
            Icon={iconEmail}
            Title={"Continue with Email"}
          />
          {/* <PhoneComponent Icon={IconPhone} Title={"Continue with Phone"} /> */}
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footer_subtext}>
          If you continue, you are accepting
        </Text>
        <Text style={styles.footer_subtexts}>
          <Text style={styles.span}>OLX Terms and Conditions</Text> and Privacy
          Policy
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  cross: {
    padding: 20,
  },
  image_container: {
    justifyContent: "center",
    alignItems: "center",
  },
  olx_logo: {
    height: 100,
    width: 100,
  },
  logo_text: {
    fontWeight: "bold",
    fontSize: 25,
    marginTop: "5%",
    color: "#002f34",
  },
  logo_subtext: {
    marginTop: "5%",
    fontSize: 20,
    textAlign: "center",
    width: 300,
    color: "#002f34",
    marginBottom: "5%",
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: "5%",
  },
  footer_subtext: {
    fontSize: 15,
    justifyContent: "center",
    alignItems: "center",
    color: "#002f34",
  },
  footer_subtexts: {
    fontSize: 15,
    justifyContent: "center",
    alignItems: "center",
    color: "#002f34",
  },
  span: {
    fontWeight: "bold",
  },
});
