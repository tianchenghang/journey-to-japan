// cmd/alt + ↑
import { useHeaderHeight } from "@react-navigation/elements";
import { FlatList, KeyboardAvoidingView, Platform } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import HomeFooter from "@/components/home/HomeFooter";
import MessageItem, { IMessageItem } from "@/components/home/MessageItem";

const messageList: IMessageItem[] = [
  { key: "1", role: "user", content: "User ping." },
  {
    key: "2",
    role: "agent",
    content: "Agent pong.",
  },
  { key: "3", role: "user", content: "User ping again." },
  {
    key: "4",
    role: "agent",
    content: "Agent pong again.",
    deepSearch: "Deep search content",
  },
];

export default function Index() {
  const headerHeight = useHeaderHeight();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      // keyboardVerticalOffset={headerHeight}
    >
      <ThemedView style={{ flex: 1 }}>
        <FlatList
          data={messageList}
          renderItem={({ item }) => <MessageItem item={item} />}
          keyExtractor={(item) => item.key}
          contentContainerStyle={{
            paddingTop: headerHeight,
            paddingBottom: headerHeight * 2,
            paddingHorizontal: 10,
            gap: 16,
          }}
          // 垂直滚动条
          showsVerticalScrollIndicator={false}
        />
        <HomeFooter />
      </ThemedView>
    </KeyboardAvoidingView>
  );
}
