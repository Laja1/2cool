import React, { useEffect } from "react";
import {
  View,
  Text,
  Button,
  Image,
  StatusBar,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import tw from "twrnc";

function Landing({ navigation }) {
  return (
    <View style={tw`items-center  justify-center`}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={require("../assets/one.jpg")}
        style={tw`w-full items-center flex   h-full`}
      >
        <View style={tw`items-center flex pt-15`}>
          <Text style={tw`text-[#ffffff] font-bold text-[30px]  italic `}>
            2 cool.
          </Text>
          <View style={tw`items-center flex pt-145`}>
            <TouchableOpacity onPress={() => navigation.navigate("Landing2")}>
              <View
                style={tw`border-[2px] bg-[#ffffff] border-[#ffffff]  w-[150px] h-[60px] items-center justify-center rounded-xl shadow-2xl`}
              >
                <Text style={tw`text-black font-bold text-[18px] `}>
                  start now
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Landing;
