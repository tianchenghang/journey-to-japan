import { View, Text, StyleSheet } from "react-native";
import { ThemedText } from "../ThemedText";

interface IProps {
  content: string;
}

export default function AgentMessage(props: IProps) {
  return (
    <View style={styles.container}>
      <ThemedText style={styles.text}>{[props.content]}</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "flex-start",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 16,
  },
  text: { fontSize: 16 },
});
