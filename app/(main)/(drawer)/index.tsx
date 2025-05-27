import UserMessage from "@/components/home/UserMessage";
import AgentMessage from "@/components/home/AgentMessage";
import { FlatList } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
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
    <ThemedView
      style={{
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        paddingHorizontal: 20,
      }}
    >
      <FlatList
        data={messageList}
        renderItem={({ item }) => (
          <MessageItem key={item.key} role={item.role} content={item.content} />
        )}
        keyExtractor={(item) => item.key}
        contentContainerStyle={{
          paddingTop: headerHeight,
        }}
      />
    </ThemedView>
  );
}
