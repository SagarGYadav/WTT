import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Image,
  Pressable,
  Dimensions,
  StyleSheet,
  SafeAreaView,
} from "react-native";
// import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Feather, FontAwesome } from "@expo/vector-icons";

import backgroundImage from "../../assets/images/wallpaper.jpg";
import menuIcon from "./../../assets/images/menu.png";
import bellIcon from "./../../assets/images/bell.png";
import whatsAppIcon from "./../../assets/images/whatsapp.jpg";
import profileImage from "../../assets/images/john_ross.png";
import videoImage from "../../assets/images/video.png";

import whatsAppIconTwo from "./../../assets/images/whatsapp2.png";
import messageIcon from "../../assets/images/message.png";
import phoneIcon from "../../assets/images/phone.png";
import chatIcon from "../../assets/images/chat.png";

import duoIcon from "../../assets/images/Duo.png";
import googleMeetIcon from "../../assets/images/google_meet.png";

import notePadIcon from "../../assets/images/notepad.png";
import testPassedIcon from "../../assets/images/test_passed.png";
import progressGraphIcon from "../../assets/images/progress_graph.png";
import appointmentIcon from "../../assets/images/appointment.png";
import johnDoeImage from "../../assets/images/john_doe.png";
import kebabIcon from "../../assets/images/kebab.png";
import homeIcon from "../../assets/images/home.png";
import searchIcon from "../../assets/images/search.png";
import profileIcon from "../../assets/images/profile.png";

import { LinearGradient } from "expo-linear-gradient";
import colors from "../../config/customColors";
// const screenHeight: number = Dimensions.get("window").height;

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

  interface BoxProps {
    title: string;
    icon: any;
  }

  const Box: React.FC<BoxProps> = ({ title, icon }) => (
    <LinearGradient
      colors={[colors.darkBlueGradientTwo, colors.lightBlueGradientTwo]}
      className="w-44 h-28 rounded-xl border border-white flex justify-center items-center"
    >
      <Image source={icon} style={{ width: 28, height: 28 }} />
      <Text className="text-white font-semibold mt-2 text-center">{title}</Text>
    </LinearGradient>
  );

  return (
    <ScrollView
      className="flex-1 bg-lightBlueGradientOne"
      // contentContainerStyle={{ paddingBottom: 20 }}
    >
      {/* ++++++++++++ home background image box ++++++++++++ */}
      <View className=" relative">
        <Image
          source={backgroundImage}
          style={{ width: "100%", height: "100%", position: "absolute" }}
          resizeMode="cover"
        />
        {/* Header with menu, bell, and share icons */}
        <View className="flex-row justify-between items-center p-4">
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
            className="z-10"
          >
            <Image
              source={menuIcon}
              style={{ width: 30, height: 30 }}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <View className="flex-row items-center gap-4">
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
        </View>
        {/* Time and Date */}
        <View className="items-center mt-6">
          <Text className="font-albertLight text-customWhite text-2xl font-bold mb-1">
            11 : 59 AM
          </Text>
          <Text className="font-albertLight text-customWhite text-xl">
            Tuesday, Sep 23
          </Text>
        </View>

        {/* Greeting */}
        <View className="mt-32 m-4">
          <Text className="text-white text-2xl font-albertBold">
            Good Morning
          </Text>

          {/* User Card */}
          <Pressable onPress={() => navigation.navigate("Profile")}>
            <View className="bg-customBlueOne p-4 rounded-xl flex-row items-center space-x-4 border border-customWhiteEighty  mt-3">
              <Image
                source={profileImage}
                style={{ width: 45, height: 45 }}
                className=" rounded-full border border-customWhiteThirty mb-7"
              />

              <View className="flex-1">
                <Text className="text-white text-base font-albertRegular">
                  John Ross, Welcome Aboard!
                </Text>
                <View className="flex flex-row gap-4 mt-2">
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
              </View>
            </View>
          </Pressable>
        </View>
      </View>

      <LinearGradient
        colors={[colors.lightBlueGradientOne, colors.darkBlueGradientOne]}
      >
        {/* ++++++++++++ Video player box ++++++++++++ */}

        <View
          // className=" rounded-2xl m-4 mt-0"
          // horizontal
          // showsHorizontalScrollIndicator={false}
          className="flex flex-row gap-4 relative m-4 mt-0"

          // contentContainerStyle={{ paddingRight: 16 }}
        >
          <Image
            source={videoImage}
            style={{ width: "70%", height: "100%" }}
            className=" rounded-3xl "
          />
          <Image
            source={videoImage}
            style={{ width: "70%", height: "100%" }}
            className=" rounded-3xl "
          />
        </View>

        <View className=" h-0.5 bg-customWhiteTwenty m-4 mt-2 " />

        {/* ++++++++++++ Appointments box ++++++++++++ */}

        <View className="flex gap-4 relative  mx-4 mt-0 ">
          <View className=" flex flex-row justify-between">
            <Text className="text-customWhite text-lg font-albertBold text-center">
              Upcoming Appointments
            </Text>
            <Text className=" text-base text-customWhite font-albertMedium text-center">
              See all
            </Text>
          </View>
          <View className="bg-customBlueOne rounded-xl py-2 px-3 flex-row items-center gap-4 border border-customWhiteEighty">
            {/* Left: Appointment Icon */}
            <Image
              source={duoIcon}
              style={{ width: 50, height: 100 }}
              className=" rounded-xl flex-1 "
            />

            {/* Middle: Appointment Details */}
            <View className="flex-1 gap-1">
              <View>
                <Text className="text-white text-[10px] font-albertMedium">
                  04 Aug 24
                  <Text className="text-customYellow font-albertMedium m-1">
                    Time
                  </Text>
                  11:30 hrs EST
                </Text>
              </View>
              <View className="flex flex-row">
                <Image
                  source={profileImage}
                  style={{ width: 20, height: 20 }}
                  className=" rounded-full mr-2"
                />
                <Text className="text-white text-xs font-albertSemiBold mt-1">
                  John Ross - mentor
                </Text>
              </View>

              <Text className="text-white text-xs mt-1">
                Mode: <Text className="font-albertSemiBold">Duo</Text>
              </Text>
              <View className="flex flex-row justify-start gap-2">
                <Image
                  source={phoneIcon}
                  style={{ width: 18, height: 18 }}
                  className=" "
                />
                <Image
                  source={chatIcon}
                  style={{ width: 18, height: 18 }}
                  className=" "
                />
                <Image
                  source={messageIcon}
                  style={{ width: 18, height: 18 }}
                  className=" "
                />
                <Image
                  source={whatsAppIconTwo}
                  style={{ width: 18, height: 18 }}
                  className=" "
                />
              </View>
            </View>

            {/* Right: Arrow Icon */}
            <TouchableOpacity>
              <Feather name="chevron-right" size={24} color="white" />
            </TouchableOpacity>
          </View>

          <View className="bg-customBlueOne rounded-xl py-2 px-3 flex-row items-center gap-4 border border-customWhiteEighty">
            {/* Left: Appointment Icon */}
            <Image
              source={googleMeetIcon}
              style={{ width: 50, height: 100 }}
              className=" rounded-xl flex-1 "
            />

            {/* Middle: Appointment Details */}
            <View className="flex-1 gap-1">
              <View>
                <Text className="text-white text-[10px] font-albertMedium">
                  04 Aug 24
                  <Text className="text-customYellow font-albertMedium m-1">
                    Time
                  </Text>
                  11:30 hrs EST
                </Text>
              </View>
              <View className="flex flex-row">
                <Image
                  source={profileImage}
                  style={{ width: 20, height: 20 }}
                  className=" rounded-full mr-2"
                />
                <Text className="text-white text-xs font-albertSemiBold mt-1">
                  John Ross - mentor
                </Text>
              </View>

              <Text className="text-white text-xs mt-1">
                Mode: <Text className="font-albertSemiBold">Duo</Text>
              </Text>
              <View className="flex flex-row justify-start gap-2">
                <Image
                  source={phoneIcon}
                  style={{ width: 18, height: 18 }}
                  className=" "
                />
                <Image
                  source={chatIcon}
                  style={{ width: 18, height: 18 }}
                  className=" "
                />
                <Image
                  source={messageIcon}
                  style={{ width: 18, height: 18 }}
                  className=" "
                />
                <Image
                  source={whatsAppIconTwo}
                  style={{ width: 18, height: 18 }}
                  className=" "
                />
              </View>
            </View>

            {/* Right: Arrow Icon */}
            <TouchableOpacity>
              <Feather name="chevron-right" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <View className=" h-0.5 bg-customWhiteTwenty m-4 mt-8" />

        {/* ++++++++++++ Roadmap box ++++++++++++ */}

        <View className="flex gap-4 relative mx-4 mt-0 ">
          <View className=" flex flex-row justify-between">
            <Text className="text-customWhite text-lg font-albertBold text-center">
              Today's Roadmap List
            </Text>
            <Text className=" text-base text-customWhite font-albertMedium text-center">
              See all
            </Text>
          </View>
          <View className="flex-row items-center justify-between bg-customBlueThree px-3 py-1 rounded-lg border border-customWhiteEighty">
            <View className="flex flex-row justify-between items-center ">
              <Image source={notePadIcon} style={{ width: 24, height: 24 }} />
              <Text className="text-white font-albertMedium text-sm px-1">
                Phase 1 – Revitalization Roadmap
              </Text>
            </View>
            <View className="flex flex-row">
              <Text className="text-customYellow font-albertMedium text-sm p-2">
                Due
              </Text>
              {/* Right: Arrow Icon */}
              <TouchableOpacity className="p-1">
                <Feather name="chevron-right" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
          <View className="flex-row items-center justify-between bg-customBlueThree px-3 py-1 rounded-lg border border-customWhiteEighty">
            <View className="flex flex-row justify-between items-center ">
              <Image source={notePadIcon} style={{ width: 24, height: 24 }} />
              <Text className="text-white font-albertMedium text-sm px-1">
                Phase 2 – Revitalization Roadmap
              </Text>
            </View>
            <View className="flex flex-row ">
              <Text className="text-white font-albertMedium text-sm p-2">
                In Progress
              </Text>
              {/* Right: Arrow Icon */}
              <TouchableOpacity className="p-1">
                <Feather name="chevron-right" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
          <View className="flex-row items-center justify-between bg-customBlueThree px-3 py-1 rounded-lg border border-customWhiteEighty">
            <View className="flex flex-row justify-between items-center ">
              <Image
                source={testPassedIcon}
                style={{ width: 24, height: 24 }}
              />
              <Text className="text-white font-albertMedium text-sm px-1">
                Questionnaires - Survey
              </Text>
            </View>
            <View className="flex flex-row ">
              <Text className="text-white font-albertMedium text-sm p-2">
                Remaining
              </Text>
              {/* Right: Arrow Icon */}
              <TouchableOpacity className="p-1">
                <Feather name="chevron-right" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View className=" h-0.5 bg-customWhiteTwenty m-4 mt-8" />

        {/* ++++++++++++ Explore CCC box ++++++++++++ */}

        <View className="flex gap-4 mx-4 mt-0">
          <View className=" flex flex-row justify-between ">
            <Text className="text-customWhite text-lg font-albertBold text-center">
              Explore CCC
            </Text>
          </View>
        </View>

        <View className="flex-1  p-5 px-4">
          <View className="flex flex-row justify-between mb-3">
            <Box title="Revitalization Roadmap" icon={notePadIcon} />
            <Box title="Assessments" icon={testPassedIcon} />
          </View>
          <View className="flex flex-row justify-between">
            <Box title="Progress" icon={progressGraphIcon} />
            <Box title="Appointments" icon={appointmentIcon} />
          </View>
        </View>

        <View className=" h-0.5 bg-customWhiteTwenty m-4 mt-2" />
        {/* ++++++++++++ My mentors box ++++++++++++ */}

        <View className="flex gap-2 relative mx-4 mt-0">
          <View className=" flex flex-row justify-between">
            <Text className="text-customWhite text-lg font-albertBold text-center">
              My Mentors
            </Text>
            <Text className=" text-base text-customWhite font-albertMedium text-center">
              See all
            </Text>
          </View>
          <View className="flex-row items-center justify-between bg-customBlueFour  py-2 rounded-lg border border-customWhiteEighty">
            <View className="flex flex-row justify-between items-center">
              <Image
                source={johnDoeImage}
                style={{ width: 30, height: 30 }}
                className=" rounded-md mx-2"
              />
              <Text className="text-white font-albertMedium text-sm px-1">
                John Doe - Mentor
              </Text>
            </View>
            <View className="flex flex-row gap-1 px-2">
              <Image source={phoneIcon} style={{ width: 18, height: 18 }} />
              <Image source={chatIcon} style={{ width: 18, height: 18 }} />
              <Image source={messageIcon} style={{ width: 18, height: 18 }} />
              <Image
                source={whatsAppIconTwo}
                style={{ width: 18, height: 18 }}
              />
              <Image source={kebabIcon} style={{ width: 18, height: 18 }} />
            </View>
          </View>
          <View className="flex-row items-center justify-between bg-customBlueFour  py-2 rounded-lg border border-customWhiteEighty">
            <View className="flex flex-row justify-between items-center">
              <Image
                source={johnDoeImage}
                style={{ width: 30, height: 30 }}
                className=" rounded-md mx-2"
              />
              <Text className="text-white font-albertMedium text-sm px-1">
                John Doe - Field Mentor
              </Text>
            </View>
            <View className="flex flex-row gap-1 px-2">
              <Image source={phoneIcon} style={{ width: 18, height: 18 }} />
              <Image source={chatIcon} style={{ width: 18, height: 18 }} />
              <Image source={messageIcon} style={{ width: 18, height: 18 }} />
              <Image
                source={whatsAppIconTwo}
                style={{ width: 18, height: 18 }}
              />
              <Image source={kebabIcon} style={{ width: 18, height: 18 }} />
            </View>
          </View>
        </View>
        <View className=" h-0.5 bg-customWhiteTwenty my-8 mx-4 " />
      </LinearGradient>

      {/* ++++++++++++ footer ++++++++++++ */}

      <View className="flex flex-row justify-evenly bg-customBlueFive p-2 ">
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
    </ScrollView>
  );
}

// +++++++++++++++++++++++++++++ OLD CODE ++++++++++++++++++++++++++++++

//   return (
//     <ScrollView
//       className=""
//       overScrollMode="never"
//       contentContainerStyle={{
//         flexGrow: 1,
//         paddingHorizontal: 16,
//         paddingBottom: 16,
//         justifyContent: "flex-start",
//         alignItems: "center",
//       }}
//     >
//       <ImageBackground
//         source={BackgroundImage}
//         className="w-full absolute top-0 left-0 z-10"
//         resizeMode="cover"
//       >
//         <View className="relative z-20 p-4" />

//         {/* Header with menu, bell, and share icons */}
//         <View className="flex-row justify-between items-center p-4">
//           <TouchableOpacity onPress={() => navigation.openDrawer()}>
//             <Text className="text-white text-2xl">☰</Text>
//           </TouchableOpacity>
//           <View className="flex-row items-center gap-4">
//             <View className="relative">
//               <Text className="text-white text-2xl">🔔</Text>
//               <View className="absolute -top-2 -right-2 bg-yellow-400 w-5 h-5 rounded-full items-center justify-center">
//                 <Text className="text-white text-xs font-bold">3</Text>
//               </View>
//             </View>
//             <TouchableOpacity>
//               <Text className="text-white text-2xl">🔗</Text>
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Time and Date */}
//         <View className="items-center mt-6">
//           <Text className="text-white text-4xl font-bold">11 : 59 AM</Text>
//           <Text className="text-white text-xl">Tuesday, Sep 23</Text>
//         </View>

//         {/* Greeting */}
//         <View className="mt-6 ml-4">
//           <Text className="text-white text-2xl font-semibold">
//             Good Morning
//           </Text>
//         </View>

//         {/* User Card */}
//         <Pressable onPress={() => navigation.navigate("Profile")}>
//           <View className="bg-blue-700/80 mx-4 mt-4 p-4 rounded-xl flex-row items-center">
//             <Image
//               source={profileImage}
//               className="w-12 h-12 rounded-full mr-4"
//             />
//             <View className="flex-1">
//               <Text className="text-white text-lg font-semibold">
//                 John Ross, Welcome Aboard!
//               </Text>
//               <Text className="text-white text-sm mt-2">Progress</Text>
//               <View className="w-full bg-gray-300 h-2 rounded-full mt-1">
//                 <View className="bg-blue-900 h-2 rounded-full w-[70%]" />
//               </View>
//               <Text className="text-white text-sm mt-1 text-right">70%</Text>
//             </View>
//           </View>
//         </Pressable>
//       </ImageBackground>
//       <View className="z-0">
//         {/* Video previews */}
//         <View className="flex-row justify-around mt-4">
//           {[1, 2].map((_, index) => (
//             <Image
//               key={index}
//               // source={videoImage}
//               // source={require("./assets/video-preview.png")}
//               className="w-40 h-28 rounded-xl"
//             />
//           ))}
//         </View>

//         {/* Upcoming Appointments Header */}
//         <View className="flex-row justify-between items-center p-4 mt-6">
//           <Text className="text-white text-lg font-bold">
//             Upcoming Appointments
//           </Text>
//           <TouchableOpacity>
//             <Text className="text-blue-300">See all</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Appointment Cards */}
//         <View className=" px-4">
//           {appointments.map((item, index) => (
//             <View
//               key={index}
//               className="bg-blue-800 rounded-xl p-4 mb-4 flex-row items-center border border-blue-500"
//             >
//               <Image
//                 source={profileImage}
//                 className="w-14 h-14 rounded-lg mr-4"
//               />
//               <View className="flex-1">
//                 <Text className="text-white text-sm">
//                   {item.date} <Text className="text-yellow-300">Time</Text>{" "}
//                   {item.time}
//                 </Text>
//                 <Text className="text-white font-bold mt-1">{item.mentor}</Text>
//                 <Text className="text-white text-xs mt-1">
//                   Mode: <Text className="text-blue-300">{item.mode}</Text>
//                 </Text>
//                 <View className="flex-row mt-2 space-x-3">
//                   <FontAwesome name="phone" size={16} color="white" />
//                   <FontAwesome name="envelope" size={16} color="white" />
//                   <FontAwesome name="comment" size={16} color="white" />
//                   <FontAwesome name="whatsapp" size={16} color="white" />
//                 </View>
//               </View>
//               <FontAwesome name="chevron-right" size={20} color="white" />
//             </View>
//           ))}
//         </View>
//       </View>
//     </ScrollView>
//   );
// }

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

{
  /* <View className="bg-white p-6 rounded-2xl shadow-lg border border-gray-300">
  <Text className="text-lg font-semibold text-center">Box 7</Text>
</View>; */
}
