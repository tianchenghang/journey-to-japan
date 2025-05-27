import { Dimensions, Text, View, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Image } from "expo-image";
import { Drawer } from "expo-router/drawer";
import HeaderTitle from "@/components/home/HeaderTitle";
import { BlurView } from "expo-blur";
import { useColorScheme } from "@/hooks/useColorScheme";
import MenuButton from "@/components/ui/MenuButton";

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
              colorScheme === "light" ? "#f5f5f5" : "#222",
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
              <MenuButton onPress={() => navigation.openDrawer()} />
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
                style={StyleSheet.absoluteFill} // 绝对定位
              />
            ),
            drawerLabel: (props: { color: string; focused: boolean }) => {
              return (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <Image
                    source={require("@/assets/images/like.svg")}
                    style={{ width: 24, height: 24 }}
                    tintColor={props.focused ? "#5856d6" : props.color}
                    contentFit="cover"
                  />
                  <Text
                    style={{ color: props.focused ? "#5856d6" : props.color }}
                  >
                    Home
                  </Text>
                </View>
              );
            },
            // title: "Home",
            headerShadowVisible: false,
            headerTitle: HeaderTitle,
            headerTitleAlign: "center",
          }}
        />
        <Drawer.Screen
          name="image" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: (props: { color: string; focused: boolean }) => {
              return (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <Image
                    source={require("@/assets/images/camera.svg")}
                    style={{
                      width: 24,
                      height: 24,
                    }}
                    tintColor={props.focused ? "#5856d6" : props.color}
                    contentFit="cover"
                  />
                  <Text
                    style={{ color: props.focused ? "#5856d6" : props.color }}
                  >
                    Image
                  </Text>
                </View>
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
