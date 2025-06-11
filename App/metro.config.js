const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const path = require("path"); // Import path module

// Get the default Expo config
const config = getDefaultConfig(__dirname);

// --- SVG Transformer Configuration ---
const { transformer, resolver } = config;

config.transformer = {
  ...transformer,
  babelTransformerPath: require.resolve("react-native-svg-transformer"),
};

config.resolver = {
  ...resolver,
  assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
  sourceExts: [...resolver.sourceExts, "svg"],
};
// --- End SVG Transformer Configuration ---

// --- NativeWind Configuration ---
// Apply NativeWind configuration to the modified config
module.exports = withNativeWind(config, {
  input: "./assets/styles/globals.css",
  // Add other NativeWind options here if you have any
});
// --- End NativeWind Configuration ---
