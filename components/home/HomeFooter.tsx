import { useState } from "react";
import {
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { BlurView } from "expo-blur";
import { Image } from "expo-image";

import VoiceButton from "@/components/home/VoiceButton";
import { themePurple } from "@/constants/Colors";
import { hapticSoft } from "@/utils/hap";

export default function HomeFooter() {
  const { bottom: safeBottom } = useSafeAreaInsets();
  const colorScheme = useColorScheme() ?? "light";
  const [enableDeepSearch, setEnableDeepSearch] = useState(false);
  const [enableThink, setEnableThink] = useState(false);

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
      intensity={50} // 默认值
    >
      <View style={styles.row1}>
        <Pressable
          onPress={() => {
            hapticSoft();
            setEnableThink(!enableThink);
          }}
          style={{
            borderWidth: 1,
            borderRadius: 16,
            borderColor: colorScheme === "light" ? "#ccc" : "#444",
            paddingVertical: 4,
            paddingHorizontal: 5,
          }}
        >
          {!enableThink ? (
            <Image
              source={require("@/assets/images/tip.svg")}
              style={{ width: 24, height: 24 }}
              tintColor={colorScheme === "light" ? "#333" : "#ddd"}
            />
          ) : (
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <Image
                source={require("@/assets/images/tip.svg")}
                style={{ width: 24, height: 24 }}
                tintColor={themePurple}
              />
              <Text
                style={{
                  color: colorScheme === "light" ? "#000" : "#fff",
                  paddingRight: 5,
                }}
              >
                Think
              </Text>
            </View>
          )}
        </Pressable>

        <Pressable
          onPress={() => {
            hapticSoft();
            setEnableDeepSearch(!enableDeepSearch);
          }}
          style={{
            borderWidth: 1,
            borderRadius: 16,
            borderColor: colorScheme === "light" ? "#ccc" : "#444",
            paddingVertical: 4,
            paddingHorizontal: 5,
          }}
        >
          {!enableDeepSearch ? (
            <Image
              source={require("@/assets/images/earth.svg")}
              style={{ width: 24, height: 24 }}
              tintColor={colorScheme === "light" ? "#333" : "#ddd"}
            />
          ) : (
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <Image
                source={require("@/assets/images/earth.svg")}
                style={{ width: 24, height: 24 }}
                tintColor={themePurple}
              />
              <Text
                style={{
                  color: colorScheme === "light" ? "#000" : "#fff",
                  paddingRight: 5,
                }}
              >
                DeepSearch
              </Text>
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
          <Image
            source={require("@/assets/images/submit.svg")}
            style={{ width: 32, height: 32 }}
            tintColor={colorScheme === "light" ? "#333" : "#ddd"}
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
    gap: 10,
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
    borderWidth: 1,
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
});
