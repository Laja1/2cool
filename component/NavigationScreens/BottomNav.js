import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import tw from "twrnc";
import Home from "./Home";
import Cart from "./Cart";
import { useSelector, useDispatch } from "react-redux";
import Profile from "./Profile";
const Tab = createBottomTabNavigator();
import Svg, { Path } from "react-native-svg";
export default function BottomNav({ navigation }) {
  const cartItems = useSelector((state) => state.cart.items);
  const Quantiy = cartItems.length;
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#4b9cde",
        tabBarInactiveTintColor: "#ffffff",

        tabBarStyle: {
          backgroundColor: "#121212",
          height: 70,
          borderTopWidth: 0.5,
          borderBottomWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,

          tabBarIcon: () => (
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              class="w-4 h-2"
              style={tw`w-5 h-5`}
            >
              <Path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
              />
            </Svg>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={({ focused }) => ({
          headerShown: false,
          tabBarBadge: Quantiy,
          tabBarBadgeStyle: { backgroundColor: "#4b9cde" },
          tabBarIcon: () => (
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              class="w-6 h-6"
              style={tw`w-5 h-5`}
            >
              <Path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </Svg>
          ),
        })}
      />
      <Tab.Screen
        name="My Orders"
        component={Profile}
        options={{
          headerShown: false,

          tabBarIcon: () => (
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              class="w-6 h-6"
              style={tw`w-5 h-5`}
            >
              <Path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </Svg>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
