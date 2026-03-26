import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Input from "./Input";

export default function Login() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/lambda.png")}
      ></Image>
      <Text style={styles.title}>Faça login!</Text>
      <Input label="Username" icon="person-outline"></Input>
      <Input label="Password" icon="lock-closed-outline"></Input>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f7f4f0",
    gap: 20,
    height: 400,
    width: 300,
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  image: {
    height: 150,
    width: 150,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
});
