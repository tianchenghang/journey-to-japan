import UserMessage from "@/components/home/UserMessage";
import { View } from "react-native";

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
      <UserMessage />
    </View>
  );
}
