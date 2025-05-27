import { useColorScheme } from "@/hooks/useColorScheme";
import { StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
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
          backgroundColor: colorScheme === "light" ? "#f2f2f2" : "#212121",
        },
      ]}
    >
      <ThemedText style={styles.text}>{[props.content]}</ThemedText>
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
  text: { fontSize: 16 },
});
