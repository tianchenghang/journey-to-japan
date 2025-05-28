import { ThemedView } from "@/components/ThemedView";
import ImageFooter from "@/components/image/ImageFooter";

export default function Image() {
  return (
    <ThemedView
      style={{
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <ImageFooter />
    </ThemedView>
  );
}
