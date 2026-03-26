import { View, Text, StyleSheet } from "react-native";
import React from "react";

type TitleProps = {
  title: string;
  description: string;
};

export default function Title({ title, description }: TitleProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
  },
  description: {
    fontSize: 30,
  },
});
