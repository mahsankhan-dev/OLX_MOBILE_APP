import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import { getAdds } from "../config";

const Adds = ({ navigation }) => {
  const [userAdd, setUserAdd] = useState();

  useEffect(() => {
    const focusHandler = navigation.addListener("focus", () => {
      allUserAdds();
    });
    return focusHandler;
  }, []);

  useEffect(() => {
    // allUserAdds();
  }, []);
  const allUserAdds = async () => {
    const res = await getAdds();
    setUserAdd(res);
  };
  console.log("userAdd ----> ", userAdd);
  return (
    <>
      {userAdd ? (
        <ScrollView>
          <View style={styles.container}>
            {/* <Text>Recomended Adds</Text> */}
            {userAdd.map((item) => {
              return (
                <View style={styles.card} key={item.id}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("DetailScreen", {
                        itemId: item.id,
                      });
                    }}
                  >
                    <View style={styles.card_menu}>
                      <Image
                        source={{ uri: item.add.Url }}
                        style={styles.card_image}
                      />
                      <View style={styles.card_Item_flex}>
                        <Text style={styles.card_title}>{item.add.title}</Text>
                        <Entypo name="heart-outlined" size={24} color="black" />
                      </View>
                      <Text style={styles.card_price}>{item.add.price}</Text>
                      <View style={styles.card_location}>
                        <Text style={styles.card_location_text}>
                          {item.add.location}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </ScrollView>
      ) : (
        ""
      )}
    </>
  );
};

export default Adds;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    // height: "100%",
    padding: 5,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  card: {
    width: "50%",
    // height: "50%",
    padding: 5,
  },
  card_menu: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  card_image: {
    width: "100%",
    height: 200,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  card_Item_flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  card_title: {
    fontSize: 16,
    width: 120,
    overflow: "hidden",
    height: 20,
  },
  card_price: {
    fontSize: 18,
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    fontWeight: "bold",
  },
  card_location: {
    padding: 10,
    justifyContent: "flex-end",
    flex: 1,
  },
  card_location_text: {
    fontSize: 16,
    width: 190,
    height: 20,
    overflow: "hidden",
  },
});
