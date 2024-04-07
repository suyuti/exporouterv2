import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="user"
        options={{
          headerShown: false,
          tabBarLabel: "Users",
          headerTitle: "Users",
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "settings",
          headerTitle: "Settings",
          tabBarLabel: "settings",
        }}
      />
      <Tabs.Screen
        name="(drawer)"
        options={{
          headerShown: false,
          title: "profile",
          headerTitle: "Profile",
          tabBarLabel: "profile",
        }}
      />
    </Tabs>
  );
}
