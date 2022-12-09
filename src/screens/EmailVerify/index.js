import React, { useState, useLayoutEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";
import avatar from "../../../assets/images/avatar_1.png";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { userSignIn } from "../../config";

const Email = ({ navigation }) => {
  const [message, setMessage] = useState();
  const [newMessage, setNewMessage] = useState();
  const [error, setError] = useState();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const updateInputs = (e, key) => {
    setMessage({ ...message, [key]: e });
  };

  const nextPage = () => {
    setNewMessage(message);
  };

  const goBack = () => {
    setNewMessage("");
    setMessage("");
  };

  const loginForm = async () => {
    const { email, password } = message;
    try {
      await userSignIn(email, password);
      navigation.navigate("Home");
    } catch (error) {
      setError("Failed to sign in");
      setTimeout(() => {
        setError("");
      }, 2500);
    }
  };
  return (
    <>
      {!newMessage ? (
        <SafeAreaView style={styles.container}>
          <View style={styles.arrow}>
            <MaterialCommunityIcons
              onPress={() => navigation.goBack()}
              name="arrow-left"
              size={24}
              color="#002f34"
            />
            <Text style={styles.arrow_text}>Login</Text>
          </View>
          <View style={styles.image_container}>
            <View style={styles.register_container}>
              <Image source={avatar} style={styles.image} />
              <Text
                onPress={() => navigation.navigate("Register")}
                style={styles.no_account}
              >
                dont have an account !
              </Text>
            </View>
            <Text style={styles.text}>Enter your email</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              onChangeText={(e) => updateInputs(e, "email")}
            />
          </View>
          <View style={styles.button_container}>
            <TouchableOpacity
              onPress={nextPage}
              disabled={!message}
              style={!message ? styles.buttons : styles.button}
            >
              <Text style={styles.button_text}>Next</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      ) : (
        <SafeAreaView style={styles.container}>
          <View style={styles.arrow}>
            <MaterialCommunityIcons
              onPress={goBack}
              name="arrow-left"
              size={24}
              color="black"
            />
            <Text style={styles.arrow_text}>Password</Text>
          </View>
          <View style={styles.image_container}>
            <Image source={avatar} style={styles.image} />
            <Text style={styles.text}>Enter your password</Text>
            <View style={styles.email_container}>
              <Text style={styles.email_text}>HI, </Text>
              <Text style={styles.email_texts}>{message.email} </Text>
            </View>
            <Text style={{ color: "red" }}>{error}</Text>
            <TextInput
              onChangeText={(e) => updateInputs(e, "password")}
              secureTextEntry={true}
              placeholder="Enter your passsword"
              style={styles.inputs}
            />
          </View>
          <View style={styles.button_container}>
            <TouchableOpacity style={styles.button} onPress={loginForm}>
              <Text style={styles.button_text}>Login</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      )}
    </>
  );
};

export default Email;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  arrow: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  arrow_text: {
    paddingLeft: "5%",
    fontSize: 20,
    fontWeight: "bold",
    color: "#002f34",
  },
  image_container: {
    padding: 10,
    paddingTop: 20,
  },
  image: {
    width: 70,
    height: 70,
  },
  text: {
    paddingTop: 20,
    fontSize: 25,
    paddingBottom: 15,
    color: "#002f34",
  },
  email_container: {
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    paddingLeft: 10,
  },
  email_text: {
    fontSize: 15,
    paddingBottom: 15,
    color: "gray",
  },
  email_texts: {
    fontSize: 15,
    fontWeight: "bold",
    paddingBottom: 15,
    color: "darkgreen",
  },
  input: {
    padding: 10,
    paddingLeft: 25,
    borderWidth: 1,
    borderRadius: 5,
  },
  register_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  no_account: {
    padding: 10,
    fontWeight: "bold",
    fontSize: 15,
    color: "green",
  },
  inputs: {
    padding: 10,
    paddingLeft: 25,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    color: "#000",
  },
  button_container: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 20,
    alignItems: "center",
  },
  buttons: {
    backgroundColor: "gray",
    padding: 15,
    width: 350,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#002f34",
    padding: 15,
    width: 350,
    borderRadius: 5,
  },
  button_text: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
