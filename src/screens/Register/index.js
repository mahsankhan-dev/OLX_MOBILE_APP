import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect, useLayoutEffect, useState } from "react";
import image from "../../../assets/images/olxlogo2.png";
import axios from "axios";
import client from "../../app/Api/client";
import { userRegister } from "../../config";

const Register = ({ navigation }) => {
  const [input, setInput] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const updateInputs = (e, key) => {
    setInput({ ...input, [key]: e });
  };

  const { name, email, phone, password } = { ...input };
  const registerForm = async () => {
    if (!name || !email || !phone || !password) {
      return alert("Please fill all fileds...");
    } else {
      setLoading(true);
      try {
        await userRegister(input);
        navigation.navigate("Email");
      } catch (error) {
        setError("Failed to Signup");
        setTimeout(() => {
          setError("");
          setLoading(false);
        }, 2500);
      } finally {
        setLoading(fasle);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.arrow}>
        <MaterialCommunityIcons
          onPress={() => navigation.goBack()}
          name="arrow-left"
          size={24}
          color="#002f34"
        />
        <Text style={styles.arrow_text}>Register</Text>
      </View>
      <View style={styles.image_container}>
        <Image source={image} style={styles.olx_logo} />
        <Text style={styles.logo_text}>WELCOME TO OLX</Text>
        <Text style={{ color: "red", marginTop: 10 }}>{error}</Text>
      </View>
      <ScrollView>
        <View style={styles.input_container}>
          <TextInput
            style={styles.input}
            placeholder="Enter your name..."
            onChangeText={(e) => updateInputs(e, "name")}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your email..."
            keyboardType="email-address"
            onChangeText={(e) => updateInputs(e, "email")}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your number..."
            keyboardType="number-pad"
            onChangeText={(e) => updateInputs(e, "phone")}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your passsword"
            secureTextEntry={true}
            onChangeText={(e) => updateInputs(e, "password")}
          />
          {/* <TextInput
            style={styles.input}
            placeholder="Enter your confirm-passsword"
            secureTextEntry={true}
            onChangeText={(e) => updateInputs(e, "cpassword")}
          /> */}
        </View>
      </ScrollView>
      <View style={styles.button_container}>
        {loading ? (
          <ActivityIndicator size="50%" color="#d70f64" />
        ) : (
          <ScrollView>
            <TouchableOpacity style={styles.button} onPress={registerForm}>
              <Text style={styles.button_text}>Register</Text>
            </TouchableOpacity>
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Register;

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
    justifyContent: "center",
    alignItems: "center",
  },
  olx_logo: {
    height: 120,
    width: 210,
  },
  logo_text: {
    fontWeight: "bold",
    fontSize: 25,
    marginTop: "3%",
    color: "#002f34",
  },
  input_container: {
    padding: 20,
  },
  input: {
    padding: 10,
    paddingLeft: 25,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    color: "#000",
    borderColor: "#3a77ff",
  },
  button_container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#3a77ff",
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
