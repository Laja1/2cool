import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Modal,
  Image,
  StatusBar,
  Alert,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import tw from "twrnc";

import Svg, { Path } from "react-native-svg";
import axios from "axios";
function Success({ navigation, route }) {
  const [isModal, setIsModal] = useState(false);
  const [emailNumber, setEmailNumber] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const { cartItems, totalPrice } = route.params;
  const handleClicked = () => {
    setIsModal(true);
  };

  const handleSubmit = () => {
    axios
      .post("https://cool-b2566-default-rtdb.firebaseio.com/", {
        // cartItems,
        emailNumber,
        name,
        address,
        city,
        state,
      })
      .then((res) => console.log(res, "saved"))
      .catch((err) => console.log(err));
  };

  return (
    <ScrollView style={tw`  bg-[#121212] h-full w-full`}>
      <View style={tw`items-center  justify-center pt-10`}>
        <StatusBar barStyle="light-content" />
        <View style={tw`flex-row items-center  gap-30 justify-center  pb-3`}>
          <View style={tw` items-center justify-center h-full w-full`}>
            <View
              style={tw`flex-row items-center  gap-30 justify-center pr-[150px] pb-3`}
            >
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Checkout", { cartItems, totalPrice })
                }
              >
                <View style={tw`pl-5`}>
                  <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="#4b9cde"
                    class="w-5 h-5"
                    style={tw`w-4 h-4`}
                  >
                    <Path
                      fill-rule="evenodd"
                      d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z"
                      clip-rule="evenodd"
                    />
                  </Svg>
                </View>
              </TouchableOpacity>

              <View style={tw` items-center `}>
                <Text style={tw`text-white text-[20px] font-semibold italic`}>
                  Payment
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={tw`items-center justify-center pt-10`}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#4b9cde"
            class="w-6 h-6"
            style={tw`w-[150px] h-[150px]`}
          >
            <Path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
            />
          </Svg>
          <Text style={tw`text-[20px] font-bold text-white`}>
            Payment Successful!
          </Text>
          <Text style={tw`text-[15px]  text-[#ffffff40]`}>
            Thank you for your purchase
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("My Orders", { cartItems });
            handleSubmit();
          }}
          style={tw`pt-25`}
        >
          <View
            style={tw`w-[190.6px] shadow-xl bg-[#4b9cde]   shadow-xl rounded-lg h-[60px] items-center justify-center flex-row gap-2`}
          >
            <Text style={tw`text-white`}>View Order</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default Success;
