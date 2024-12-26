module.exports = {
  preset: "jest-expo",
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|expo-status-bar|@sentry/react-native|native-base|react-native-svg)",
  ],
  setupFilesAfterEnv: ["<rootDir>/src/tests/jest.setup.ts"],
};
