import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Login from "./components/Login";
import FullScreen from "./components/screen-wrappers/FullScreen";

export default function App() {
  return (
    <FullScreen center={true}>
      <Login></Login>
    </FullScreen>
  );
}
