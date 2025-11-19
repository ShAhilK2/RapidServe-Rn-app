import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const AppleAuthButton = () => {
  return (
    <TouchableOpacity style={styles.googleButton}>
      <Ionicons name="logo-apple" size={18} color="#fff" />
      <Text style={styles.googleButtonText}>Sign In with Apple</Text>
    </TouchableOpacity>
  );
};

export default AppleAuthButton;

const styles = StyleSheet.create({
  googleButton: {
    backgroundColor: "#000",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    paddingVertical: 17,
    borderRadius: 12,
  },
  googleButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
