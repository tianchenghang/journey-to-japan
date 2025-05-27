import { ThemedText } from "@/components/ThemedText";
import { useColorScheme } from "@/hooks/useColorScheme";
import { StyleSheet } from "react-native";
import { ThemedView } from "../ThemedView";

interface IProps {
  content: string;
}

export default function UserMessage(props: IProps) {
  const colorScheme = useColorScheme();
  return (
    <ThemedView
      style={[
        styles.container,
        {
          backgroundColor: colorScheme === "light" ? "#effdde" : "#2a4526",
        },
      ]}
    >
      <ThemedText style={{ fontSize: 16 }}>{[props.content]}</ThemedText>
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
