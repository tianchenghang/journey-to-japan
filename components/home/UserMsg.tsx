import { StyleSheet, useColorScheme } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IMsgItem } from "@/components/home/MsgItem";
import { themeGreenDark, themeGreenLight } from "@/constants/Colors";

interface IProps {
  item: IMsgItem;
}

export default function UserMsg({ item }: IProps) {
  const { content } = item;
  const colorScheme = useColorScheme();
  return (
    <ThemedView
      style={[
        styles.container,
        {
          backgroundColor:
            colorScheme === "light" ? themeGreenLight : themeGreenDark,
        },
      ]}
    >
      <ThemedText style={{ fontSize: 16 }}>{[content]}</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "flex-end",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 16,
  },
});
