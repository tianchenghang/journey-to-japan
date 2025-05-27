import UserMessage from "@/components/home/UserMessage";
import AgentMessage from "@/components/home/AgentMessage";
import { FlatList, View } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { ThemedView } from "@/components/ThemedView";
import { BlurView } from "expo-blur";
import { Image } from "expo-image";
import { TextInput } from "react-native-gesture-handler";

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
        // paddingHorizontal: 20,
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
          paddingHorizontal: 10,
        }}
      />

      <BlurView
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          minHeight: 100,
          flexDirection: "column",
          borderWidth: 1,
          borderTopStartRadius: 16,
          borderTopEndRadius: 16,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 8,
          }}
        >
          <TextInput
            multiline
            placeholder="What can I help with?"
            placeholderTextColor="#818181"
            style={{
              flex: 1,
              borderRadius: 16,
              minHeight: 32,
              maxHeight: 160,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 8,
            paddingHorizontal: 8,
          }}
        >
          <Image
            source={require("@/assets/images/upload.svg")}
            style={{ width: 24, height: 24 }}
          />
          <Image
            source={require("@/assets/images/switch.svg")}
            style={{ width: 24, height: 24 }}
          />
          <Image
            source={require("@/assets/images/voice.svg")}
            style={{ width: 24, height: 24 }}
          />
          <Image
            source={require("@/assets/images/submit.svg")}
            style={{ width: 24, height: 24 }}
          />
        </View>
      </BlurView>
    </ThemedView>
  );
}
