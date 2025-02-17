import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import profileImage from "../assets/images/john_ross.png";
import { LinearGradient } from "expo-linear-gradient";
import colors from "./../config/customColors";
import { Feather } from "@expo/vector-icons";

import whatsAppIconTwo from "./../assets/images/whatsapp2.png";
import messageIcon from "../assets/images/message.png";
import phoneIcon from "../assets/images/phone.png";
import chatIcon from "../assets/images/chat.png";
import listIcon from "../assets/images/list.png";

import johnDoeImage from "../assets/images/john_doe.png";
import kebabIcon from "../assets/images/kebab.png";
import homeIcon from "../assets/images/home.png";
import searchIcon from "../assets/images/search.png";
import profileIcon from "../assets/images/profile.png";

export default function MyMentorsScreen({ navigation }) {
  const mentors = [
    {
      name: "John Doe",
      role: "Mentor",
      image: { profileImage },
    },
    {
      name: "John Doe",
      role: "Field Mentor",
      image: "https://via.placeholder.com/50",
    },
    {
      name: "John Doe",
      role: "Mentor",
      image: "https://via.placeholder.com/50",
    },
  ];

  return (
    <LinearGradient
      colors={[colors.lightBlueGradientOne, colors.darkBlueGradientOne]}
      className="flex-1"
    >
      <View className="flex-1 justify-between">
        {/* Header */}

        <View className=" flex flex-row justify-between items-center mb-4 px-4 pt-4">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <View className=" flex flex-row items-center ">
              <Feather name="chevron-left" size={24} color="white" />
              <Text className="text-white text-lg"> My Mentors</Text>
            </View>
          </TouchableOpacity>
          <View>
            <Image source={listIcon} style={{ width: 20, height: 20 }} />
          </View>
        </View>
        <View className=" h-0.5 bg-customWhiteTwenty  " />

        {/* Search Bar */}
        <View className=" flex-row items-center bg-customBlueOne border border-customWhiteTwenty rounded-xl p-2 m-4">
          <TextInput
            placeholder="Search"
            placeholderTextColor="white"
            className="flex-1 text-white text-sm px-2 pl-12 font-albertSemiBold"
          />
          <TouchableOpacity>
            <Image source={searchIcon} style={{ width: 24, height: 24 }} />
          </TouchableOpacity>
        </View>

        {/* Profile Carousel */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="flex-none mx-4 p-2 pt-0 "
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <View key={index} className="items-center ">
              <LinearGradient
                colors={[
                  colors.lightBlueGradientThree,
                  colors.darkBlueGradientThree,
                ]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 26,
                  padding: 2,
                  margin: 4,
                }}
              >
                <Image
                  // source={{ uri: "https://via.placeholder.com/60" }}
                  source={profileImage}
                  style={{ width: 48, height: 48, borderRadius: 24 }}
                  className="rounded-full  border-purple-400 border border-"
                />
              </LinearGradient>

              <Text className="text-white text-xs mt-1">John Ross</Text>
            </View>
          ))}
        </ScrollView>

        <View className=" h-0.5 bg-customWhiteTwenty m-6 " />

        {/* Mentor Cards */}
        <ScrollView className="flex-auto space-y-4 mx-4 ">
          {mentors.map((mentor, index) => (
            <View
              key={index}
              className="flex bg-customBlueFour bg-opacity-40 min-h-36 rounded-lg p-4 flex-row  border-[1px] border-customWhiteEighty mb-4"
            >
              <View className="flex">
                <Image
                  // source={{ uri: mentor.image }}
                  source={johnDoeImage}
                  style={{ width: 100, height: 80 }}
                  className=" rounded-lg mr-4"
                />
                <View className="flex flex-row gap-2 mt-2">
                  <Image source={phoneIcon} style={{ width: 18, height: 18 }} />
                  <Image source={chatIcon} style={{ width: 18, height: 18 }} />
                  <Image
                    source={messageIcon}
                    style={{ width: 18, height: 18 }}
                  />
                  <Image
                    source={whatsAppIconTwo}
                    style={{ width: 18, height: 18 }}
                  />
                </View>
              </View>
              <View className="flex-1 ">
                <Text className=" text-customWhite text-lg font-albertMedium">
                  {mentor.name}
                </Text>
                <Text className=" text-customWhite text-sm font-albertMedium">
                  {mentor.role}
                </Text>
                <Text className=" text-customWhiteTwo text-xs font-albertMedium">
                  Sub text area write something here. That you can read more
                </Text>
              </View>
              <TouchableOpacity>
                <Image source={kebabIcon} style={{ width: 18, height: 18 }} />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        {/* Bottom Navigation */}
        {/* ++++++++++++ footer ++++++++++++ */}

        <View className="flex-row justify-evenly bg-customBlueFive p-2 ">
          <View className="flex justify-center items-center">
            <Image source={homeIcon} style={{ width: 20, height: 20 }} />
            <Text className="text-sm text-customWhite text-center font-albertMedium">
              Home
            </Text>
          </View>
          <View className="flex justify-center items-center">
            <Image source={searchIcon} style={{ width: 20, height: 20 }} />
            <Text className="text-sm text-customWhite text-center font-albertMedium">
              Discover
            </Text>
          </View>
          <View className="flex justify-center items-center">
            <Image source={profileIcon} style={{ width: 20, height: 20 }} />
            <Text className="text-sm text-customWhite text-center font-albertMedium">
              Profile
            </Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

// import React from "react";
// import { View, Text, Button } from "react-native";

// export default function MyMentorsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>My Mentors</Text>
//       <Button title="Go Back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }
