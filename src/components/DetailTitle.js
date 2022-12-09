import { StyleSheet, Text, View } from "react-native";
import React from "react";

const DetailTitle = ({
  price,
  iconHeart,
  title,
  location,
  date,
  iconLocation,
  condition,
  description,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.price}>
        <Text style={styles.price_title}>RS {price}</Text>
        <Text>{iconHeart}</Text>
      </View>
      <View style={styles.title}>
        <Text style={styles.title_text}>{title}</Text>
      </View>
      <View style={styles.location}>
        <View style={styles.location_row}>
          <Text>{iconLocation}</Text>
          <Text style={styles.location_title}>{location}</Text>
        </View>
        <Text style={styles.location_date}>{date}</Text>
      </View>
      <View
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "#000",
          marginTop: 20,
        }}
      />
      <View style={styles.detail}>
        <Text style={styles.detail_title}>Details</Text>
        <View style={styles.detail_row}>
          <Text style={styles.detail_conditon}>Condition</Text>
          <Text style={styles.detail_condition_text}>{condition}</Text>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "#000",
          marginTop: 20,
        }}
      />
      <View style={styles.detail}>
        <Text style={styles.detail_title}>Description</Text>
        <Text style={styles.description_text}>{description}</Text>
      </View>
    </View>
  );
};

export default DetailTitle;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  price: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  price_title: {
    color: "#003034",
    fontWeight: "bold",
    fontSize: 20,
  },
  title: {
    paddingTop: 10,
  },
  title_text: {
    fontSize: 20,
    color: "#003034",
  },
  location: {
    paddingTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  location_row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  location_title: {
    fontSize: 16,
    color: "#003034",
  },
  location_date: {
    color: "#003034",
    fontSize: 16,
  },
  detail: {
    paddingTop: 20,
  },
  detail_title: {
    fontSize: 20,
    color: "#003034",
  },
  detail_row: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detail_conditon: {
    fontSize: 20,
    fontWeight: "300",
    color: "#003034",
  },
  detail_condition_text: {
    color: "#003034",
    fontSize: 20,
    fontWeight: "300",
  },
  description_text: {
    color: "#003034",
    fontSize: 18,
    fontWeight: "300",
    marginTop: 5,
  },
});
