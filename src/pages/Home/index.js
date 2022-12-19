import React, { useState, useContext } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  FlatList,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { CartContext } from "../../contexts/CartContext";

import List from "../../components/Product";

export default function Home() {
  const navigation = useNavigation();

  const { cart, addItemCart } = useContext(CartContext);

  const [products, setProducts] = useState([
    {
      id: "1",
      name: "Coca Cola",
      price: 19.9,
    },
    {
      id: "2",
      name: "Chocolate",
      price: 6.5,
    },
    {
      id: "3",
      name: "Queijo 500g",
      price: 15,
    },
    {
      id: "4",
      name: "Banana 1kg",
      price: 10,
    },
    {
      id: "5",
      name: "Tomate 1kg",
      price: 9,
    },
  ]);

  function handleAddCart(item) {
    addItemCart(item);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.carContent}>
        <Text style={styles.title}>Lista Produtos</Text>
        <TouchableOpacity
          style={styles.cardBtn}
          onPress={() => navigation.navigate("Cart")}
        >
          {cart.length >= 1 && (
            <View style={styles.dot}>
              <Text style={styles.dotText}>{cart?.length}</Text>
            </View>
          )}
          <Feather name="shopping-cart" size={30} color="#000" />
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.list}
        data={products}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <List data={item} addToCart={() => handleAddCart(item)} />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    paddingEnd: 14,
    paddingStart: 14,
  },
  carContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  cardBtn: {},
  dot: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    position: "absolute",
    zIndex: 99,
    bottom: -2,
    left: -4,
  },
  dotText: {
    fontSize: 12,
  },
});
