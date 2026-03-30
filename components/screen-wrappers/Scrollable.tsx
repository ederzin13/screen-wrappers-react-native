import { View, ScrollView, RefreshControl } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

type ScrollableProps = {
  children: React.ReactNode;
  center: boolean;
  padding?: number;
  gap?: number;
  onRefresh?: () => Promise<void>;
};

export default function Scrollable({
  children,
  center,
  padding = 20,
  gap,
  onRefresh,
}: ScrollableProps) {
  const [refreshing, setRefreshing] = React.useState(false);

  const handleRefresh = async () => {
    // setRefreshing(true);
    // await onRefresh?.();
    // setRefreshing(false);

    setRefreshing(true);
    setTimeout(async () => {
      await onRefresh?.();
      setRefreshing(false);
    }, 2000);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
        >
          <View
            style={{
              alignItems: center ? "center" : "flex-end",
              padding: padding,
              gap: gap,
            }}
          >
            {children}
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
