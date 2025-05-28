import { View, Pressable, TextInput, Platform, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";
import { Image } from "expo-image";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ChatFooter() {
  const { bottom: edgeInsetsBottom } = useSafeAreaInsets();

  return (
    <BlurView
      style={[
        styles.container,
        { paddingBottom: edgeInsetsBottom * 1.5 },
        Platform.OS === "android" && { backgroundColor: "#fff" },
      ]}
      intensity={50} // 默认值
    >
      <View style={styles.row1}>
        <Pressable onPress={() => {}}>
          <Image
            source={require("@/assets/images/upload.svg")}
            style={{ width: 32, height: 32 }}
          />
        </Pressable>
        <TextInput
          multiline
          placeholder="What can I help with?"
          placeholderTextColor="#33393f"
          autoCorrect={true}
          autoCapitalize="sentences"
          style={styles.textInput}
        />
        <Pressable onPress={() => {}}>
          <Image
            source={require("@/assets/images/submit.svg")}
            style={{ width: 32, height: 32 }}
          />
        </Pressable>
      </View>

      <View style={styles.row2}>
        <Image
          source={require("@/assets/images/tip.svg")}
          style={{ width: 24, height: 24 }}
        />
        <Image
          source={require("@/assets/images/earth.svg")}
          style={{ width: 24, height: 24 }}
        />
        <Image
          source={require("@/assets/images/voice.svg")}
          style={{ width: 24, height: 24 }}
        />
      </View>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    // minHeight: 100,
    flexDirection: "column",
    gap: 8,
    paddingTop: 10,
  },
  row1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    paddingHorizontal: 10,
  },
  textInput: {
    flex: 1,
    minHeight: 32, // 16 + 8 + 8
    maxHeight: 160,
    borderColor: "#eee",
    borderWidth: 1,
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    paddingLeft: 44,
  },
});
