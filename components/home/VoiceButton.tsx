import { useState } from "react";
import { Modal, Platform, Pressable, useColorScheme, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { BlurView } from "expo-blur";
import { Image } from "expo-image";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { hapticsSuccess } from "@/utils/hap";

export default function VoiceButton() {
  const { bottom: safeBottom } = useSafeAreaInsets();
  const colorScheme = useColorScheme() ?? "light";
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Pressable
        onPress={() => {
          hapticsSuccess();
          setModalVisible(true); // 显示 Modal
        }}
        style={{
          borderWidth: 1,
          borderRadius: 16,
          borderColor: colorScheme === "light" ? "#ccc" : "#444",
          paddingVertical: 4,
          paddingHorizontal: 5,
        }}
      >
        <Image
          source={require("@/assets/images/voice.svg")}
          style={{ width: 24, height: 24 }}
          tintColor={colorScheme === "light" ? "#333" : "#ddd"}
        />
      </Pressable>
      <Modal
        animationType="fade"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <BlurView
          style={[
            { flex: 1 },
            // Platform.OS === "android" && {
            //   backgroundColor: colorScheme === "light" ? "#fff" : "#000",
            // },
          ]}
        >
          <Pressable
            style={{ flex: 1 }}
            onPress={() => {
              setModalVisible(false);
            }}
          >
            <Pressable
              style={{
                position: "absolute",
                width: "80%",
                height: 50,
                bottom: safeBottom,
                borderRadius: 25,
                paddingVertical: 8,
                paddingHorizontal: 10,
                backgroundColor: colorScheme === "light" ? "#fff" : "#000",
                alignSelf: "center",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Image
                source={require("@/assets/images/ok.svg")}
                style={{
                  width: 24,
                  height: 24,
                }}
                tintColor="green"
              />

              <ThemedView
                lightColor="#fff"
                darkColor="#000"
                style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
              >
                <View
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: "red",
                  }}
                />
                <ThemedText lightColor="#000" darkColor="#fff">
                  00:01
                </ThemedText>
              </ThemedView>

              <Image
                source={require("@/assets/images/close.svg")}
                style={{
                  width: 24,
                  height: 24,
                }}
                tintColor="red"
              />
            </Pressable>
          </Pressable>
        </BlurView>
      </Modal>
    </>
  );
}
