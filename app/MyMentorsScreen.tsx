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
    <View className="flex-1 bg-blue-900 px-4 py-4">
      {/* Header */}
      <View className="flex-row items-center mb-4">
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text className="text-white text-xl">&lt; My Mentors</Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View className="flex-row items-center bg-blue-700 rounded-xl p-2 mb-4">
        <TextInput
          placeholder="Search"
          placeholderTextColor="white"
          className="flex-1 text-white px-2"
        />
        <TouchableOpacity>
          <Text className="text-white text-xl">🔍</Text>
        </TouchableOpacity>
      </View>

      {/* Profile Carousel */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mb-4"
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <View key={index} className="items-center">
            <Image
              // source={{ uri: "https://via.placeholder.com/60" }}
              source={profileImage}
              className=" rounded-full  border-purple-400"
            />
            <Text className="text-white text-xs mt-1">John Ross</Text>
          </View>
        ))}
      </ScrollView>

      {/* Mentor Cards */}
      <ScrollView className="space-y-4">
        {mentors.map((mentor, index) => (
          <View
            key={index}
            className="bg-blue-800 rounded-xl p-4 flex-row items-center border-[2px] border-purple-400 mb-4"
          >
            <Image
              // source={{ uri: mentor.image }}
              source={profileImage}
              className="w-16 h-16 rounded-xl mr-4"
            />
            <View className="flex-1">
              <Text className="text-white text-lg font-bold">
                {mentor.name}
              </Text>
              <Text className="text-blue-300 text-sm">{mentor.role}</Text>
              <Text className="text-gray-200 text-xs">
                Sub text area write something here. That you can read more
              </Text>
            </View>
            <TouchableOpacity>
              <Text className="text-white text-xl">⋮</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <View className="flex-row justify-around bg-blue-800 py-3 mt-4 rounded-t-xl">
        <TouchableOpacity
          className="items-center"
          onPress={() => navigation.navigate("Home")}
        >
          <Text className="text-white">🏠</Text>
          <Text className="text-white text-xs">Home</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Text className="text-white">🔍</Text>
          <Text className="text-white text-xs">Discover</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Text className="text-white">👤</Text>
          <Text className="text-white text-xs">Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
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
