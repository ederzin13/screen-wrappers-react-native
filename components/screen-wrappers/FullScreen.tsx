import { View, Text, StyleSheet } from "react-native";
import React from "react";

type ScreenWrapperProps = {
  children: React.ReactNode;
  center?: boolean;
  padding?: number;
  gap?: number;
};

export default function FullScreen({
  children,
  center,
  padding = 20,
  gap,
}: ScreenWrapperProps) {
  return <View>{children}</View>;
}
