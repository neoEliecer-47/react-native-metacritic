import { View, Text } from "react-native";

export function Score({ score, maxScore }) {
  const getColors = () => {
    const porcentaje = (score / maxScore) * 100;
    if (porcentaje < 40) return "bg-red-500 text-white";
    if (porcentaje < 98) return "bg-yellow-500 text-white";
    return "bg-green-500 text-white";
  };

  const className = getColors()

  return (
    <View className={`w-8 h-8 rounded-full justify-center items-center ${className}`}>
      <Text className="font-bold text-lg text-white mb-2">{score}</Text>
    </View>
  );
}
