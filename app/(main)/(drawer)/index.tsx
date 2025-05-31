import { useRef, useState } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useHeaderHeight } from "@react-navigation/elements";

import { ThemedView } from "@/components/ThemedView";
import HomeFooter from "@/components/home/HomeFooter";
import MessageItem, { IMessageItem } from "@/components/home/MessageItem";
import ScrollButton from "@/components/ui/ScrollButton";

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
  { key: "11", role: "user", content: "User ping." },
  {
    key: "12",
    role: "agent",
    content: "Agent pong.",
  },
  { key: "13", role: "user", content: "User ping again." },
  {
    key: "14",
    role: "agent",
    content: "Agent pong again.",
    deepSearch: "Deep search content",
  },
  { key: "21", role: "user", content: "User ping." },
  {
    key: "22",
    role: "agent",
    content: "Agent pong.",
  },
  { key: "23", role: "user", content: "User ping again." },
  {
    key: "24",
    role: "agent",
    content: "Agent pong again.",
    deepSearch: "Deep search content",
  },
  { key: "31", role: "user", content: "User ping." },
  {
    key: "32",
    role: "agent",
    content: "Agent pong.",
  },
  { key: "33", role: "user", content: "User ping again." },
  {
    key: "34",
    role: "agent",
    content: "Agent pong again.",
    deepSearch: "Deep search content",
  },
];

export default function Index() {
  const headerHeight = useHeaderHeight();
  const { bottom: safeBottom } = useSafeAreaInsets();

  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const flatListRef = useRef<FlatList>(null);
  const handleScroll = () => {
    flatListRef.current?.scrollToOffset({
      offset: (1 << 15) - 1,
      animated: true,
    });
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
          <HomeFooter />
        </View>
      </ThemedView>
    </KeyboardAvoidingView>
  );
}
