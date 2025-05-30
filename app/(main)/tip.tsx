import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { themeGray } from "@/constants/Colors";
import { hapticSoft } from "@/utils/hap";
import { useHeaderHeight } from "@react-navigation/elements";
import { Pressable, ScrollView } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
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
      <Animated.View style={animatedStyle}>
        <Pressable
          onPressIn={() => {
            hapticSoft();
            sharedScale.value = withSpring(0.96);
          }}
          onPressOut={() => {
            sharedScale.value = withSpring(1);
          }}
          style={{
            position: "absolute",
            width: "80%",
            height: 50,
            bottom: safeBottom,
            borderRadius: 25,
            backgroundColor: themeGray,
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
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
