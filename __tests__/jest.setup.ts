import "@testing-library/react-native/extend-expect";

jest.mock("expo-constants", () => ({
  default: { statusBarHeight: 24 },
}));
