import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

type ScrollableProps = {
  children: React.ReactNode;
  padding?: number;
  gap?: number;
  onRefresh?: () => void;
};

export default function Scrollable({
  children,
  padding = 20,
  gap,
  onRefresh,
}: ScrollableProps) {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView>{children}</ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
