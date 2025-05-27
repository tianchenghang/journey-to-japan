import { Pressable } from "react-native";
import { Image } from "expo-image";
import { useColorScheme } from "@/hooks/useColorScheme";

interface IProps {
  onPress: () => void;
}

export default function MenuButton({ onPress }: IProps) {
  const colorScheme = useColorScheme() ?? "light";
  return (
    <Pressable
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      onPress={onPress}
    >
      <Image
        source={require("@/assets/images/menu.svg")}
        style={{ width: 24, height: 24 }}
        tintColor={colorScheme === "light" ? "#000" : "#fff"}
        contentFit="cover"
      />
    </Pressable>
  );
}
