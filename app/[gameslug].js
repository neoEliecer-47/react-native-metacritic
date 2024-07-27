import { useLocalSearchParams } from "expo-router";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { getGameDetails } from "../lib/metacritic";

export default function GameDetails() {
  const { gameslug } = useLocalSearchParams();
  const [gameInfo, setGameInfo] = useState(null);

  useEffect(() => {
    if (gameslug) {
      getGameDetails(gameslug).then((game) => setGameInfo(game));
    }
  }, [gameslug]);

  return (
    <View className="flex-1 justify-center items-center">
      <Stack.Screen
        options={{
          headerLeft: () => {},
          headerTitle: "game here",
          headerRight: () => {},
          headerStyle: { backgroundColor: "yellow" },
        }}
      />
      <View>
        {!gameInfo ? (
          <ActivityIndicator color="#fff" size="large" />
        ) : (
          <ScrollView>
            <Text>detalle del juego {gameslug}</Text>
          </ScrollView>
        )}
      </View>
    </View>
  );
}
