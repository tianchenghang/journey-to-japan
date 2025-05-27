import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      {/* Optionally configure static options outside the route.*/}
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
      <Stack.Screen
        name="tip"
        options={{ headerShown: false, presentation: "modal" }}
      />
    </Stack>
  );
}
