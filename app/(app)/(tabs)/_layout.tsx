import { router, Tabs } from "expo-router";
import {
  ChatIcon,
  ContactIcon,
  MomentIcon,
  SearchIcon,
  SettingsIcon,
} from "@/components/comm/icon";
import IconButtion from "@/components/comm/iconButton";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarLabelStyle: { fontSize: 14, marginBottom: 8 },
        tabBarStyle: { height: 60 },
      }}
    >
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          tabBarIcon: () => <ChatIcon />,
        }}
      />

      {/* header with a search button */}
      <Tabs.Screen
        name="contacts"
        options={{
          title: "Contacts",
          tabBarIcon: () => <ContactIcon />,
          headerRight: () => {
            return (
              <IconButtion
                onPress={() => router.push("/search")}
                icon={<SearchIcon />}
                style={{ marginRight: 20 }}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="moments"
        options={{
          title: "Moments",
          headerTitle: "Moments",
          tabBarIcon: () => <MomentIcon />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: () => <SettingsIcon />,
        }}
      />

      <Tabs.Screen name="index" options={{ tabBarButton: () => null }} />
    </Tabs>
  );
}
