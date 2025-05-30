import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  useColorScheme,
} from "react-native";
import {
  GestureHandlerRootView,
  Pressable,
} from "react-native-gesture-handler";

import { BlurView } from "expo-blur";
import { Image } from "expo-image";
import { Drawer } from "expo-router/drawer";

import HeaderTitle from "@/components/home/HeaderTitle";
import MenuButton from "@/components/ui/MenuButton";

import { hapticsLight, hapticsSuccess } from "@/utils/hap";
import { router } from "expo-router";
import { themePurple } from "@/constants/Colors";

const { width: viewportWidth } = Dimensions.get("window");
export default function Layout() {
  const colorScheme = useColorScheme() ?? "light";

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={({ navigation }) => {
          return {
            drawerActiveTintColor: colorScheme === "light" ? "#000" : "#fff",
            drawerInactiveTintColor: colorScheme === "light" ? "#000" : "#fff",
            drawerActiveBackgroundColor:
              colorScheme === "light" ? "#eee" : "#222",
            //// drawerItemStyle: { borderRadius: 16 },
            drawerHideStatusBarOnOpen: true,
            drawerLabelStyle: {
              color: colorScheme === "light" ? "#000" : "#fff",
              // fontSize: 16,
              // fontFamily: 'Tokyo'
            },
            drawerStyle: {
              backgroundColor: colorScheme === "light" ? "#fff" : "#000",
              width: viewportWidth * 0.8,
            },
            headerShadowVisible: false,
            overlayColor: "rgba(0, 0, 0, 0.3)",
            headerLeft: () => (
              <MenuButton
                onPress={() => {
                  hapticsSuccess();
                  navigation.openDrawer();
                }}
              />
            ),
            headerLeftContainerStyle: { paddingLeft: 15 },
          };
        }}
      >
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            headerTransparent: true,
            headerBackground: () => (
              <BlurView
                tint={colorScheme}
                intensity={50} // 默认值
                style={[
                  StyleSheet.absoluteFill,
                  Platform.OS === "android" && {
                    backgroundColor:
                      colorScheme === "light"
                        ? "rgba(255, 255, 255, 1)"
                        : "rgba(51, 51, 51, 1)",
                  },
                ]} // 绝对定位
              />
            ),
            drawerLabel: (props: { color: string; focused: boolean }) => {
              return (
                <Pressable
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                  }}
                  onPress={() => {
                    hapticsLight();
                    router.push("/(main)/(drawer)");
                  }}
                >
                  <Image
                    source={require("@/assets/images/like.svg")}
                    style={{ width: 24, height: 24 }}
                    tintColor={props.focused ? themePurple : props.color}
                    contentFit="cover"
                  />
                  <Text
                    style={{ color: props.focused ? themePurple : props.color }}
                  >
                    Home
                  </Text>
                </Pressable>
              );
            },
            // title: "Home",
            headerShadowVisible: true,
            headerTitle: HeaderTitle,
            headerTitleAlign: "center",
          }}
        />
        <Drawer.Screen
          name="image" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: (props: { color: string; focused: boolean }) => {
              return (
                <Pressable
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                  }}
                  onPress={() => {
                    hapticsLight();
                    router.push("/(main)/(drawer)/image");
                  }}
                >
                  <Image
                    source={require("@/assets/images/camera.svg")}
                    style={{
                      width: 24,
                      height: 24,
                    }}
                    tintColor={props.focused ? themePurple : props.color}
                    contentFit="cover"
                  />
                  <Text
                    style={{ color: props.focused ? themePurple : props.color }}
                  >
                    Image
                  </Text>
                </Pressable>
              );
            },
            title: "Image",
            headerShadowVisible: false,
            headerTitleAlign: "center",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
