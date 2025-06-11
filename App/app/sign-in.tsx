import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Logo from "@/assets/icons/logo.png";
import { useTranslation } from "react-i18next";
import { Input } from "@/components/ui/input";
import { SignInSchema, SignInData } from "@/schemas/SignInSchema";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

const SignIn = () => {
  const { t } = useTranslation();
  const [serverError, setServerError] = useState("");
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInData>({
    resolver: zodResolver(SignInSchema),
  });

  const onSubmit = async (data: SignInData) => {
    setServerError("");

    // const response = await login({ ...data, expoPushToken });

    // if (response.status === 401)
    //   return setServerError(t(`validation.${response?.error}`));
    // if (response.status === 500)
    //   return setServerError(t("errors.server_error"));
    router.replace("/organization-selection");
  };

  // Helper function to translate error messages
  const getErrorMessage = (error: string | undefined) => {
    if (!error) return undefined;
    // Check if error is a translation key
    if (error.startsWith("validation.")) {
      return t(error);
    }
    // For server errors or other custom messages
    return error;
  };

  return (
    <SafeAreaView className="h-full">
      <ScrollView contentContainerClassName="h-full flex bg-transparent">
        <View className="w-full items-center flex flex-col px-6  h-full relative gap-10 py-2">
          <View className="flex flex-col mt-14">
            <Avatar alt="Logo" className="rounded-md size-24">
              <AvatarImage source={Logo} />
              <AvatarFallback>
                <Text>ZN</Text>
              </AvatarFallback>
            </Avatar>
          </View>
          <View className="flex-1  relative justify-around mb-5  w-[90%]">
            <View className="flex flex-col items-center gap-12">
              {/* Welcome */}
              <Text className="text-primary font-semibold text-3xl">
                {t("welcome")}
              </Text>
              {/* Form */}
              <View className="flex flex-col gap-2 w-full">
                <View className="flex flex-col gap-2">
                  <Controller
                    control={control}
                    name="email"
                    render={({ field }) => (
                      <View className="h-[75px] w-full">
                        <Input
                          label={t("email")}
                          placeholder="Email@gmail.com"
                          autoCapitalize="none"
                          keyboardType="email-address"
                          value={field.value}
                          onChangeText={field.onChange}
                          onBlur={field.onBlur}
                          className="border-transparent placeholder:text-base w-full native:h-[54px]"
                        />
                      </View>
                    )}
                  />
                  <Text className="text-red-500 mt-1 text-sm rtl:text-right ltr:text-left">
                    {errors.email?.message &&
                      getErrorMessage(errors.email.message)}
                  </Text>
                </View>

                <View className="flex flex-col gap-8">
                  <Controller
                    control={control}
                    name="password"
                    render={({ field }) => (
                      <Input
                        label={t("password")}
                        placeholder="********"
                        secureTextEntry
                        value={field.value}
                        onChangeText={field.onChange}
                        className="border-transparent placeholder:text-base w-full native:h-[54px]"
                        onBlur={field.onBlur}
                      />
                    )}
                  />

                  <Text className="text-red-500 mt-1 text-sm rtl:text-right ltr:text-left">
                    {errors.password?.message &&
                      getErrorMessage(errors.password.message)}
                  </Text>
                </View>
                <View className="flex flex-row justify-center">
                  <Pressable>
                    <Text className="text-primary font-semibold text-md">
                      {t("forgot_password")}
                    </Text>
                  </Pressable>
                </View>
              </View>
              {/* Forgot Password */}
            </View>
            <View>
              {serverError && (
                <Text className="text-red-500 font-bold mt-1 text-lg text-center ">
                  {serverError}
                </Text>
              )}
            </View>
            <View className="flex flex-col items-center mb-5 gap-2">
              <TouchableOpacity
                className="w-full h-16 rounded-full overflow-hidden"
                onPress={handleSubmit(onSubmit)}
                disabled={isSubmitting}
                activeOpacity={0.8}
              >
                <LinearGradient
                  colors={["#3b82f6", "#2563eb"]}
                  start={{ x: 1, y: 0 }}
                  end={{ x: 0, y: 0 }}
                  className="w-full h-full rounded-full justify-center items-center "
                >
                  <View className="h-full flex items-center justify-center">
                    {!isSubmitting ? (
                      <Text className="text-white font-semibold text-lg">
                        {t("login")}
                      </Text>
                    ) : (
                      <ActivityIndicator size="small" color="#ffffff" />
                    )}
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
