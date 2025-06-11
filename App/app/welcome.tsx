import React from "react";
import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Button } from "@/components/ui/button";

export default function WelcomePage() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white justify-between items-center p-4">
      <ImageBackground
        source={require("@/assets/icons/WelcomeBackgroundImage.png")}
        style={StyleSheet.absoluteFill}
        resizeMode="cover"
      >
        {/* Main Content */}
        <View className="flex-1 w-full items-center justify-center">
          {/* Illustration Placeholder */}
          <View className="w-full items-end mb-6 pr-6">
            <Text className="text-4xl font-bold text-right mb-2" style={{ fontFamily: 'NotoSansHebrew' }}>
              ברוכים הבאים
            </Text>
          </View>

          <View className="w-full items-start mb-6 pl-6">
            <Text className="text-7xl font-bold text-blue-500 text-right mb-8" style={{ fontFamily: 'Rubik-Bold' }}>
              Gifty
            </Text>
          </View>
        </View>
        <View className="w-full flex-row justify-between gap-2 mb-6">
          <Button
            className="flex-1 border border-blue-500 bg-white ml-4 mr-4"
            variant="outline"
            onPress={() => router.push("/sign-in")}
          >
            <Text className="text-blue-500 text-lg" style={{ fontFamily: 'NotoSansHebrew' }}>הרשמה מהירה</Text>
          </Button>
          <Button
            className="flex-1 bg-blue-500 ml-4 mr-4"
            onPress={() => router.push("/sign-in")}
          >
            <Text className="text-white text-lg" style={{ fontFamily: 'NotoSansHebrew' }}>כניסה לחשבון</Text>
          </Button>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
  },
}); 