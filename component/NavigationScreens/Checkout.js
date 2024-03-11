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
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import tw from "twrnc";
import Svg, { Path } from "react-native-svg";

function Checkout({ navigation, route }) {
  const [isModal, setIsModal] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const { cartItems, totalPrice } = route.params;
  const handleClicked = () => {
    setIsModal(true);
  };

  const handleSubmit = async () => {
    // try {
    //   const docRef = await addDoc(collection(db, "user"), {
    //     emailNumber: emailNumber,
    //     name: name,
    //     address: address,
    //     city: city,
    //     state: state,
    //   });
    //   console.log("Document written with ID: ", docRef.id);
    //   setEmailNumber("");
    //   setName("");
    //   setAddress("");
    //   setCity("");
    //   setState("");
    // } catch (e) {
    //   console.error("Error adding document: ", e);
    // }
  };
  return (
    <ScrollView style={tw`  bg-[#121212] h-full w-full`}>
      <View style={tw`items-center  justify-center pt-20 `}>
        <StatusBar barStyle="light-content" />
        <View
          style={tw`flex-row items-center  gap-30 justify-center pr-[150px] pb-3`}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
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
              Checkout.
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => handleClicked()} style={tw`pb-5`}>
          <View
            style={tw`border-dashed border-2 border-[#ffffff] rounded-lg  w-[270px] h-[50px] items-center justify-center`}
          >
            <Text style={tw`text-white`}>+ Add Shipping Address</Text>
          </View>
        </TouchableOpacity>
        <View
          style={tw`flex-row w-[360px] items-center border-[#fff] justify-center border-[1px] h-[80px]   rounded-lg`}
        >
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#4b9cde"
            class="w-6 h-6"
            style={tw`w-6 h-6`}
          >
            <Path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <Path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </Svg>
          <View style={tw`pl-5 `}>
            <Text style={tw`text-[#ffffff]  font-bold text-[19px]`}>
              No Shipping Details
            </Text>
            <Text style={tw`text-[#ffffff] text-[15px]  font-medium `}>
              {name}
            </Text>
            <Text style={tw`text-[#ffffff] text-[15px]  font-medium  `}>
              {address} {city}
            </Text>
          </View>
        </View>

        <Modal
          visible={isModal}
          onRequestClose={() => setIsModal(false)}
          animationType="fade"
          presentationStyle="pageSheet"
        >
          <View style={tw`bg-[#ffffff] items-center  h-full w-full`}>
            <Text style={tw`text-black pt-5 font-bold text-[18px]`}>
              Shipping Address
            </Text>
            <View style={tw`pt-5`}>
              <Text style={tw` font-bold text-[18px] pb-2`}>Contact</Text>
              <TextInput
                onChangeText={(text) => setEmail(text)}
                value={email}
                placeholderTextColor="#12121240"
                placeholder="Email or Mobile Phone Number"
                style={tw`h-12 px-4 py-2 rounded-lg shadow-lg   border  focus:outline-none focus:border-blue-500 w-[300px]`}
              />
            </View>
            <View style={tw`pt-8`}>
              <Text style={tw` font-bold text-[18px] pb-4`}>Delivery</Text>
              <TextInput
                onChangeText={(text) => setName(text)}
                value={name}
                placeholderTextColor="#12121240"
                placeholder="Full Name"
                style={tw`h-12 px-4 py-2 rounded-lg shadow-lg   border  focus:outline-none focus:border-blue-500 w-[300px]`}
              />
            </View>
            <View style={tw`pt-8`}>
              <TextInput
                onChangeText={(text) => setAddress(text)}
                value={address}
                placeholderTextColor="#12121240"
                placeholder="Address"
                style={tw`h-12 px-4 py-2 rounded-lg shadow-lg   border  focus:outline-none focus:border-blue-500 w-[300px]`}
              />
              <View style={tw`pt-8`}>
                <TextInput
                  onChangeText={(text) => setCity(text)}
                  value={city}
                  placeholderTextColor="#12121240"
                  placeholder="City"
                  style={tw`h-12 px-4 py-2 rounded-lg shadow-lg   border  focus:outline-none focus:border-blue-500 w-[300px]`}
                />
              </View>
              <View style={tw`pt-8`}>
                <TextInput
                  onChangeText={(text) => setState(text)}
                  value={state}
                  placeholderTextColor="#12121240"
                  placeholder="State"
                  style={tw`h-12 px-4 py-2 rounded-lg shadow-lg   border  focus:outline-none focus:border-blue-500 w-[300px]`}
                />
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                setIsModal(false);
                Alert.alert("Shipping Information Saved");
              }}
              style={tw`pt-10`}
            >
              <View
                style={tw`w-[190.6px] shadow-xl bg-[#121212]   shadow-xl rounded-lg h-[60px] items-center justify-center flex-row gap-2`}
              >
                <Text style={tw`text-white`}>Save</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Modal>
        <View style={tw`pt-10`}>
          <Text style={tw`text-white font-bold text-[18px] pl-5`}>
            Order List
          </Text>
          {cartItems.map((item, index) => (
            <View key={index} style={tw`flex-row  p-3 items-center`}>
              <View
                style={tw`flex-row gap-2 items-center border-[0.2px] w-[360px] h-[120px] bg-[#ffffff] rounded-lg`}
              >
                <Image
                  source={{ uri: item.imageUrl }}
                  style={tw`w-[150px] h-[120px] rounded-lg`}
                />
                <View style={tw`flex-col gap-2`}>
                  <Text style={tw`text-black w-[175px] text-[16px] font-bold`}>
                    {item.name}
                  </Text>
                  <Text style={tw`text-black text-[16px]`}>₦{item.price}</Text>

                  <Text style={tw`text-black `}>{item.size}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("First", { cartItems, totalPrice, email });
            handleSubmit();
          }}
          style={tw`pt-10`}
        >
          <View
            style={tw`w-[190.6px] shadow-xl bg-[#4b9cde]   shadow-xl rounded-lg h-[60px] items-center justify-center flex-row gap-2`}
          >
            <Text style={tw`text-white`}>Continue to Payment</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default Checkout;
