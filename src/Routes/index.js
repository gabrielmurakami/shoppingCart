import * as React from "react";

import Home from "../pages/Home";
import Cart from "../pages/Cart";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      defaultScreenOptions={Home}
    >
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{ headerTitle: "Meu carrinho" }}
      />
    </Stack.Navigator>
  );
}
