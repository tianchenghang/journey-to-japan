import { Dimensions, Pressable, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Image } from "expo-image";
import { Drawer } from "expo-router/drawer";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import HeaderTitle from "@/components/home/HeaderTitle";

const { width: viewportWidth } = Dimensions.get("window");
export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={({ navigation }) => {
          return {
            // Color for the icon and label in the active item in the drawer.
            drawerActiveTintColor: "black",

            // Background color for the active item in the drawer.
            drawerActiveBackgroundColor: "#f5f5f5",

            // Style object for the single item, which can contain an icon and/or a label.
            //// drawerItemStyle: { borderRadius: 16 },

            // Whether the statusbar should be hidden when the drawer is pulled or opens
            drawerHideStatusBarOnOpen: true,

            // Style object to apply to the Text inside content section which renders a label
            drawerLabelStyle: {
              color: "black",
              fontSize: 13,
              // fontFamily: 'Tokyo'
            },

            // Style object for the drawer component.
            drawerStyle: {
              backgroundColor: "white",
              width: viewportWidth * 0.8,
            },

            // Whether to hide the elevation shadow (Android) or the bottom border (iOS) on the header.
            headerShadowVisible: false,

            // Color of the overlay to be displayed on top of the content view when drawer gets open.
            overlayColor: "rgba(0, 0, 0, 0.3)",

            // Function which returns a React Element to display on the left side of the header.
            headerLeft: () => (
              <Pressable
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                onPress={() => {
                  navigation.openDrawer();
                }}
              >
                <MaterialIcons name="menu" size={24} color="black" />
              </Pressable>
            ),

            // Style object for the container of the headerLeft element.
            headerLeftContainerStyle: { paddingLeft: 15 },
          };
        }}
      >
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
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
                    source={require("@/assets/images/like.svg")}
                    style={{ width: 24, height: 24 }}
                    tintColor={props.focused ? "#5856D6" : "black"}
                    contentFit="cover"
                  />
                  <Text style={{ color: props.focused ? "#5856D6" : "black" }}>
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
                    tintColor={props.focused ? "#5856D6" : "black"}
                    contentFit="cover"
                  />
                  <Text style={{ color: props.focused ? "#5856D6" : "black" }}>
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
