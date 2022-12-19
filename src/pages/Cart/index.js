import React, { useContext } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

import CardItem from "../../components/CardItem";

import { CartContext } from "../../contexts/CartContext";

export default function Cart() {
  const { cart, addItemCart, removeItemCart, total } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        ListEmptyComponent={() => (
          <Text style={{ textAlign: "center" }}>
            Nenhum item no seu carrinho...
          </Text>
        )}
        renderItem={({ item }) => (
          <CardItem
            data={item}
            addAmount={() => addItemCart(item)}
            removeAmount={() => removeItemCart(item)}
          />
        )}
        ListFooterComponent={() => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.total}>Total</Text>
            <Text style={styles.total}>
              R$ {total >= 1 ? total.toFixed(2).replace(".", ",") : "0"}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    paddingStart: 14,
    paddingEnd: 14,
    paddingTop: 14,
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 24,
  },
});
