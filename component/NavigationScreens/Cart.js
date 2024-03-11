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

function Cart({ navigation, onDelete }) {
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
      <View style={tw`items-center  justify-center pt-15 `}>
        <Text style={tw`text-white text-[20px] font-bold italic`}>Cart.</Text>
      </View>
      {/* <Text style={tw`text-white w-[175px] text-[14px] font-bold`}>
        {Quantiy}
      </Text> */}
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

              <View style={tw`flex-row items-center  gap-1`}>
                <TouchableOpacity onPress={() => handleAddToCart(item.name)}>
                  <View
                    style={tw`w-[25.6px]  bg-[#121212]  shadow-xl rounded-md h-[20px] items-center justify-center`}
                  >
                    <Text style={tw`text-white `}>+</Text>
                  </View>
                </TouchableOpacity>
                <Text style={tw`text-black`}>{item.quantity}</Text>
                <TouchableOpacity onPress={() => handleSubtract(item.name)}>
                  <View
                    style={tw`w-[25.6px]  bg-[#121212]  shadow-xl rounded-md h-[20px] items-center justify-center`}
                  >
                    <Text style={tw`text-white `}>-</Text>
                  </View>
                </TouchableOpacity>
                <View style={tw`pl-[80px]  `}>
                  <View>
                    <TouchableOpacity onPress={() => handleDelete(item.id)}>
                      <Ionicons
                        name="trash-outline"
                        size={20}
                        color="#121212"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      ))}
      <View style={tw`flex-row justify-between px-8 pt-5`}>
        <Text style={tw`text-white font-bold text-[20px]`}>Sub-Total:</Text>
        <Text style={tw`text-white font-bold text-[20px]`}>{totalPrice}</Text>
      </View>
      <View style={tw`flex-row justify-between px-8 pt-2`}>
        <Text style={tw`text-white font-bold text-[20px]`}>Shipping Fee:</Text>
        <Text style={tw`text-white font-bold text-[20px]`}>₦2000</Text>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 10,
        }}
      >
        <View
          style={{
            borderColor: "white",
            borderTopWidth: 0.5,
            width: 330,
          }}
        ></View>
      </View>
      <View style={[tw`flex-row justify-between px-8 pt-2 `]}>
        <Text style={tw`text-white font-bold text-[20px]`}>Total:</Text>
        <Text style={tw`text-white font-bold text-[20px]`}>₦{FinalTotal}</Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Checkout", { cartItems, totalPrice })
        }
      >
        <View style={tw`items-center pt-20`}>
          <View
            style={tw`w-[205.6px] shadow-xl border-[0.2px] bg-[#4b9cde]   shadow-xl rounded-lg h-[60px] items-center justify-center`}
          >
            <Text style={tw`text-white text-[15px]`}>Continue to Checkout</Text>
          </View>
        </View>
      </TouchableOpacity>
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

export default Cart;
