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

import tw from "twrnc";
import { Paystack } from "react-native-paystack-webview";

function First({ navigation, route }) {
  const [isModal, setIsModal] = useState(false);
  const { cartItems, totalPrice, email } = route.params;
  const handleClicked = () => {
    setIsModal(true);
  };

  // const handleSubmit = () => {
  //   axios
  //     .post("https://cool-b2566-default-rtdb.firebaseio.com/", {
  //       // cartItems,
  //       emailNumber,
  //       name,
  //       address,
  //       city,
  //       state,
  //     })
  //     .then((res) => console.log(res, "saved"))
  //     .catch((err) => console.log(err));
  // };

  return (
    <ScrollView style={tw`  bg-[#121212] h-full w-full`}>
      <View style={tw`items-center  justify-center pt-15 `}>
        <StatusBar barStyle="light-content" />
        <View style={{ flex: 1 }}>
          <Paystack
            paystackKey="open your paystackaccount"
            amount={totalPrice}
            billingEmail={email}
            activityIndicatorColor="black"
            onCancel={(e) => {
              navigation.navigate("Checkout", { cartItems, totalPrice, email });
              Alert.alert("Payment Failed");
            }}
            onSuccess={(res) => {
              navigation.navigate("Success", { cartItems, totalPrice });

              Alert.alert("Payment Successful");
            }}
            autoStart={true}
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default First;
