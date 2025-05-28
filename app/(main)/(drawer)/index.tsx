// cmd/alt + ↑
import { FlatList, Platform, KeyboardAvoidingView } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";

import HomeFooter from "@/components/home/HomeFooter";
import UserMessage from "@/components/home/UserMessage";
import AgentMessage from "@/components/home/AgentMessage";
import { ThemedView } from "@/components/ThemedView";

interface IMessageItem {
  key: string;
  role: "user" | "agent";
  content: string;
}

const messageList: IMessageItem[] = [
  { key: "1", role: "user", content: "User ping." },
  { key: "2", role: "agent", content: "Agent pong." },
  { key: "3", role: "user", content: "User ping again." },
  { key: "4", role: "agent", content: "Agent pong again." },
  { key: "5", role: "user", content: "User ping." },
  { key: "6", role: "agent", content: "Agent pong." },
  { key: "7", role: "user", content: "User ping again." },
  { key: "8", role: "agent", content: "Agent pong again." },
  { key: "9", role: "user", content: "User ping." },
  { key: "10", role: "agent", content: "Agent pong." },
  { key: "11", role: "user", content: "User ping again." },
  { key: "12", role: "agent", content: "Agent pong again." },
  { key: "13", role: "user", content: "User ping." },
  { key: "14", role: "agent", content: "Agent pong." },
  { key: "15", role: "user", content: "User ping again." },
  { key: "16", role: "agent", content: "Agent pong again." },
  { key: "17", role: "user", content: "User ping." },
  { key: "18", role: "agent", content: "Agent pong." },
  { key: "19", role: "user", content: "User ping again." },
  { key: "20", role: "agent", content: "Agent pong again." },
  { key: "21", role: "user", content: "User ping." },
  { key: "22", role: "agent", content: "Agent pong." },
  { key: "23", role: "user", content: "User ping again." },
  { key: "24", role: "agent", content: "Agent pong again." },
  { key: "25", role: "user", content: "User ping." },
  { key: "26", role: "agent", content: "Agent pong." },
  { key: "27", role: "user", content: "User ping again." },
  { key: "28", role: "agent", content: "Agent pong again." },
  { key: "29", role: "user", content: "User ping again." },
];

const MessageItem = ({ role, content }: IMessageItem) => {
  return role === "user" ? (
    <UserMessage content={content} />
  ) : (
    <AgentMessage content={content} />
  );
};

export default function Index() {
  const headerHeight = useHeaderHeight();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "android" ? "height" : "padding"}
      style={{ flex: 1 }}
      // keyboardVerticalOffset={headerHeight}
    >
      <ThemedView style={{ flex: 1 }}>
        <FlatList
          data={messageList}
          renderItem={({ item }) => (
            <MessageItem
              key={item.key}
              role={item.role}
              content={item.content}
            />
          )}
          keyExtractor={(item) => item.key}
          contentContainerStyle={{
            paddingTop: headerHeight,
            paddingBottom: headerHeight * 2,
            paddingHorizontal: 10,
          }}
          // 垂直滚动条
          showsVerticalScrollIndicator={true}
        />

        <HomeFooter />
      </ThemedView>
    </KeyboardAvoidingView>
  );
}
