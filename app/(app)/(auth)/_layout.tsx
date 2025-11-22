import { Stack } from "expo-router";
import React from "react";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen options={{ headerTitle: "feed" }} name="index" />
    </Stack>
  );
};

export default Layout;
