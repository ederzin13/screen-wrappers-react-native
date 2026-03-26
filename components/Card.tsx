import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Ionicons, {
  IoniconsIconName,
} from "@react-native-vector-icons/ionicons";

type CardProps = {
  departmentIcon: IoniconsIconName;
  employeeName: string;
};

export default function Card({ departmentIcon, employeeName }: CardProps) {
  return (
    <View style={styles.container}>
      <Ionicons style={styles.icon} name={departmentIcon}></Ionicons>
      <Text style={styles.text}>{employeeName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f7f4f0",
    padding: 20,
    gap: 20,
    width: 330,
    borderRadius: 20,
    borderWidth: 0.5,
  },
  icon: {
    fontSize: 50,
  },
  text: {
    fontSize: 25,
    fontWeight: "300",
  },
});
