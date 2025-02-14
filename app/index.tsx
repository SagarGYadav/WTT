// App.js
import React from "react";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text, TouchableOpacity, Image } from "react-native";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import MyMentorsScreen from "./MyMentorsScreen";
import CustomDrawerContent from "./CustomDrawerContent";
import { NavigationContainer } from "@react-navigation/native";

// const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          width: 300, // Increase the drawer width
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="My Mentors"
        component={MyMentorsScreen}
        options={{
          headerShown: true,
          title: "John Ross",
          headerStyle: { backgroundColor: "#176192" },
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerTitleStyle: {
            borderWidth: 2,
            borderColor: "blueviolet",
            borderRadius: 20,
            paddingHorizontal: 16,
            paddingVertical: 4,
          },
          headerRight: () => (
            <View className="flex-row items-center pr-4">
              <View className="relative mr-2">
                {/* <Image
                  source={require("./../assets/images/bell.png")}
                  className="w-2 h-2  "
                  resizeMode="contain"
                /> */}
                <Text className="text-white ml-3">⏰</Text>
                <Text className="absolute -top-1 -right-1 text-yellow-400 font-bold text-xs bg-red-600 rounded-full px-1">
                  3
                </Text>
              </View>
              <Text className="text-white ml-3">⏰</Text>
            </View>
          ),
          headerLeft: () => (
            <TouchableOpacity className="pl-4">
              <Text className="text-white font-bold text-2xl w-8 text-center">
                ☰
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: true, title: "My Profile" }}
      />
    </Drawer.Navigator>
  );
}
