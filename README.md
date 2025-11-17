RapidServe App : Building a Food Delivery App with React Native | Expo, Git, Maps, Reanimated

<!-- Packages -->

bunx expo expo-dev-client
bunx expo install @expo-google-fonts/nunito expo-font
bunx expo install expo-haptics
bunx expo install @expo/ui
bunx expo install react-native-mmkv
bunx expo install react-native-nitro-modules
bun install zustand
bun add @tanstack/react-query

<!-- Prebuild for ios -->

bunx expo prebuild --platform ios

<!-- Run for ios -->

bunx expo run:ios
