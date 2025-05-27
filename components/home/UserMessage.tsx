import { View, Text, StyleSheet } from "react-native";

export default function UserMessage() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>用户消息</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "flex-end",
    backgroundColor: "#F2F2F2",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 16,
  },
  text: { fontSize: 14 },
});
