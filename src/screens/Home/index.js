import {
  Image,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import HomeHeader from "../../components/HomeHeader";
import Location from "../../components/Location";
import Adds from "../../components/Adds";
import HomeFooter from "../../components/HomeFooter";
import { getAdds, getSearchAdd } from "../../config";
import { Entypo } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  const [userAdd, setUserAdd] = useState();
  const [search, setSearch] = useState();
  const [showSearchAdd, setShowSearchAdd] = useState([]);
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  useEffect(() => {
    allUserAdds();
    searchData();
  }, []);

  const searchData = async () => {
    const r = await getSearchAdd(search);
    setShowSearchAdd(r);
  };

  useEffect(() => {
    if (search) searchData();
  }, [search]);

  console.log("showSearchAdd", showSearchAdd);

  const allUserAdds = async () => {
    const res = await getAdds();
    setUserAdd(res);
  };
  console.log("userAdd ----> ", userAdd);

  const isEmpty = () => search && showSearchAdd && !showSearchAdd.length;
  const NoResult = () => (
    <View className="no_result">
      <Text>No Results Found!</Text>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
      <Location search={search} setSearch={setSearch} navigation={navigation} />
      {isEmpty() && <NoResult />}
      {search ? (
        <>
          <ScrollView>
            <View style={styles.containers}>
              {/* <Text>Recomended Adds</Text> */}
              {showSearchAdd.map((item) => {
                return (
                  <View style={styles.card} key={item.user}>
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
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </>
      ) : (
        <Adds navigation={navigation} />
      )}
      <View style={styles.footer}>
        <HomeFooter navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  footer: {
    // flex: 1,
    justifyContent: "flex-end",
  },
  containers: {
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
