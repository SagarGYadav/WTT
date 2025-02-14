import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Pressable,
} from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import BackgroundImage from "../assets/images/wallpaper.jpg";
import profileImage from "../assets/images/john_ross.png";
import videoImage from "../assets/images/video.png";

export default function HomeScreen({ navigation }) {
  const router = useRouter();
  const appointments = [
    {
      date: "04 Aug 24",
      time: "11:30 hrs EST",
      mentor: "John Ross - Mentor",
      mode: "Duo",
      // icon: require("./assets/zoom.png"),
    },
    {
      date: "11 Aug 24",
      time: "11:30 hrs EST",
      mentor: "John Ross - Field Mentor",
      mode: "Google Meet",
      // icon: require("./assets/google-meet.png"),
    },
  ];

  return (
    <ScrollView
      className=""
      overScrollMode="never"
      contentContainerStyle={{
        flexGrow: 1,
        paddingHorizontal: 16,
        paddingBottom: 16,
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <ImageBackground
        source={BackgroundImage}
        className="w-full absolute top-0 left-0 z-10"
        resizeMode="cover"
      >
        <View className="relative z-20 p-4" />

        {/* Header with menu, bell, and share icons */}
        <View className="flex-row justify-between items-center p-4">
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Text className="text-white text-2xl">☰</Text>
          </TouchableOpacity>
          <View className="flex-row items-center gap-4">
            <View className="relative">
              <Text className="text-white text-2xl">🔔</Text>
              <View className="absolute -top-2 -right-2 bg-yellow-400 w-5 h-5 rounded-full items-center justify-center">
                <Text className="text-white text-xs font-bold">3</Text>
              </View>
            </View>
            <TouchableOpacity>
              <Text className="text-white text-2xl">🔗</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Time and Date */}
        <View className="items-center mt-6">
          <Text className="text-white text-4xl font-bold">11 : 59 AM</Text>
          <Text className="text-white text-xl">Tuesday, Sep 23</Text>
        </View>

        {/* Greeting */}
        <View className="mt-6 ml-4">
          <Text className="text-white text-2xl font-semibold">
            Good Morning
          </Text>
        </View>

        {/* User Card */}
        <Pressable onPress={() => navigation.navigate("Profile")}>
          <View className="bg-blue-700/80 mx-4 mt-4 p-4 rounded-xl flex-row items-center">
            <Image
              source={profileImage}
              className="w-12 h-12 rounded-full mr-4"
            />
            <View className="flex-1">
              <Text className="text-white text-lg font-semibold">
                John Ross, Welcome Aboard!
              </Text>
              <Text className="text-white text-sm mt-2">Progress</Text>
              <View className="w-full bg-gray-300 h-2 rounded-full mt-1">
                <View className="bg-blue-900 h-2 rounded-full w-[70%]" />
              </View>
              <Text className="text-white text-sm mt-1 text-right">70%</Text>
            </View>
          </View>
        </Pressable>
      </ImageBackground>
      <View className="z-0">
        {/* Video previews */}
        <View className="flex-row justify-around mt-4">
          {[1, 2].map((_, index) => (
            <Image
              key={index}
              // source={videoImage}
              // source={require("./assets/video-preview.png")}
              className="w-40 h-28 rounded-xl"
            />
          ))}
        </View>

        {/* Upcoming Appointments Header */}
        <View className="flex-row justify-between items-center p-4 mt-6">
          <Text className="text-white text-lg font-bold">
            Upcoming Appointments
          </Text>
          <TouchableOpacity>
            <Text className="text-blue-300">See all</Text>
          </TouchableOpacity>
        </View>

        {/* Appointment Cards */}
        <View className=" px-4">
          {appointments.map((item, index) => (
            <View
              key={index}
              className="bg-blue-800 rounded-xl p-4 mb-4 flex-row items-center border border-blue-500"
            >
              <Image
                source={profileImage}
                className="w-14 h-14 rounded-lg mr-4"
              />
              <View className="flex-1">
                <Text className="text-white text-sm">
                  {item.date} <Text className="text-yellow-300">Time</Text>{" "}
                  {item.time}
                </Text>
                <Text className="text-white font-bold mt-1">{item.mentor}</Text>
                <Text className="text-white text-xs mt-1">
                  Mode: <Text className="text-blue-300">{item.mode}</Text>
                </Text>
                <View className="flex-row mt-2 space-x-3">
                  <FontAwesome name="phone" size={16} color="white" />
                  <FontAwesome name="envelope" size={16} color="white" />
                  <FontAwesome name="comment" size={16} color="white" />
                  <FontAwesome name="whatsapp" size={16} color="white" />
                </View>
              </View>
              <FontAwesome name="chevron-right" size={20} color="white" />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

// import React from "react";
// import { View, Text, TouchableOpacity } from "react-native";
// import { useNavigation } from "@react-navigation/native";

// export default function HomeScreen() {
//   const navigation = useNavigation();

//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <TouchableOpacity
//         className=" bg-blue-500"
//         onPress={() => navigation.navigate("Profile")}
//       >
//         <Text className="text-white text-xl font-bold">Profile</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         onPress={() => navigation.openDrawer()}
//         style={{ marginTop: 20 }}
//       >
//         <Text> Open Menu</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }
