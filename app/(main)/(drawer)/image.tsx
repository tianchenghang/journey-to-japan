import { KeyboardAvoidingView, Platform } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";

import { ThemedView } from "@/components/ThemedView";
import ImageFooter from "@/components/image/ImageFooter";

export default function Image() {
  const headerHeight = useHeaderHeight();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={headerHeight}
    >
      <ThemedView
        style={{
          flex: 1,
          // justifyContent: "center",
          // alignItems: "center",
        }}
      >
        <ImageFooter />
      </ThemedView>
    </KeyboardAvoidingView>
  );
}
