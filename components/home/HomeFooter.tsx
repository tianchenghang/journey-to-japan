import VoiceButton from "@/components/home/VoiceButton";
import { BlurView } from "expo-blur";
import { Image } from "expo-image";
import { useState } from "react";
import {
  Platform,
  Pressable,
  StyleSheet,
  TextInput,
  useColorScheme,
  View,
  Text,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeFooter() {
  const { bottom: safeBottom } = useSafeAreaInsets();
  const colorScheme = useColorScheme() ?? "light";
  const [deepSearch, setDeepSearch] = useState(false);
  const [think, setThink] = useState(false);

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
      intensity={50} // 默认值
    >
      <View style={styles.row1}>
        <Pressable onPress={() => setDeepSearch(!deepSearch)}>
          {!deepSearch ? (
            <Image
              source={require("@/assets/images/tip.svg")}
              style={{ width: 24, height: 24 }}
              tintColor={colorScheme === "light" ? "#333" : "#fff"}
            />
          ) : (
            <View>
              <Image
                source={require("@/assets/images/tip.svg")}
                style={{ width: 24, height: 24 }}
                tintColor={colorScheme === "light" ? "#333" : "#fff"}
              />
              <Text>DeepSearch</Text>
            </View>
          )}
        </Pressable>

        <Pressable>
          {!think ? (
            <Image
              source={require("@/assets/images/earth.svg")}
              style={{ width: 24, height: 24 }}
              tintColor={colorScheme === "light" ? "#333" : "#fff"}
            />
          ) : (
            <View>
              <Image
                source={require("@/assets/images/earth.svg")}
                style={{ width: 24, height: 24 }}
                tintColor={colorScheme === "light" ? "#333" : "#fff"}
              />
              <Text>Think</Text>
            </View>
          )}
        </Pressable>
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
