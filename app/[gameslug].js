import { useLocalSearchParams } from "expo-router";
import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { getGameDetails } from "../lib/metacritic";
import { Score } from "../components/Score";

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
            <View className="justify-center items-center">
              <Image
                className="mb-4 rounded-lg"
                source={{ uri: gameInfo.img }}
                style={{ width: 310, height: 430 }}
              />
              <Score score={gameInfo.score} maxScore={100} />
              <Text className="text-black/75 text-2xl font-bold mb-8 ">
                {gameInfo.title}
              </Text>
              <Text className="text-black/75 text-base text-center font-bold mb-8">
                {gameInfo.description}
              </Text>
              <View className="flex justify-center items-center">
                <Text className="text-xl">Reviews</Text>
              </View>
              <View>
                {gameInfo.rawReviews.map(({ score, quote, date }) => (
                  <Text className="text-blue-500 text-base text-center font-bold mb-8">
                    {quote}
                  </Text>
                ))}
              </View>
            </View>
          </ScrollView>
        )}
      </View>
    </View>
  );
}
