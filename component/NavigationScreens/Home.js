import React from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import Swiper from "react-native-swiper";
import Svg, { Path } from "react-native-svg";
import tw from "twrnc";
import { gql, useQuery } from "@apollo/client";

const GET_Brands = gql`
  query Brand {
    brand {
      brandCover
      brandName
      id
      slug
    }
  }
`;
function Home({ navigation }) {
  const { loading, data, error } = useQuery(GET_Brands);

  if (loading)
    return (
      <View style={tw`justify-center pt-[400px] items-center`}>
        <ActivityIndicator size="large" color="#000000" />
      </View>
    );
  if (error) return <Text>Error: {error.message}</Text>;
  if (!data || !data.brand) return <Text>No data available</Text>;
  return (
    <ScrollView style={tw` bg-[#121212] h-full w-full`}>
      <StatusBar barStyle="light-content" />
      <View style={tw` pt-15`}>
        <View style={tw` items-center`}>
          <Text style={tw` font-bold text-[15px] text-white italic`}>
            2 Cool.
          </Text>
        </View>
        <View style={tw`items-center pt-5`}>
          <View style={[styles.container, tw`border-[#ffffff]`]}>
            <TextInput
              style={styles.input}
              placeholder="Search"
              placeholderTextColor="#ffffff"
            />
            <View style={styles.iconContainer}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                R
                viewBox="0 0 20 20"
                fill="#ffffff"
                width={20}
                height={20}
              >
                <Path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                  clipRule="evenodd"
                />
              </Svg>
            </View>
          </View>
        </View>
        <View style={tw`items-center pt-2`}>
          <View style={tw`w-[400px] h-[360px] items-center justify-center`}>
            <Swiper
              autoplay
              showsPagination={false}
              autoplayTimeout={1.5}
              style={styles.wrapper}
            >
              <View style={styles.slide}>
                <Image
                  source={require("../../assets/add.jpg")}
                  style={tw`w-full h-full`}
                />
              </View>
              <View style={styles.slide}>
                <Image
                  source={require("../../assets/front.jpg")}
                  style={tw`w-full h-full`}
                />
              </View>
              <View style={styles.slide}>
                <Image
                  source={require("./blood.jpg")}
                  style={tw`w-full h-full`}
                />
              </View>
              <View style={styles.slide}>
                <Image
                  source={require("./loading.jpg")}
                  style={tw`w-full h-full`}
                />
              </View>
              <View style={styles.slide}>
                <Image
                  source={require("./nine.jpg")}
                  style={tw`w-full h-full`}
                />
              </View>
              <View style={styles.slide}>
                <Image
                  source={require("./brk.jpg")}
                  style={tw`w-full h-full`}
                />
              </View>
              <View style={styles.slide}>
                <Image
                  source={require("./mob.jpg")}
                  style={tw`w-full h-full`}
                />
              </View>
            </Swiper>
          </View>
        </View>
        <View style={tw` items-center pt-5`}>
          <Text style={tw` font-bold text-[20px] text-white italic`}>
            Brands
          </Text>
        </View>
        <View style={tw`items-center flex-row justify-center flex flex-wrap`}>
          {data.brand.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() =>
                navigation.navigate("Products", { slug: item.slug })
              }
            >
              <View style={tw`px-[10px] p-3 flex-row`}>
                <View style={tw``}>
                  <Image
                    source={{ uri: item.brandCover }} // Change imageUrl to brandCover
                    style={tw`w-[160px] h-[190px] rounded-lg`}
                  />
                  <Text
                    style={tw`text-[#EEE5DB] pt-2 text-white font-bold text-center`}
                  >
                    {item.brandName}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container2: {
    height: 300,

    width: 400,
  },

  slide: {
    flex: 1,

    alignItems: "center",
  },

  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.5,
    width: 300,
    // borderColor: "#ccc",
    borderRadius: 5,

    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    paddingLeft: 5,

    color: "#ffffff",
  },
  iconContainer: {
    paddingRight: 5,
  },
});

export default Home;
