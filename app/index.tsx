// App.js
import React from "react";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text, TouchableOpacity, Image } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./ProfileScreen";
import MyMentorsScreen from "./MyMentorsScreen";
import CustomDrawerContent from "./CustomDrawerContent";
import { NavigationContainer } from "@react-navigation/native";

import bellIcon from "../assets/images/bell.png";
import menuIcon from "../assets/images/menu.png";
import whatsAppIcon from "../assets/images/whatsapp.jpg";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../config/customColors";

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
          title: "",
          headerStyle: {
            backgroundColor: colors.lightBlueGradientOne,
            elevation: 0, // Remove Android shadow
            shadowOpacity: 0, // Remove iOS shadow
            borderBottomWidth: 0,
          },
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerTitle: () => (
            <LinearGradient
              colors={[
                colors.lightBlueGradientFour,
                colors.darkBlueGradientFour,
              ]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{
                padding: 2, // Border thickness
                borderRadius: 10,
              }}
            >
              <View
                style={{
                  backgroundColor: colors.lightBlueGradientOne, // Same as parent's background
                  borderRadius: 8,
                  paddingHorizontal: 30,
                  paddingVertical: 8,
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "100",
                    fontFamily: "AlbertSans-Medium",
                    color: colors.customWhiteEighty,
                    textAlign: "center",
                  }}
                >
                  John Ross
                </Text>
              </View>
            </LinearGradient>
          ),
          headerRight: () => (
            <View className="flex-row items-center gap-4 pr-4">
              <TouchableOpacity className="relative">
                <Image
                  source={bellIcon}
                  style={{ width: 26, height: 26 }}
                  resizeMode="cover"
                />
                <View className="absolute -top-2 -right-2 bg-customYellow w-5 h-5 rounded-full items-center justify-center">
                  <Text className="font-albertLight text-white text-sm font-bold p-1">
                    3
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="rounded-full overflow-hidden  items-center justify-center">
                <Image
                  source={whatsAppIcon}
                  // style={{ width: 30, height: 30 }}
                  style={{ width: 26, height: 26 }}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <TouchableOpacity className="pl-4">
              <Image source={menuIcon} style={{ width: 30, height: 30 }} />
            </TouchableOpacity>
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: true,
          title: "",
          headerStyle: {
            backgroundColor: colors.lightBlueGradientOne,
            elevation: 0, // Remove Android shadow
            shadowOpacity: 0, // Remove iOS shadow
            borderBottomWidth: 0,
          },
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerTitle: () => (
            <LinearGradient
              colors={[
                colors.lightBlueGradientFour,
                colors.darkBlueGradientFour,
              ]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{
                padding: 2, // Border thickness
                borderRadius: 10,
              }}
            >
              <View
                style={{
                  backgroundColor: colors.lightBlueGradientOne, // Same as parent's background
                  borderRadius: 8,
                  paddingHorizontal: 30,
                  paddingVertical: 8,
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "100",
                    fontFamily: "AlbertSans-Medium",
                    color: colors.customWhiteEighty,
                    textAlign: "center",
                  }}
                >
                  John Ross
                </Text>
              </View>
            </LinearGradient>
          ),
          headerRight: () => (
            <View className="flex-row items-center gap-4 pr-4">
              <TouchableOpacity className="relative">
                <Image
                  source={bellIcon}
                  style={{ width: 26, height: 26 }}
                  resizeMode="cover"
                />
                <View className="absolute -top-2 -right-2 bg-customYellow w-5 h-5 rounded-full items-center justify-center">
                  <Text className="font-albertLight text-white text-sm font-bold p-1">
                    3
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="rounded-full overflow-hidden  items-center justify-center">
                <Image
                  source={whatsAppIcon}
                  // style={{ width: 30, height: 30 }}
                  style={{ width: 26, height: 26 }}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <TouchableOpacity className="pl-4">
              <Image source={menuIcon} style={{ width: 30, height: 30 }} />
            </TouchableOpacity>
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
