import { useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Animated,
  Pressable,
} from "react-native";
import { Score } from "./Score";
import { Link } from "expo-router";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

export function GameCard({ game }) {
  const { image, title, score, description } = game;
  return (
    <Link href={`/${game.slug}`} asChild>
      <StyledPressable className="active:opacity-50 border border-black active:border-white/50 mb-2 bg-gray-500/25 rounded-xl p-4">
        <View className="flex-row gap-4">
          <Image source={{ uri: image }} style={styles.image} />

          <View className='flex-shrink'>
            <Text className="mb-1" style={styles.title}>
              {title}
            </Text>
            <Score score={score} maxScore={100} />
            <Text style={styles.description} className="mt-2 flex-shrink">{description.slice(0, 100)}...</Text>
          </View>
        </View>
      </StyledPressable>
    </Link>
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
