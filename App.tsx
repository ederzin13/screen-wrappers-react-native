import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Login from "./components/Login";
import FullScreen from "./components/screen-wrappers/FullScreen";
import Button from "./components/Button";

export default function App() {
  return (
    <FullScreen center={true} gap={20}>
      <Login></Login>
      <Button text="Fazer login" buttonColor="green"></Button>
    </FullScreen>
  );
}
