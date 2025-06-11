import { Tabs } from "expo-router";
import { Platform, Pressable } from "react-native";
import iconsSvg from "@/constants/icons";
import { TabIcon } from "@/components/Tabs/TabIcon";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PlusTab } from "./create";

const TabsLayout = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        sceneStyle: { paddingBottom: 70 + insets.bottom },
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          borderTopColor: "#CFD7F4",
          borderTopWidth: 1,
          height: 70 + insets.bottom,
          ...Platform.select({
            ios: {
              shadowColor: "#000",
              shadowOffset: { width: 0, height: -1 },
              shadowOpacity: 0.05,
              shadowRadius: 3,
            },
            android: {
              elevation: 2.5,
            },
          }),
        },
        tabBarButton: (props) => <Pressable {...props} android_ripple={null} />,
      }}
    >
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          animation: "none",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={iconsSvg.People} />
          ),
        }}
      />
      <Tabs.Screen
        name="my-calls"
        options={{
          title: "AllCalls",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={iconsSvg.ClipBoard} />
          ),
        }}
      />

      {/* Plus Tab */}
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          headerShown: false,
          tabBarIcon: ({ focused }) => <PlusTab focused={focused} />,
        }}
      />

      <Tabs.Screen
        name="staff"
        options={{
          title: "Staff",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={iconsSvg.People} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={iconsSvg.Mail} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
