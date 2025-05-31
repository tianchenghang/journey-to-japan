import { StyleSheet, useColorScheme } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

interface IProps {
  content: string;
}

export default function AgentMessage(props: IProps) {
  const colorScheme = useColorScheme();

  return (
    <ThemedView
      style={[
        styles.container,
        {
          backgroundColor: colorScheme === "light" ? "#eee" : "#222",
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
    alignSelf: "flex-start",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 16,
    backgroundColor: "",
  },
});
