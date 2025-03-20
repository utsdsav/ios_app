// Learn more https://docs.expo.io/guides/customizing-metro
const {getDefaultConfig} = require('expo/metro-config');

// module.exports = getDefaultConfig(__dirname);

module.exports = (() => {
  const defaultConfig = getDefaultConfig(__dirname);
  // defaultConfig.resolver.sourceExts = process.env.RN_SRC_EXT
  //   ? [...process.env.RN_SRC_EXT.split(',').concat(config.resolver.sourceExts), 'cjs'] // <-- cjs added here
    
  //   : [...config.resolver.sourceExts, 'cjs'] // <-- cjs added here
  // defaultConfig.resolver.sourceExts.push('cjs');
  // defaultConfig.resolver.assetExts.push("cjs");
  const {assetExts} = defaultConfig.resolver;
  return {
    resolver: {
      // Add bin to assetExts
      assetExts: [...assetExts, "cjs"],
    }
  };
})();
