import { Text, Pressable, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { router } from "expo-router";
import { useColorScheme } from "@/hooks/useColorScheme";

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
        { backgroundColor: colorScheme === "light" ? "#f1f1fc" : "#070711" },
      ]}
    >
      <Text style={styles.text}>Get TIPs</Text>
      <Image
        source={require("@/assets/images/star.svg")}
        style={styles.image}
        tintColor="#5856D6"
      ></Image>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10, // 8 + 2
    paddingHorizontal: 12, // 10 + 2
    flexDirection: "row",
    gap: 5,
    // 伸缩项目在主轴上的对齐方式
    justifyContent: "center",
    // 伸缩项目在交叉轴上 (单根轴线) 的对齐方式
    alignItems: "center",
    borderRadius: 16,
  },
  text: { color: "#5856d6", fontSize: 16 },
  image: { width: 16, height: 16 },
});
