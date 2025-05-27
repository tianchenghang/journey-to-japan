import { Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { router } from "expo-router";

const HeaderTitle = () => {
  const handlePress = () => {
    router.push("/tip");
  };

  return (
    <Pressable
      onPress={handlePress}
      style={{
        paddingVertical: 10,
        paddingHorizontal: 12,
        flexDirection: "row",
        gap: 3,
        // 伸缩项目在主轴上的对齐方式
        justifyContent: "center",
        // 伸缩项目在交叉轴上 (单根轴线) 的对齐方式
        alignItems: "center",
        backgroundColor: "#F1F1FC",
        borderRadius: 16,
      }}
    >
      <Text style={{ color: "#5856D6", fontSize: 14 }}>获取提示</Text>
      <Image
        source={require("@/assets/images/star.svg")}
        style={{ width: 14, height: 14 }}
        tintColor="#5856D6"
      ></Image>
    </Pressable>
  );
};

export default HeaderTitle;
