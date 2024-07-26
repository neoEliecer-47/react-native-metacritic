import { View, Text } from "react-native";
import { Slot } from 'expo-router'

export default function Layout(){
    return (
        <View className="flex-1 bg-black justify-center items-center">
           <Slot />
        </View>
    )
} 