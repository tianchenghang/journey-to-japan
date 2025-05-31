import { Platform, Pressable, useColorScheme } from "react-native";

import { BlurView } from "expo-blur";
import { Image } from "expo-image";

interface IProps {
  showScrollBtn: boolean;
  handleScroll: () => void;
}

export default function ScrollButton(props: IProps) {
  const colorScheme = useColorScheme();
  const { showScrollBtn, handleScroll } = props;

  return (
    showScrollBtn && (
      <BlurView
        style={[
          {
            width: 36,
            height: 36,
            borderRadius: 12,
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          },
          Platform.OS === "android" && {
            backgroundColor: colorScheme === "light" ? "#ddd" : "#333",
          },
        ]}
      >
        <Pressable onPress={handleScroll}>
          <Image
            source={require("@/assets/images/down2.svg")}
            style={{ width: 24, height: 24 }}
            tintColor={colorScheme === "light" ? "#333" : "#ddd"}
          />
        </Pressable>
      </BlurView>
    )
  );
}
