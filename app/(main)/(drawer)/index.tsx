import { useHeaderHeight } from "@react-navigation/elements";
import { useRef, useState } from "react";
import { FlatList, KeyboardAvoidingView, Platform, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ThemedView } from "@/components/ThemedView";
import HomeFooter from "@/components/home/HomeFooter";
import MsgItem, { IMsgItem } from "@/components/home/MsgItem";
import ScrollButton from "@/components/ui/ScrollButton";

import { agentBotId } from "@/constants/agent";
import { agentClient, agentUserId } from "@/utils/agent";
import { ChatEventType, RoleType } from "@coze/api";

import "react-native-get-random-values";
import { v4 as uuid } from "uuid";

export default function Index() {
  const headerHeight = useHeaderHeight();
  const { bottom: safeBottom } = useSafeAreaInsets();

  const [isLoading, setIsLoading] = useState(false);
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [msgList, setMsgList] = useState<IMsgItem[]>([]);
  const flatListRef = useRef<FlatList>(null);

  const handleScroll = () => {
    flatListRef.current?.scrollToOffset({
      offset: (1 << 15) - 1,
      animated: true,
    });
  };

  const handleSend = async (content: string) => {
    setIsLoading(true);
    const userMsg: IMsgItem = { key: uuid(), content, role: "user" };
    const agentMsg: IMsgItem = {
      key: uuid(),
      content: "",
      role: "agent",
      isLoading: true,
    };
    setMsgList((oldMsgList) => [...oldMsgList, userMsg, agentMsg]);

    let respContent = "";
    try {
      const agentStream = agentClient.chat.stream({
        bot_id: agentBotId,
        user_id: agentUserId,
        auto_save_history: true,
        additional_messages: [
          {
            content,
            content_type: "text",
            role: RoleType.User,
            type: "question",
          },
        ],
      });

      __anchor: for await (const chunk of agentStream) {
        switch (chunk.event) {
          case ChatEventType.CONVERSATION_MESSAGE_DELTA:
            if (chunk.data.content) {
              respContent += chunk.data.content;
            }
            console.log("Agent delta", respContent);
            break;

          case ChatEventType.CONVERSATION_MESSAGE_COMPLETED:
            if (chunk.data.type !== "answer") {
              console.log("chunk.data.type", chunk.data.type);
              break;
            }
            console.log("Agent completed", respContent);
            setIsLoading(false);
            setMsgList((oldMsgList) => {
              const newMsgList = [...oldMsgList];
              newMsgList[newMsgList.length - 1] = {
                ...newMsgList[newMsgList.length - 1],
                isLoading: false,
                content: respContent,
              };
              return newMsgList;
            });
            break;

          case ChatEventType.CONVERSATION_CHAT_COMPLETED:
            break __anchor;
        }
      }
    } catch (err) {
      console.error("Agent error", err);
      setIsLoading(false);
      setMsgList((oldMsgList) => {
        const newMsgList = [...oldMsgList];
        newMsgList[newMsgList.length - 1] = {
          ...newMsgList[newMsgList.length - 1],
          isLoading: false,
          content: "Unknown error",
        };
        return newMsgList;
      });
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      // keyboardVerticalOffset={headerHeight}
    >
      <ThemedView style={{ flex: 1 }}>
        <FlatList
          ref={flatListRef}
          data={msgList}
          renderItem={({ item }) => <MsgItem item={item} />}
          keyExtractor={(item) => item.key}
          contentContainerStyle={{
            paddingTop: headerHeight,
            paddingBottom: headerHeight * 2,
            paddingHorizontal: 10,
            gap: 16,
          }}
          // 垂直滚动条
          showsVerticalScrollIndicator={false}
          onScroll={(ev) => {
            const { contentSize, contentOffset, layoutMeasurement } =
              ev.nativeEvent;

            const shouldShow =
              contentSize.height - contentOffset.y - layoutMeasurement.height >
              2 * safeBottom;
            setShowScrollBtn(shouldShow);
          }}
          onContentSizeChange={() => {
            if (!showScrollBtn) {
              handleScroll();
            }
          }}
        />

        <View
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            flexDirection: "column",
            gap: 8,
            // paddingTop: 10,
          }}
        >
          <ScrollButton
            showScrollBtn={showScrollBtn}
            handleScroll={handleScroll}
          />
          <HomeFooter handleSend={handleSend} isLoading={isLoading} />
        </View>
      </ThemedView>
    </KeyboardAvoidingView>
  );
}
