import "./../global.css";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { customFonts } from "../config/customFonts";
import { Stack } from "expo-router";

export default function Rootlayout() {
  const [fontsLoaded] = useFonts(customFonts);
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
