import { Text, Pressable, StyleSheet, useColorScheme } from "react-native";

import { Image } from "expo-image";
import { router } from "expo-router";

import { themePurple } from "@/constants/Colors";

export default function HeaderTitle() {
  const handlePress = () => {
    router.push("/tip");
  };
  const colorScheme = useColorScheme();

  return (
    <Pressable
      onPress={handlePress}
      style={[
        styles.container,
        { backgroundColor: colorScheme === "light" ? "#eee" : "#222" },
      ]}
    >
      <Text style={{ color: themePurple, fontSize: 16 }}>Get TIPs</Text>
      <Image
        source={require("@/assets/images/star.svg")}
        style={{ width: 16, height: 16 }}
        tintColor={themePurple}
      ></Image>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    flexDirection: "row",
    gap: 5,
    // 伸缩项目在主轴上的对齐方式
    justifyContent: "center",
    // 伸缩项目在交叉轴上 (单根轴线) 的对齐方式
    alignItems: "center",
    borderRadius: 16,
  },
});
