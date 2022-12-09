import {
  Button,
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import HomeFooter from "./HomeFooter";
import { auth, getUsers } from "../config";
import { firebase } from "../config";
import { doc, setDoc } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
import * as ImagePicker from "expo-image-picker";
import { db } from "../config";
import Images from "../../assets/images/avatar_1.png";
import { SimpleLineIcons } from "@expo/vector-icons";

const UserAccount = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState([{}]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   userInformation();
  // }, []);
  useEffect(() => {
    const focusHandler = navigation.addListener("focus", () => {
      userInformation();
    });
    return focusHandler;
  }, []);

  const userInformation = async () => {
    const response = await getUsers();
    setData(response);
  };

  console.log("document", data);

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  console.log("daasa", data[0].name);
  const ImageUpload = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
    });
    const source = { uri: result.uri };
    console.log("source", source);
    if (!result.cancelled) {
      setImage(source);
    }
  };

  const AddPost = async () => {
    const response = await fetch(image.uri);
    const blob = await response.blob();
    const filename = image.uri.substring(image.uri.lastIndexOf("/") + 1);
    var refrence = firebase.storage().ref().child(filename).put(blob);
    setLoading(true);
    try {
      refrence.on(
        "state_changed",
        (snapshot) => {},
        (err) => {
          console.log("err", err);
        },
        async () => {
          const URL = await refrence.snapshot.ref.getDownloadURL();
          console.log("URL", URL);
          const uid = auth.currentUser.uid;
          await setDoc(doc(db, "users", uid), { URL }, { merge: true });
          alert("Success");
          navigation.navigate("Home");
        }
      );
    } catch (error) {
      console.log("uploading error", error.message);
    } finally {
      setLoading(false);
    }
  };

  const logOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigation.navigate("LoginScreen");
      })
      .catch((error) => {
        // An error happened.
        alert("Signout Error ,", error.message);
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          onPress={() => navigation.navigate("Home")}
          name="arrow-back"
          size={24}
          color="black"
        />
        <Text style={styles.header_text}>Account</Text>
      </View>
      <View style={styles.logoutContainer}>
        <View>
          <TouchableOpacity onPress={logOut} style={styles.logout}>
            <SimpleLineIcons name="logout" size={24} color="#003034" />
            <Text
              style={{
                fontSize: 22,
                fontWeight: "500",
                color: "#003034",
                marginLeft: 10,
              }}
            >
              LOGOUT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ padding: 20 }}>
        <View style={styles.horizontal} />
      </View>
      <View style={styles.wrapper}>
        {data[0].URL ? (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ImageGallery", {
                URL: data[0].URL,
              })
            }
          >
            <Image source={{ uri: data[0].URL }} style={styles.image} />
          </TouchableOpacity>
        ) : (
          <Image source={Images} style={styles.image} />
        )}
        {!data[0].URL ? (
          <TouchableOpacity style={styles.buttons}>
            {!image ? (
              <Text style={styles.button} onPress={ImageUpload}>
                Add Profile Image
              </Text>
            ) : (
              <>
                {loading ? (
                  <ActivityIndicator size="50%" color="#d70f64" />
                ) : (
                  <Text style={styles.button} onPress={AddPost}>
                    Upload Profile
                  </Text>
                )}
              </>
            )}
          </TouchableOpacity>
        ) : null}
      </View>
      <View style={{ padding: 20 }}>
        <View style={styles.names}>
          <Text style={styles.texts}>Name: {data[0].name}</Text>
        </View>
        <View style={styles.names}>
          <Text style={styles.texts}>Email: {data[0].email}</Text>
        </View>
        <View style={styles.names}>
          <Text style={styles.texts}>Phone: {data[0].phone}</Text>
        </View>
      </View>

      <View style={{ justifyContent: "flex-end", flex: 1 }}>
        <HomeFooter navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default UserAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    padding: 20,
    fontSize: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  header_text: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  wrapper: {
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  buttons: {
    paddingTop: 20,
  },
  button: {
    backgroundColor: "#003034",
    color: "#fff",
    fontWeight: "500",
    padding: 10,
    borderRadius: 8,
  },
  names: {
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignItems: "center",
    marginTop: 30,
    borderRadius: 5,
    borderColor: '#003034"',
    backgroundColor: "#003034",
  },
  texts: {
    fontSize: 22,
    fontWeight: "500",
    color: "#fff",
  },
  horizontal: {
    width: "100%",
    height: 1,
    backgroundColor: "#003034",
  },
  logoutContainer: {
    padding: 20,
  },
  logout: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
