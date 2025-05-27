import { View, Text } from "react-native";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
      }}
    >
      <View
        style={{
          backgroundColor: "#F2F2F2",
          paddingVertical: 8,
          paddingHorizontal: 10,
          borderRadius: 16,
        }}
      >
        <Text style={{ fontSize: 14 }}>用户消息</Text>
      </View>
    </View>
  );
}
