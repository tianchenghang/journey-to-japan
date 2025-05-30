import { BlurView } from "expo-blur";
import { Image as ExpoImage } from "expo-image";
import {
  Platform,
  Pressable,
  StyleSheet,
  TextInput,
  useColorScheme,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ImageFooter() {
  const { bottom: safeBottom } = useSafeAreaInsets();
  const colorScheme = useColorScheme() ?? "light";

  return (
    <BlurView
      tint={colorScheme}
      style={[
        styles.container,
        { paddingBottom: safeBottom },
        Platform.OS === "android" && {
          backgroundColor:
            colorScheme === "light"
              ? "rgba(255, 255, 255, 1)"
              : "rgba(51, 51, 51, 1)",
        },
      ]}
    >
      <Pressable onPress={() => {}}>
        <ExpoImage
          source={require("@/assets/images/config.svg")}
          style={{
            width: 32,
            height: 32,
          }}
          tintColor={colorScheme === "light" ? "#333" : "#fff"}
        />
      </Pressable>
      <TextInput
        multiline
        placeholder="What can I help with?"
        placeholderTextColor={colorScheme === "light" ? "#333" : "#ccc"}
        autoCorrect={true}
        autoCapitalize="sentences"
        style={[
          styles.textInput,
          {
            color: colorScheme === "light" ? "#000" : "#fff",
          },
        ]}
      />
      <Pressable onPress={() => {}}>
        <ExpoImage
          source={require("@/assets/images/submit.svg")}
          style={{ width: 32, height: 32 }}
          tintColor={colorScheme === "light" ? "#333" : "#fff"}
        />
      </Pressable>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    gap: 8,
    paddingTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  textInput: {
    flex: 1,
    // minHeight: 32, // 16 + 8 + 8
    fontSize: 16,
    maxHeight: 96,
    borderColor: "#eee",
    borderWidth: 1,
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
});
