import React from "react";
import { View, Text, Button, Image, TouchableOpacity } from "react-native";

import profileImage from "../assets/images/john_ross.png";
import { LinearGradient } from "expo-linear-gradient";
import colors from "./../config/customColors";
import { Feather } from "@expo/vector-icons";

import homeIcon from "../assets/images/home.png";
import searchIcon from "../assets/images/search.png";
import profileIcon from "../assets/images/profile.png";
import attachmentIcon from "../assets/images/attachment.png";
import penIcon from "../assets/images/pen.png";
import { ScrollView } from "react-native-gesture-handler";

export default function ProfileScreen({ navigation }) {
  return (
    <View className="flex-1 justify-between">
      <LinearGradient
        colors={[colors.lightBlueGradientOne, colors.darkBlueGradientOne]}
        className="flex-1"
      >
        <View className=" flex flex-row justify-between items-center mb-4 px-4 pt-4">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <View className=" flex flex-row items-center ">
              <Feather name="chevron-left" size={24} color="white" />
              <Text className="text-white text-lg">Profile</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View className=" h-0.5 bg-customWhiteTwenty  " />

        <ScrollView className="m-4 ">
          {/* ++++++++++++ profile pic and details ++++++++++++ */}

          <View className="flex justify-center items-center mx-[4.5rem]">
            <Image
              // source={{ uri: mentor.image }}
              source={profileImage}
              style={{ width: 100, height: 80 }}
              className=" rounded-lg  m-2"
            />
            <Text className="font-albertSemiBold text-sm text-customWhite font-thin ">
              Good Morning John Ross
            </Text>
            <Text className="font-albertMedium text-sm text-customWhite font-thin ">
              Pastor
            </Text>
          </View>
          <View className=" h-0.5 bg-customWhiteTwenty mx-[4.5rem]" />
          <View className="flex flex-row gap-4 mt-2 mx-[4.5rem]">
            <Text className="flex-none text-white text-sm font-albertRegular">
              Progress
            </Text>
            <View className="flex-1 bg-customBlueTwo h-2 rounded-full mt-1">
              <View className="bg-customWhite h-2 rounded-full w-[70%]" />
            </View>
            <Text className="flex-none text-white text-sm text-right font-albertRegular">
              70%
            </Text>
          </View>
          <View className="flex flex-row justify-center items-center gap-2 mt-4 mb-4">
            <View className="flex-1 flex-row justify-around rounded-lg p-1 py-2 bg-customBlueOne border border-customWhiteEighty">
              <Text className=" font-albertRegular text-white">
                Upload documents
              </Text>
              <Image
                source={attachmentIcon}
                style={{ width: 18, height: 18 }}
                className="mx-4"
              />
            </View>
            <View className="flex-1 flex-row justify-around rounded-lg p-1 py-2 bg-customBlueOne border border-customWhiteEighty">
              <Text className=" font-albertRegular text-white">
                Edit Profile
              </Text>
              <Image
                source={penIcon}
                style={{ width: 18, height: 18 }}
                className="mx-4"
              />
            </View>
          </View>

          {/* ++++++++++++  ++++++++++++ */}

          <View className=" m-2 ">
            <Text className="font-albertRegular text-white">
              Profile Information
            </Text>
          </View>

          {/* ++++++++++++ intro summary ++++++++++++ */}

          <View className="flex  rounded-lg p-2 border border-customWhiteFortyFive mt-2 ">
            <Text className=" font-albertRegular text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing eip ex ea
              commodo consequat. Duis
            </Text>
          </View>

          {/* ++++++++++++ Detailed personal info ++++++++++++ */}

          <View className="flex rounded-lg p-2 border border-customWhiteFortyFive mt-4">
            <View className=" m-2 ">
              <Text className="font-albertRegular text-white">
                Profile Information
              </Text>
            </View>
            <View className="flex flex-row justify-center items-center gap-3 mt-4 mb-2">
              <View className="flex-1 flex-row  rounded-lg p-2 py-2  border border-customWhiteEighty">
                <Text className=" font-albertRegular text-white ">
                  First Name : John
                </Text>
              </View>
              <View className="flex-1 flex-row  rounded-lg p-2 py-2  border border-customWhiteEighty">
                <Text className=" font-albertRegular text-white ">
                  Last Name : Ross
                </Text>
              </View>
            </View>
            <View className="flex flex-row justify-center items-center gap-3 mt-2 mb-4">
              <View className="flex-1 flex-row  rounded-lg p-2 py-2  border border-customWhiteEighty">
                <Text className=" font-albertRegular text-white leading-6">
                  Phone Number : 098461313976
                </Text>
              </View>
              <View className="flex-1 flex-row  rounded-lg p-2 py-2  border border-customWhiteEighty">
                <Text className=" font-albertRegular text-white leading-6">
                  Email : johnross@gmail.com
                </Text>
              </View>
            </View>
            <View className=" h-0.5 bg-customWhiteTwenty mx-[3.5rem] my-4" />

            {/* ++++++++++++ Church-1 personal info  ++++++++++++ */}
            <View className=" m-2 mt-4">
              <Text className="font-albertRegular text-white">
                Current Church -1 Information
              </Text>
            </View>
            <View className="flex-1 flex-row  rounded-lg p-2 py-2 mt-2 mb-4 border border-customWhiteEighty">
              <Text className=" font-albertRegular text-white leading-6">
                Church Name : Loma linda University Church
              </Text>
            </View>
            <View className="flex flex-row justify-center items-center gap-3 mt-2 mb-4">
              <View className="flex-1 flex-row justify-around rounded-lg p-2 py-2  border border-customWhiteEighty">
                <Text className=" font-albertRegular text-white leading-6">
                  Church Phone : 098461313976
                </Text>
              </View>
              <View className="flex-1 flex-row  rounded-lg p-2 py-2  border border-customWhiteEighty">
                <Text className=" font-albertRegular text-white leading-6">
                  Church Website : johnross@gmail.com
                </Text>
              </View>
            </View>
            <View className="flex-1 flex-row  rounded-lg p-2 py-2 mt-2 mb-4 border border-customWhiteEighty">
              <Text className=" font-albertRegular text-white leading-6">
                Church Address : Loma linda University Church,CA
              </Text>
            </View>
            <View className="flex flex-row justify-center items-center gap-3 mt-2 mb-4">
              <View className="flex-1 flex-row  rounded-lg p-2 py-2  border border-customWhiteEighty">
                <Text className=" font-albertRegular text-white leading-6">
                  City : Oakland
                </Text>
              </View>
              <View className="flex-1 flex-row rounded-lg p-2 py-2  border border-customWhiteEighty">
                <Text className=" font-albertRegular text-white leading-6">
                  State : North American
                </Text>
              </View>
            </View>
            <View className="flex flex-row justify-center items-center gap-3 mt-2 mb-4">
              <View className="flex-1 flex-row rounded-lg p-2 py-2  border border-customWhiteEighty">
                <Text className=" font-albertRegular text-white leading-6">
                  Zip Code : 00000
                </Text>
              </View>
              <View className="flex-1 flex-row  rounded-lg p-2 py-2  border border-customWhiteEighty">
                <Text className=" font-albertRegular text-white leading-6">
                  Country : USA
                </Text>
              </View>
            </View>
            <View className=" h-0.5 bg-customWhiteTwenty mx-[3.5rem] my-4" />

            {/* ++++++++++++ Church-2 personal info  ++++++++++++ */}
            <View className=" m-2 mt-4">
              <Text className="font-albertRegular text-white">
                Current Church -1 Information
              </Text>
            </View>
            <View className="flex-1 flex-row  rounded-lg p-2 py-2 mt-2 mb-4 border border-customWhiteEighty">
              <Text className=" font-albertRegular text-white leading-6">
                Church Name : Loma linda University Church
              </Text>
            </View>
            <View className="flex flex-row justify-center items-center gap-3 mt-2 mb-4">
              <View className="flex-1 flex-row justify-around rounded-lg p-2 py-2  border border-customWhiteEighty">
                <Text className=" font-albertRegular text-white leading-6">
                  Church Phone : 098461313976
                </Text>
              </View>
              <View className="flex-1 flex-row  rounded-lg p-2 py-2  border border-customWhiteEighty">
                <Text className=" font-albertRegular text-white leading-6">
                  Church Website : johnross@gmail.com
                </Text>
              </View>
            </View>
            <View className="flex flex-row  rounded-lg p-2 py-2 mt-2 mb-4 border border-customWhiteEighty">
              <Text className=" font-albertRegular text-white leading-6">
                Church Address : Loma linda University Church,CA
              </Text>
            </View>
            <View className="flex flex-row justify-center items-center gap-3 mt-2 mb-4">
              <View className="flex-1 flex-row  rounded-lg p-2 py-2  border border-customWhiteEighty">
                <Text className=" font-albertRegular text-white leading-6">
                  City : Oakland
                </Text>
              </View>
              <View className="flex-1 flex-row rounded-lg p-2 py-2  border border-customWhiteEighty">
                <Text className=" font-albertRegular text-white leading-6">
                  State : North American
                </Text>
              </View>
            </View>
            <View className="flex flex-row justify-center items-center gap-3 mt-2 mb-4">
              <View className="flex-1 flex-row rounded-lg p-2 py-2  border border-customWhiteEighty">
                <Text className=" font-albertRegular text-white leading-6">
                  Zip Code : 00000
                </Text>
              </View>
              <View className="flex-1 flex-row  rounded-lg p-2 py-2  border border-customWhiteEighty">
                <Text className=" font-albertRegular text-white leading-6">
                  Country : USA
                </Text>
              </View>
            </View>

            <View className=" h-0.5 bg-customWhiteTwenty mx-[3.5rem] my-4" />

            {/* ++++++++++++ Other info  ++++++++++++ */}
            <View className=" m-2 mt-4">
              <Text className="font-albertRegular text-white">
                Other Information
              </Text>
            </View>
            <View className="flex-1 flex-row  rounded-lg p-2 py-2 mt-2 mb-4 border border-customWhiteEighty">
              <Text className=" font-albertRegular text-white leading-6">
                Title : Pastor
              </Text>
            </View>
            <View className="flex flex-row justify-center items-center gap-3 mt-2 mb-4">
              <View className="flex-1 flex-row rounded-lg p-2 py-2  border border-customWhiteEighty">
                <Text className=" font-albertRegular text-white leading-6">
                  Years in Ministry : 11
                </Text>
              </View>
              <View className="flex-1 flex-row  rounded-lg p-2 py-2  border border-customWhiteEighty">
                <Text className=" font-albertRegular text-white leading-6">
                  Conference : Oakland
                </Text>
              </View>
            </View>
            <View className="flex-1 flex-row  rounded-lg p-2 py-2 mt-2 mb-4 border border-customWhiteEighty">
              <Text className=" font-albertRegular text-white leading-6">
                Current Community Service Projects : 11
              </Text>
            </View>

            <View className="flex rounded-lg p-2 py-2 mt-2 mb-4 border border-customWhiteEighty">
              <Text className=" font-albertRegular text-white leading-6">
                Interests :
              </Text>
              <Text className=" font-albertRegular text-white leading-6">
                I would like to find out more about the Center for Community
                Change
              </Text>
              <View className=" h-0.5 bg-customWhiteTwenty mx-[3.5rem] my-4" />
              <Text className=" font-albertRegular text-white leading-6">
                I am a conference administrator and would like to find out more
                about partnering with the center
              </Text>
            </View>
            <View className="flex rounded-lg p-2 py-2 mt-2 mb-4 border border-customWhiteEighty">
              <Text className=" font-albertRegular text-white leading-6">
                Comments :
              </Text>
              <Text className=" font-albertRegular text-white leading-6">
                I am a conference administrator and would like to find out more
                about partnering with the cent I conference administrator and
                would like to find out more about partnering with the center
              </Text>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>

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
  );
}

// <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//   <Text>Profile Screen </Text>
//   <Button title="Go Back" onPress={() => navigation.goBack()} />
// </View>
