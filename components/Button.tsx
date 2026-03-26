import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

type ButtonProps = {
  text: string;
  buttonColor?: string;
};

export default function Button({ text, buttonColor }: ButtonProps) {
  return (
    <TouchableOpacity>
      <View
        style={[
          styles.container,
          { backgroundColor: buttonColor ? buttonColor : "orange" },
        ]}
      >
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    alignItems: "center",
    padding: 10,
    width: 100,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});
