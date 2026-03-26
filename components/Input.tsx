import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons, {
  IoniconsIconName,
} from "@react-native-vector-icons/ionicons";

type InputProps = {
  label: string;
  icon: IoniconsIconName;
};

export default function Input({ label, icon }: InputProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <Ionicons name={icon} style={styles.text}></Ionicons>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#a4a4a4",
    width: 200,
    padding: 10,
  },
  text: {
    color: "#a4a4a4",
  },
});
