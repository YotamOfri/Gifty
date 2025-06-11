import { Button } from "@/components/ui/button";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const AllCalls = () => {
  const router = useRouter();

  return (
    <SafeAreaView>
      <Text>AllCalls</Text>
      <Button onPress={() => router.push("/sign-in")}>
        <Text>Go To Log-in</Text>
      </Button>
    </SafeAreaView>
  );
};

export default AllCalls;
