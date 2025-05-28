import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useHeaderHeight } from "@react-navigation/elements";
import { Pressable, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Tip() {
  const headerHeight = useHeaderHeight();
  const { bottom: safeBottom } = useSafeAreaInsets();

  return (
    <ThemedView
      style={{
        flex: 1,
        paddingTop: headerHeight,
      }}
    >
      <ThemedText>TIPs</ThemedText>
      <ScrollView>{/* todo */}</ScrollView>
      <Pressable
        onPress={() => {
          /** todo */
        }}
        style={{
          position: "absolute",
          width: "80%",
          height: 50,
          backgroundColor: "#7f7f7f",
          alignSelf: "center",
          borderRadius: 16,
          justifyContent: "center",
          alignItems: "center",
          bottom: safeBottom,
        }}
      >
        <ThemedText
          lightColor="#fff"
          darkColor="#000"
          style={{ fontWeight: "bold" }}
        >
          Random Japanese Songs
        </ThemedText>
      </Pressable>
    </ThemedView>
  );
}
