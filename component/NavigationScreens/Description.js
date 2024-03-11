import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  Image,
  StatusBar,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Swiper from "react-native-swiper";
import Svg, { Path } from "react-native-svg";
import tw from "twrnc";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../store";

function Description({ navigation, route }) {
  const [selectedSize, setSelectedSize] = useState(null);
  const [showPicker, setShowPicker] = useState(false);

  const handleValueChange = (itemValue, itemIndex) => {
    setSelectedSize(itemValue);
    setShowPicker(false); // Hide the picker after selection
  };

  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const { productData, name, slug, motto } = route.params;

  const handleAddToCart = ({ productData, selectedSize }) => {
    dispatch(addToCart({ productData, selectedSize }));
  };
  const Quantiy = cartItems.length;
  return (
    <ScrollView style={tw` bg-[#121212] h-full w-full `}>
      <StatusBar barStyle="light-content" />
      <View style={tw`items-center justify-evenly`}>
        <View
          style={tw`flex-row items-center justify-between gap-18  pt-15 pb-3`}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Products", { slug: slug })}
          >
            <View style={tw``}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                stroke="#4b9cde"
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
              {name}.
            </Text>
          </View>
          <View style={tw`mb-2 `}>
            <View style={tw`m-2 `}>
              <View
                style={tw`bg-[#EEE5DB] absolute rounded-full h-4 w-4 items-center justify-center`}
              >
                <Text style={tw`text-black text-[10px]`}>{Quantiy}</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
                style={tw`w-4 h-4`}
              >
                <Path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </Svg>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={tw` items-center  justify-center `}>
        <View style={styles.container}>
          <Swiper autoplay autoplayTimeout={3} showsPagination={false}>
            {productData.images.map((image, index) => (
              <View style={styles.slide} key={index}>
                <Image source={{ uri: image }} style={styles.image} />
              </View>
            ))}
          </Swiper>
        </View>
      </View>
      <View style={tw` items-center pt-2 px-5 justify-center flex-row`}>
        <Text style={tw`text-white text-[14px]  italic`}>{motto}</Text>
      </View>
      <View
        style={tw`pl-[20px] items-center pt-3 px-5  pb-3 justify-between flex-row`}
      >
        <Text style={tw`text-white text-[18px] font-semibold italic`}>
          {productData.brandProductName}
        </Text>
        <Text style={tw`text-white font-bold text-[17px] `}>
          ₦{productData.brandProductPrice}
        </Text>
      </View>

      {showPicker && (
        <Picker
          selectionColor="#EEE5DB"
          dropdownIconColor="#EEE5DB"
          selectedValue={selectedSize}
          onValueChange={handleValueChange}
        >
          <Picker.Item label="S" value="S" color="white" />
          <Picker.Item label="M" value="M" color="white" />
          <Picker.Item label="L" value="L" color="white" />
          <Picker.Item label="XL" value="XL" color="white" />
        </Picker>
      )}

      {/* Show the selected value when not selected */}
      {!showPicker && (
        <View style={tw`border border-[#EEE5DB]  rounded p-5 `}>
          <View style={tw`flex-row  justify-between px-10 items-center`}>
            <TouchableOpacity onPress={() => setShowPicker(true)}>
              <Text style={tw`text-[#4b9cde]  `}>Select Size</Text>
            </TouchableOpacity>
            <View style={tw`border-l-2 h-5 border-[#EEE5DB]`}>
              <Text></Text>
            </View>
            <View>
              <Text style={tw`text-[#ffffff]  `}>{selectedSize || "Size"}</Text>
            </View>
          </View>
        </View>
      )}

      <TouchableOpacity
        onPress={() => {
          handleAddToCart({ productData, selectedSize });
          Alert.alert("Added To Cart");
        }}
      >
        <View style={tw`items-center pt-3`}>
          <View
            style={tw`w-[190.6px] shadow-xl bg-[#4b9cde]   shadow-xl rounded-lg h-[60px] items-center justify-center flex-row gap-2`}
          >
            <Text style={tw`text-black`}>Add to Bag</Text>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#121212"
              style={tw`w-5 h-5`}
            >
              <Path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </Svg>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: 370,
    height: 500,
  },

  slide: {
    flex: 1,

    alignItems: "center",
  },
  image: {
    width: 370,
    height: 500,
    borderRadius: 10,
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  price: {
    fontSize: 20,
    marginTop: 10,
  },
});

export default Description;
