import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useHeaderHeight } from "@react-navigation/elements";
import { Pressable, ScrollView } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Tip() {
  const headerHeight = useHeaderHeight();
  const { bottom: safeBottom } = useSafeAreaInsets();
  const sharedScale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: sharedScale.value }],
    };
  });
  return (
    <ThemedView
      style={{
        flex: 1,
        paddingTop: headerHeight,
      }}
    >
      <ThemedText>TIPs</ThemedText>
      <ScrollView>{/* todo */}</ScrollView>
      <Animated.View>
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
            borderRadius: 25,
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
      </Animated.View>
    </ThemedView>
  );
}
