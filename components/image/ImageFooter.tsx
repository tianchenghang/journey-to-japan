import {
  Platform,
  Pressable,
  StyleSheet,
  TextInput,
  useColorScheme,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { BlurView } from "expo-blur";
import { Image as ExpoImage } from "expo-image";

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
          backgroundColor: colorScheme === "light" ? "#fff" : "#000",
        },
      ]}
    >
      <Pressable onPress={() => {}}>
        <ExpoImage
          source={require("@/assets/images/setting.svg")}
          style={{
            width: 32,
            height: 32,
          }}
          tintColor={colorScheme === "light" ? "#333" : "#ddd"}
        />
      </Pressable>
      <TextInput
        multiline
        placeholder="What can I help with?"
        placeholderTextColor={colorScheme === "light" ? "#333" : "#ddd"}
        autoCorrect={true}
        autoCapitalize="sentences"
        style={[
          styles.textInput,
          {
            color: colorScheme === "light" ? "#000" : "#fff",
            borderColor: colorScheme === "light" ? "#ccc" : "#444",
          },
        ]}
      />
      <Pressable onPress={() => {}}>
        <ExpoImage
          source={require("@/assets/images/send.svg")}
          style={{ width: 32, height: 32 }}
          tintColor={colorScheme === "light" ? "#333" : "#ddd"}
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
    borderWidth: 1,
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
});
