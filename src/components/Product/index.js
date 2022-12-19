import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Product({ data, addToCart }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.price}>
          R$ {data.price.toFixed(2).replace(".", ",")}
        </Text>
      </View>
      <TouchableOpacity style={styles.btnAdd} onPress={addToCart}>
        <Text style={styles.btnText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#dfdfdf",
    borderRadius: 2,
    marginBottom: 14,
    padding: 8,
    paddingBottom: 14,
    paddingtop: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
  },
  btnAdd: {
    paddingStart: 12,
    paddingEnd: 12,
    backgroundColor: "#168fff",
    paddingTop: 6,
    paddingBottom: 6,
    borderRadius: 4,
  },
});
