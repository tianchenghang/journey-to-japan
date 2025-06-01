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
import UploadModal from "./UploadModal";

interface IProps {
  handleSend: (content: string) => Promise<void>;
  isLoading: boolean;
}

export default function HomeFooter(props: IProps) {
  const { handleSend, isLoading } = props;

  const { bottom: safeBottom } = useSafeAreaInsets();
  const colorScheme = useColorScheme() ?? "light";

  const [enableDeepSearch, setEnableDeepSearch] = useState(false);
  const [enableThink, setEnableThink] = useState(false);
  const [content, setContent] = useState("");

  const [showModal, setShowModal] = useState(false);

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
              source={require("@/assets/images/think.svg")}
              style={{ width: 24, height: 24 }}
              tintColor={colorScheme === "light" ? "#333" : "#ddd"}
            />
          ) : (
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <Image
                source={require("@/assets/images/think.svg")}
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
              source={require("@/assets/images/web.svg")}
              style={{ width: 24, height: 24 }}
              tintColor={colorScheme === "light" ? "#333" : "#ddd"}
            />
          ) : (
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <Image
                source={require("@/assets/images/web.svg")}
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
        <Pressable
          onPress={() => {
            hapticSoft();
            setShowModal(true);
          }}
        >
          <Image
            source={require("@/assets/images/upload.svg")}
            style={{ width: 32, height: 32 }}
            tintColor={colorScheme === "light" ? "#333" : "#ddd"}
          />
        </Pressable>
        <TextInput
          value={content}
          onChangeText={setContent}
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
        <Pressable
          onPress={() => {
            if (!content.trim()) {
              return;
            }
            handleSend(content);
            setContent("");
          }}
        >
          {!isLoading ? (
            <Image
              source={require("@/assets/images/send.svg")}
              style={{ width: 32, height: 32 }}
              tintColor={colorScheme === "light" ? "#333" : "#ddd"}
            />
          ) : (
            <Image
              source={require("@/assets/images/stop.svg")}
              style={{ width: 32, height: 32 }}
              tintColor={colorScheme === "light" ? "#333" : "#ddd"}
            />
          )}
        </Pressable>
      </View>

      <UploadModal showModal={showModal} setShowModal={setShowModal} />
    </BlurView>
  );
}

const styles = StyleSheet.create({
  container: {
    // position: "absolute",
    // bottom: 0,
    // width: "100%",
    // flexDirection: "column",
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
