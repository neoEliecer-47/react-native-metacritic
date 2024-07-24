import { useEffect, useState } from "react";

import { View, ScrollView, ActivityIndicator } from "react-native";
import { getLatestGames } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {GameCard } from "./GameCard";


export function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      {games.length === 0 ? (
        <ActivityIndicator color={"#fff"} size={"large"} />
      ) : (
        <ScrollView>
          {games.map(({ slug, image, title, score, description }) => (
            <GameCard
              key={slug}
              image={image}
              title={title}
              score={score}
              description={description}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
}
