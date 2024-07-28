import { Link } from "expo-router";
import { ScrollView, Text, Pressable } from "react-native";
import { HomeIcon } from "../../components/Icons";

export default function About() {
  return (
    <ScrollView className="pt-12 bg-black">
      <Link asChild href="/">
        <Pressable>
          {({ pressed }) => <HomeIcon style={{ opacity: pressed ? 0.5 : 1 }} />}
        </Pressable>
      </Link>
      <Text className="text-white font-bold text-xl">sobre el proyecto</Text>
    </ScrollView>
  );
}
