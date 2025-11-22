import { Stack } from "expo-router";
import React from "react";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          contentStyle: { backgroundColor: "#fff" },
        }}
      />
      <Stack.Screen
        name="other-options"
        options={{
          headerShown: false,
          presentation: "formSheet",
          sheetAllowedDetents: [0.6],
          sheetCornerRadius: 16,
          title: "",

          headerShadowVisible: false,
        }}
      />
    </Stack>
  );
};

export default Layout;
