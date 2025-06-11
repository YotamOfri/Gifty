import { SplashScreen, Stack } from "expo-router";
import "@/assets/styles/globals.css";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SheetProvider } from "react-native-actions-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

const queryClient = new QueryClient();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Rubik-Bold": require("@/assets/fonts/Rubik-Bold.ttf"),
    "Rubik-Regular": require("@/assets/fonts/Rubik-Regular.ttf"),
    "Rubik-Medium": require("@/assets/fonts/Rubik-Medium.ttf"),
    "Rubik-SemiBold": require("@/assets/fonts/Rubik-SemiBold.ttf"),
    "Rubik-Light": require("@/assets/fonts/Rubik-Light.ttf"),
    "Rubik-ExtraBold": require("@/assets/fonts/Rubik-ExtraBold.ttf"),
    NotoSansHebrew: require("@/assets/fonts/NotoSansHebrew/NotoSansHebrew-VariableFont_wdth,wght.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <I18nextProvider i18n={i18n}>
          <SafeAreaProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
              <BottomSheetModalProvider>
                <SheetProvider context="global">
                  <StatusBar translucent />
                  <Stack screenOptions={{ headerShown: false }} initialRouteName="welcome" />
                </SheetProvider>
              </BottomSheetModalProvider>
            </GestureHandlerRootView>
          </SafeAreaProvider>
        </I18nextProvider>
      </QueryClientProvider>
    </>
  );
}
