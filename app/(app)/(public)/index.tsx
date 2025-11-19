import AppleAuthButton from "@/components/auth/AppleAuthButton";
import GoogleAuthButton from "@/components/auth/GoogleAuthButton";
import SmoothInfiniteScroll from "@/components/auth/SmoothInfiniteScroll";
import { Fonts } from "@/constants/theme";
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import Animation, { FadeInDown } from "react-native-reanimated";
export default function Index() {
  const openLink = () => {
    Linking.openURL("https://rapidserve.com");
  };
  return (
    <View style={styles.container}>
      <View style={styles.infiniteScrollContainer}>
        <View>
          <SmoothInfiniteScroll scrollDirection="down" iconSet="set1" />
        </View>
        <View>
          <SmoothInfiniteScroll scrollDirection="up" iconSet="set2" />
        </View>
        <View>
          <SmoothInfiniteScroll scrollDirection="down" iconSet="set3" />
        </View>
        <LinearGradient
          colors={["transparent", "#fff"]}
          style={{
            position: "absolute",
            height: 200,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />
      </View>
      <View style={styles.contentContainer}>
        <Image
          source={require("@/assets/images/rapidserve-logo.png")}
          style={styles.brandLogo}
        />

        <Animation.Text style={styles.tagline} entering={FadeInDown}>
          Almost Delivered anything
        </Animation.Text>

        <View style={styles.buttonContainer}>
          <Animation.View entering={FadeInDown.delay(100)}>
            <AppleAuthButton />
          </Animation.View>
          <Animation.View entering={FadeInDown.delay(200)}>
            <GoogleAuthButton />
          </Animation.View>

          <Animation.View entering={FadeInDown.delay(300)}>
            <TouchableOpacity style={styles.otherButton}>
              <Text style={styles.otherButtonText}>Other Options</Text>
            </TouchableOpacity>
          </Animation.View>

          <Animation.View entering={FadeInDown.delay(400)}>
            <View style={styles.privacyContainer}>
              <Text style={styles.privacyText}>
                Please Visit{" "}
                <Text style={styles.privacyLink} onPress={openLink}>
                  Rapid Serve Statement
                </Text>{" "}
                to learn about personal data processing at a Rapidserve
              </Text>
            </View>
          </Animation.View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infiniteScrollContainer: {
    flex: 0.8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    position: "relative",
    overflow: "hidden",
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  brandLogo: {
    width: "72%",
    height: 70,
    resizeMode: "cover",
    alignSelf: "center",
  },
  tagline: {
    fontSize: 32,
    fontFamily: Fonts.brandBlack,
    textAlign: "center",
    marginBottom: 50,
  },
  buttonContainer: {
    gap: 12,
  },
  otherButton: {
    backgroundColor: "#f0f0f0",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    paddingVertical: 17,
    borderRadius: 12,
  },
  otherButtonText: {
    color: "#666",
    fontSize: 16,
    fontWeight: "600",
  },
  privacyContainer: { marginTop: 30, paddingHorizontal: 20, marginTop: 20 },
  privacyText: {
    fontSize: 12,
    color: "#999",
    textAlign: "center",
    lineHeight: 18,
  },
  privacyLink: {
    color: "#4285F4",
    textDecorationLine: "underline",
  },
});
