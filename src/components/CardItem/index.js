import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function CardItem({ data, addAmount, removeAmount }) {
  const [amount, setAmount] = useState(data.amount);

  function handleIncrease() {
    setAmount((item) => item + 1);
    addAmount();
  }

  function handleDecrease() {
    removeAmount();
    if (amount === 0) {
      setAmount(0);
      return;
    }

    setAmount((item) => item - 1);
  }

  return (
    <View style={styles.container}>
      <View style={{ padding: 10 }}>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.price}>
          R$ {(data.price * amount).toFixed(2).replace(".", ",")}
        </Text>
      </View>
      <View style={styles.amountContainer}>
        <TouchableOpacity style={styles.buttonAdd} onPress={handleDecrease}>
          <Text>-</Text>
        </TouchableOpacity>
        <Text style={styles.amount}>{amount}</Text>
        <TouchableOpacity style={styles.buttonAdd} onPress={handleIncrease}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#dfdfdf",
    borderRadius: 2,
    marginBottom: 14,
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  price: {
    fontSize: 16,
    marginTop: 5,
  },
  amountContainer: {
    padding: 10,
    marginTop: 14,
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonAdd: {
    backgroundColor: "#168fff",
    padding: 6,
    paddingLeft: 14,
    paddingRight: 14,
    borderRadius: 4,
  },
  amount: {
    marginLeft: 14,
    marginRight: 14,
  },
});
