import { Modal, Platform, Pressable, useColorScheme } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { BlurView } from "expo-blur";
import { Image } from "expo-image";

import { ThemedText } from "@/components/ThemedText";

interface IProps {
  showModal: boolean;
  setShowModal: (newShowModal: boolean) => void;
}

export default function UploadModal(props: IProps) {
  const { showModal, setShowModal } = props;
  const { bottom: safeBottom } = useSafeAreaInsets();
  const colorScheme = useColorScheme() ?? "light";

  return (
    <Modal
      animationType="fade"
      transparent
      visible={showModal}
      onRequestClose={() => setShowModal(!showModal)}
    >
      <BlurView
        style={[
          { flex: 1 },
          // Platform.OS === "android" && {
          //   backgroundColor: colorScheme === "light" ? "#fff" : "#000",
          // },
        ]}
      >
        <Pressable style={{ flex: 1 }} onPress={() => setShowModal(false)}>
          <ScrollView
            contentContainerStyle={{
              position: "absolute",
              bottom: safeBottom * 2,
              width: "100%",
              paddingLeft: safeBottom,
              gap: 16,
            }}
          >
            <Pressable
              style={{ flexDirection: "row", alignItems: "center", gap: 16 }}
            >
              <Image
                source={require("@/assets/images/picture.svg")}
                style={{
                  width: 24,
                  height: 24,
                }}
                tintColor={colorScheme === "light" ? "#000" : "#fff"}
                contentFit="cover"
              />
              <ThemedText>Picture</ThemedText>
            </Pressable>
            <Pressable
              style={{ flexDirection: "row", alignItems: "center", gap: 16 }}
            >
              <Image
                source={require("@/assets/images/video.svg")}
                style={{
                  width: 24,
                  height: 24,
                }}
                tintColor={colorScheme === "light" ? "#000" : "#fff"}
                contentFit="cover"
              />
              <ThemedText>Video</ThemedText>
            </Pressable>
            <Pressable
              style={{ flexDirection: "row", alignItems: "center", gap: 16 }}
            >
              <Image
                source={require("@/assets/images/camera.svg")}
                style={{
                  width: 24,
                  height: 24,
                }}
                tintColor={colorScheme === "light" ? "#000" : "#fff"}
                contentFit="cover"
              />
              <ThemedText>Camera</ThemedText>
            </Pressable>
            <Pressable
              style={{ flexDirection: "row", alignItems: "center", gap: 16 }}
            >
              <Image
                source={require("@/assets/images/file.svg")}
                style={{
                  width: 24,
                  height: 24,
                }}
                tintColor={colorScheme === "light" ? "#000" : "#fff"}
                contentFit="cover"
              />
              <ThemedText>Document</ThemedText>
            </Pressable>
          </ScrollView>
        </Pressable>
      </BlurView>
    </Modal>
  );
}
