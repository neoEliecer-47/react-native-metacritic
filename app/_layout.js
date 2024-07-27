import { View, Text, Pressable } from "react-native";
import { Slot, Stack, Link } from "expo-router";
import { Logo } from "../components/Logo";
import { InfoIcon } from "../components/Icons";

export default function Layout() {
  return (
    <View className="flex-1">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "gray" },
          headerTintColor: "white",
          headerTitle: "",
          headerLeft: () => <Logo />,
          headerRight: () => (
            <Link asChild href="/about" className="text-blue-400 text-xl">
              <Pressable>
                {({ pressed }) => (
                  <InfoIcon style={{ opacity: pressed ? 0.5 : 1 }} />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
    </View>
  );
}
