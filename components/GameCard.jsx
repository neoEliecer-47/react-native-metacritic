import { View, StyleSheet, Text, Image } from "react-native";

export function GameCard({ game }) {
  const { image, title, score, description } = game;
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.score}>{score}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
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
  score: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginBottom: 10,
  },
});
