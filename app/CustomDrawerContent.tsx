import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import {
  FontAwesome5,
  MaterialIcons,
  Ionicons,
  Feather,
} from "@expo/vector-icons";

import profileImage from "../assets/images/john_ross.png";

export default function CustomDrawerContent({ navigation }) {
  const menuItems = [
    { label: "My Mentors", icon: "chalkboard-teacher" },
    { label: "Revitalization Roadmap", icon: "map" },
    { label: "Assessments", icon: "tasks" },
    { label: "Progress", icon: "chart-line" },
    { label: "Appointments", icon: "calendar" },
  ];

  const profileItems = [
    { label: "My Profile", icon: "user" },
    { label: "Documents", icon: "file-alt" },
    { label: "Assignments", icon: "clipboard-list" },
    { label: "Certificates", icon: "award", badge: 1 },
    { label: "Micro Grant", icon: "hand-holding-usd" },
  ];

  const settingsItems = [
    { label: "Change Password", icon: "lock" },
    { label: "Turn Off Notifications", icon: "bell-off" },
    { label: "Change Mentor", icon: "exchange-alt", disabled: true },
  ];

  return (
    <DrawerContentScrollView contentContainerStyle={{ flex: 1 }}>
      {/* Profile Section */}
      <View className="flex flex-row bg-customBlueThree p-1 items-center">
        <Image
          source={profileImage}
          style={{ width: 40, height: 40 }}
          className=" rounded-full m-2 p-5"
        />
        <Text className="text-white text-lg font-semibold">John Ross</Text>
        {/* <Ionicons name="chevron-down" size={20} color="white" /> */}
      </View>

      {/* Menu Items */}
      <View className="mt-4">
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.label}
            onPress={() => navigation.navigate(item.label)}
            className="flex-row items-center px-4 py-3"
          >
            <FontAwesome5
              name={item.icon}
              size={18}
              color="#1E3A8A"
              className="mr-3"
            />
            <Text className="text-gray-800 text-base">{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Profile Section */}
      <Text className="text-gray-500 text-sm px-4 mt-5">Profile</Text>
      {profileItems.map((item) => (
        <TouchableOpacity
          key={item.label}
          onPress={() => navigation.navigate(item.label)}
          className="flex-row items-center px-4 py-3 relative"
        >
          <FontAwesome5
            name={item.icon}
            size={18}
            color="#1E3A8A"
            className="mr-3"
          />
          <Text className="text-gray-800 text-base">{item.label}</Text>
          {item.badge && (
            <View className="absolute right-4 top-3 bg-red-600 px-2 rounded-full">
              <Text className="text-white text-xs font-bold">{item.badge}</Text>
            </View>
          )}
        </TouchableOpacity>
      ))}

      {/* Settings Section */}
      <Text className="text-gray-500 text-sm px-4 mt-5">Settings</Text>
      {settingsItems.map((item) => (
        <TouchableOpacity
          key={item.label}
          disabled={item.disabled}
          onPress={() => navigation.navigate(item.label)}
          className={`flex-row items-center px-4 py-3 ${
            item.disabled ? "opacity-50" : ""
          }`}
        >
          <FontAwesome5
            name={item.icon}
            size={18}
            color={item.disabled ? "#A0AEC0" : "#1E3A8A"}
            className="mr-3"
          />
          <Text className="text-gray-800 text-base">{item.label}</Text>
        </TouchableOpacity>
      ))}

      {/* Logout Button */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Logout")}
        className="flex-row items-center px-4 py-4 mt-6"
      >
        <Feather name="log-out" size={20} color="#1E3A8A" className="mr-3" />
        <Text className="text-gray-800 text-base">Log out</Text>
      </TouchableOpacity>

      {/* Contact Information */}
      <View className="bg-blue-100 p-4 mt-6 mx-3 rounded-lg">
        <Text className="text-blue-900 text-sm mb-2 font-semibold">
          Contact Information
        </Text>
        <Text className="text-blue-900 text-xs">📞 269-471-6159</Text>
        <Text className="text-blue-900 text-xs">
          📧 communitychange@andrews.edu
        </Text>
      </View>

      {/* Footer Icon */}
      <View className="items-center mt-4">
        <MaterialIcons name="local-fire-department" size={24} color="#1E3A8A" />
      </View>
    </DrawerContentScrollView>
  );
}

// import React from "react";
// import { View, Text, TouchableOpacity } from "react-native";
// import { DrawerContentScrollView } from "@react-navigation/drawer";

// export default function CustomDrawerContent({ navigation }) {
//   return (
//     <DrawerContentScrollView>
//       <TouchableOpacity
//         onPress={() => navigation.navigate("My Mentors")}
//         style={{ margin: 20 }}
//       >
//         <Text>My Mentors</Text>
//       </TouchableOpacity>
//     </DrawerContentScrollView>
//   );
// }
