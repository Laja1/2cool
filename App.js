import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import store from "./store";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Landing from "./component/Landing";
import Landing2 from "./component/Landing2";

import First from "./component/First";
import BottomNav from "./component/NavigationScreens/BottomNav";
import Success from "./component/NavigationScreens/Success";
import Products from "./component/NavigationScreens/Products";
import Checkout from "./component/NavigationScreens/Checkout";
import Description from "./component/NavigationScreens/Description";
const Stack = createNativeStackNavigator();
const client = new ApolloClient({
  uri: "http://localhost:4200/",
  cache: new InMemoryCache(),
});
// https://toocoolserver.onrender.com/
// http://localhost:4200/
export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <Stack.Navigator>
            <Stack.Screen
              name="Landing"
              component={Landing}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Landing2"
              component={Landing2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BottomNav"
              component={BottomNav}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Description"
              component={Description}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Products"
              component={Products}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Checkout"
              component={Checkout}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="First"
              component={First}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Success"
              component={Success}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </ApolloProvider>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
