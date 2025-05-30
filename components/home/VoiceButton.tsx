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
      >
        <Image
          source={require("@/assets/images/voice.svg")}
          style={{ width: 24, height: 24 }}
          tintColor={colorScheme === "light" ? "#333" : "#fff"}
        />
      </Pressable>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        style={
          Platform.OS === "android" && {
            backgroundColor:
              colorScheme === "light"
                ? "rgba(255, 255, 255, 1)"
                : "rgba(51, 51, 51, 1)",
          }
        }
      >
        <BlurView style={{ flex: 1 }}>
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
                backgroundColor:
                  colorScheme === "light" ? "#f1f1fc" : "#070711",
                alignSelf: "center",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Image
                source={require("@/assets/images/check.svg")}
                style={{
                  width: 24,
                  height: 24,
                }}
                tintColor="green"
              />

              <ThemedView
                lightColor="#f1f1fc"
                darkColor="#070711"
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
