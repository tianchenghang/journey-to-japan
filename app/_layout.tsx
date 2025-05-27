import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      {/* Optionally configure static options outside the route.*/}
      <Stack.Screen name="(main)" options={{ headerShown: false }} />
    </Stack>
  );
}
