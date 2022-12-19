import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import CartProvider from "./src/contexts/CartContext";

import Router from "./src/Routes";

export default function App() {
  return (
    <NavigationContainer>
      <CartProvider>
        <Router />
      </CartProvider>
    </NavigationContainer>
  );
}
