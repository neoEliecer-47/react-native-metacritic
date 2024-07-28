import { Tabs } from "expo-router";
import { HomeIcon, IconInfoMenu } from "../../components/Icons.jsx";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "yellow",
        tabBarStyle: { backgroundColor: "#1e2107" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />

      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color }) => <IconInfoMenu color={color} />,
        }}
      />
    </Tabs>
  );
}
