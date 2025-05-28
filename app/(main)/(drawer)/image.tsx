import { ThemedView } from "@/components/ThemedView";
import ImageFooter from "@/components/image/ImageFooter";
import { useHeaderHeight } from "@react-navigation/elements";
import { KeyboardAvoidingView, Platform } from "react-native";

export default function Image() {
  const headerHeight = useHeaderHeight();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "android" ? "height" : "padding"}
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
