// babel.config.js
module.exports = function (api) {
  api.cache(true);

  // NativeWind's helper returns a Babel config object that includes the
  // deprecated `react-native-reanimated/plugin`. Extract its plugins, drop the
  // outdated entry and append `react-native-worklets/plugin` instead so Reanimated
  // works without warnings.
  const { plugins: nativewindPlugins } = require("nativewind/babel")();

  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ...nativewindPlugins.filter(
        (plugin) => plugin !== "react-native-reanimated/plugin"
      ),
      "react-native-worklets/plugin",
    ],
  };
};

