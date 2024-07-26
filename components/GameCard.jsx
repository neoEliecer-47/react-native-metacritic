import { useEffect, useRef } from "react";
import { View, StyleSheet, Text, Image, Animated } from "react-native";
import { Score } from "./Score";

export function GameCard({ game }) {
  const { image, title, score, description } = game;
  return (
    <View className="flex-row bg-slate-500/10 p-4 rounded-xl gap-4 mb-10">
      <Image source={{ uri: image }} style={styles.image} />

      <View>
        <Text className="mb-1" style={styles.title}>{title}</Text>
        <Score score={score} maxScore={100}/>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      delay: index * 500,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 42,
  },
  image: {
    width: 157,
    height: 217,
    borderRadius: 10,
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: "#eee",
  },
  
});
