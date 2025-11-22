import AppleAuthButton from "@/components/auth/AppleAuthButton";
import GoogleAuthButton from "@/components/auth/GoogleAuthButton";
import { Colors, Fonts } from "@/constants/theme";
import useUserStore from "@/hooks/use-userstore";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animation, { FadeInDown } from "react-native-reanimated";

const Page = () => {
  const router = useRouter();

  const { setIsGuest } = useUserStore();

  const continueAsGuest = () => {
    // Handle guest continue logic here
    setIsGuest(true);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => router.dismiss()}
        style={styles.closeBtn}
      >
        <Ionicons name="close" size={24} />
      </TouchableOpacity>

      <Text style={styles.title}>Log in or Create a RapidServe Account</Text>

      <View style={styles.buttonContainer}>
        <Animation.View entering={FadeInDown.delay(100)}>
          <AppleAuthButton />
        </Animation.View>
        <Animation.View entering={FadeInDown.delay(200)}>
          <GoogleAuthButton />
        </Animation.View>

        <Animation.View entering={FadeInDown.delay(100)}>
          <TouchableOpacity style={styles.facebookButton}>
            <FontAwesome5 name="facebook" size={20} />
            <Text style={styles.facebookButtonText}>
              Continue with Facebook
            </Text>
          </TouchableOpacity>
        </Animation.View>
        <Animation.View entering={FadeInDown.delay(200)}>
          <TouchableOpacity
            style={styles.guestButton}
            onPress={continueAsGuest}
          >
            <Text style={styles.guestButtonText}>Continue as guest</Text>
          </TouchableOpacity>
        </Animation.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
  },
  closeBtn: {
    backgroundColor: Colors.light,
    borderRadius: 40,
    padding: 8,
    alignSelf: "flex-end",
  },
  title: {
    fontSize: 30,
    fontFamily: Fonts.brandBlack,
    marginVertical: 22,
  },
  buttonContainer: {
    gap: 12,
  },
  facebookButton: {
    backgroundColor: Colors.light,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    paddingVertical: 17,
    borderRadius: 12,
  },
  facebookButtonText: {
    color: Colors.dark,
    fontSize: 18,
    fontWeight: "600",
  },
  guestButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    paddingVertical: 17,
    borderRadius: 12,
  },
  guestButtonText: {
    color: Colors.secondary,
    fontSize: 18,
    fontWeight: "600",
  },
});

export default Page;
