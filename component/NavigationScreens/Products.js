import React from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";

import Svg, { Path } from "react-native-svg";
import tw from "twrnc";
import { gql, useQuery } from "@apollo/client";

const Fetch_Info = gql`
  query Product($slug: String) {
    product(slug: $slug) {
      brandCover
      brandName
      logo
      brandMotto
      slug
      products {
        brandProductName
        brandProductimage
        images
        brandProductPrice
        id
      }
    }
  }
`;

function Products({ navigation, route }) {
  const { slug } = route.params;
  const { loading, data, error } = useQuery(Fetch_Info, {
    variables: { slug },
  });
  if (loading)
    return (
      <View style={tw`justify-center pt-[400px] items-center`}>
        <ActivityIndicator size="large" color="#000000" />
      </View>
    );
  if (error) return <Text>Error: {error.message}</Text>;
  if (!data || !data.product) return <Text>No data available</Text>;

  const { brandName, brandMotto, logo, products } = data.product;

  return (
    <ScrollView style={tw`bg-[#121212] h-full w-full`}>
      <View style={tw`justify-center pt-15`}>
        <View
          style={tw`flex-row items-center gap-15 justify-center pr-[50px] pb-3`}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
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
              {brandName} Products.
            </Text>
          </View>
        </View>
        <View style={tw`items-center justify-center p-2 pb-3`}>
          <Image
            source={{ uri: logo }}
            width={100}
            height={100}
            style={tw`rounded-full`}
          />
        </View>

        {/* Render product list */}
        <View style={tw`flex-row flex-wrap gap-2 items-center justify-center`}>
          {products.map((product, index) => (
            <TouchableOpacity
              key={index}
              onPress={() =>
                navigation.navigate("Description", {
                  productData: product,
                  name: brandName,
                  slug: slug,
                  motto: brandMotto,
                })
              }
            >
              <View style={tw`items-center`}>
                <Image
                  source={{ uri: product.brandProductimage }}
                  width={180}
                  height={220}
                  style={tw`rounded-lg`}
                />
                <Text
                  style={tw`text-[14px] text-[#ffffff] w-[175px] text-center pt-1 font-bold italic`}
                >
                  {product.brandProductName}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});

export default Products;
