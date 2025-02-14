import { Stack } from "expo-router";
import "./../global.css";

export default function Rootlayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
