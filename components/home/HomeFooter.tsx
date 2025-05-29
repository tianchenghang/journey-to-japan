import {
  View,
  Pressable,
  TextInput,
  Platform,
  StyleSheet,
  useColorScheme,
} from "react-native";
import { BlurView } from "expo-blur";
import { Image } from "expo-image";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import VoiceButton from "./VoiceButton";

export default function HomeFooter() {
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
              ? "rgba(255, 255, 255, 0.96)"
              : "rgba(51, 51, 51, 0.96)",
        },
      ]}
      intensity={50} // 默认值
    >
      <View style={styles.row1}>
        <Image
          source={require("@/assets/images/tip.svg")}
          style={{ width: 24, height: 24 }}
          tintColor={colorScheme === "light" ? "#333" : "#fff"}
        />
        <Image
          source={require("@/assets/images/earth.svg")}
          style={{ width: 24, height: 24 }}
          tintColor={colorScheme === "light" ? "#333" : "#fff"}
        />
        <VoiceButton />
      </View>

      <View style={styles.row2}>
        <Pressable onPress={() => {}}>
          <Image
            source={require("@/assets/images/upload.svg")}
            style={{ width: 32, height: 32 }}
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
          <Image
            source={require("@/assets/images/submit.svg")}
            style={{ width: 32, height: 32 }}
            tintColor={colorScheme === "light" ? "#333" : "#fff"}
          />
        </Pressable>
      </View>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "column",
    gap: 8,
    paddingTop: 10,
  },
  row1: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    paddingLeft: 50,
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
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
