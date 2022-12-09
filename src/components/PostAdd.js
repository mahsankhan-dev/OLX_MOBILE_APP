import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import AddImages from "./AddImages";
import * as ImagePicker from "expo-image-picker";
import { firebase } from "../config";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config";
import { LogBox } from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const PostAdd = ({ navigation }) => {
  const [input, setInput] = useState();
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState();

  LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
  LogBox.ignoreAllLogs();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(uid);
      } else {
        //User is signed out}
      }
    });
  }, []);

  const updateInput = (e, key) => {
    setInput({ ...input, [key]: e });
  };
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

  const { location, price, condition, title, description } = { ...input };
  const AddPost = async () => {
    if ((!location, !price, !condition, !title, !description)) {
      alert("Please fill all fileds...");
    } else {
      setLoading(true);
      const response = await fetch(image.uri);
      const blob = await response.blob();
      const filename = image.uri.substring(image.uri.lastIndexOf("/") + 1);
      var refrence = firebase.storage().ref().child(filename).put(blob);
      const date = new Date().toLocaleDateString({
        year: "numeric",
        month: "numeric",
        day: "numeric",
      });
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
            await addDoc(collection(db, "Add"), {
              add: { ...input, Url: URL, date },
              user,
            });
            alert("Success");
            navigation.navigate("Home");
          }
        );
      } catch (error) {
        console.log("uploading error", error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Entypo
          name="cross"
          size={30}
          color="#002f34"
          style={styles.header_icon}
          onPress={() => navigation.navigate("Home")}
        />
        <Text style={styles.header_text}>Include some details</Text>
      </View>
      <AddImages ImageUpload={ImageUpload} />
      <ScrollView>
        <View style={styles.banner}>
          <View>
            <Text style={styles.banner_text}>Location *</Text>
            <TextInput
              style={styles.banner_input}
              onChangeText={(e) => updateInput(e, "location")}
            />
          </View>
          <View style={styles.border} />
        </View>
        <View style={styles.banner}>
          <View>
            <Text style={styles.banner_text}>Price *</Text>
            <TextInput
              style={styles.banner_input}
              onChangeText={(e) => updateInput(e, "price")}
            />
          </View>
          <View style={styles.border} />
        </View>
        <View style={styles.banner}>
          <View>
            <Text style={styles.banner_text}>Condition *</Text>
            <TextInput
              style={styles.banner_input}
              onChangeText={(e) => updateInput(e, "condition")}
            />
          </View>
          <View style={styles.border} />
        </View>
        <View style={styles.banner}>
          <View>
            <Text style={styles.banner_text}>Ad title *</Text>
            <TextInput
              style={styles.banner_input}
              onChangeText={(e) => updateInput(e, "title")}
            />
          </View>
          <View style={styles.border} />
        </View>
        <View style={styles.banner}>
          <View>
            <Text style={styles.banner_text}>
              Describe what you are selling *
            </Text>
            <TextInput
              style={styles.banner_input}
              onChangeText={(e) => updateInput(e, "description")}
            />
          </View>
        </View>
      </ScrollView>
      {!loading ? (
        <View style={styles.footer}>
          <TouchableOpacity style={styles.footer_wrapper} onPress={AddPost}>
            <Text style={styles.footer_text}>Post</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.loader}>
          <ActivityIndicator size="100%" color="#d70f64" />
        </View>
      )}
    </SafeAreaView>
  );
};

export default PostAdd;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  header_icon: {
    paddingRight: 20,
  },
  header_text: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#002f34",
  },
  banner: {
    padding: 20,
  },
  banner_text: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#218386",
  },
  banner_input: {
    padding: 10,
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: "#218386",
    borderRadius: 5,
  },
  border: {
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    marginTop: 30,
  },
  footer: {
    padding: 20,
  },
  footer_wrapper: {
    backgroundColor: "#218386",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  footer_text: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff",
  },
  loader: {
    justifyContent: "flex-end",
    height: "10%",
  },
});
