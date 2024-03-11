import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import tw from "twrnc";
import Svg, { Path } from "react-native-svg";

import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  addToCart,
  addQuantity,
  subtractQuantity,
} from "../../store";
import Ionicons from "@expo/vector-icons/Ionicons";

function Profile({ navigation, onDelete }) {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [showDeleteIcon, setShowDeleteIcon] = useState(false);

  useEffect(() => {}, [cartItems]);

  const handleSwipeLeft = () => {
    setShowDeleteIcon(true);
  };

  const handleSwipeRight = () => {
    setShowDeleteIcon(false);
  };

  const handleAddToCart = (name) => {
    dispatch(addQuantity(name));
  };

  const handleSubtract = (name) => {
    dispatch(subtractQuantity(name));
  };
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const Quantiy = cartItems.length;
  const handleDelete = (itemId) => {
    dispatch(removeFromCart(itemId));
  };
  const FinalTotal = totalPrice + 2000;
  return (
    <ScrollView style={tw`  bg-[#121212] h-full w-full`}>
      <StatusBar barStyle="light-content" />

      <View style={tw` items-center  pt-20 justify-center  pb-3`}>
        <Text style={tw`text-white text-[20px] font-semibold italic`}>
          My Orders
        </Text>
      </View>

      {cartItems.map((item, index) => (
        <View key={index} style={tw`flex-row  p-3 items-center`}>
          <View
            style={tw`flex-row gap-2 items-center border-[0.2px] w-[360px] h-[160px] bg-[#ffffff] rounded-lg`}
          >
            <Image
              source={{ uri: item.imageUrl }}
              style={tw`w-[160px] h-[160px] rounded-lg`}
            />
            <View style={tw`flex-col gap-2`}>
              <Text style={tw`text-black w-[175px] text-[14px] font-bold`}>
                {item.name}
              </Text>
              <Text style={tw`text-black text-[14px]`}>₦{item.price}</Text>
              <Text style={tw`text-black text-[14px]`}>
                Quantity: {item.quantity}
              </Text>
              <Text style={tw`text-black `}>Size: {item.size}</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",

    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Profile;
