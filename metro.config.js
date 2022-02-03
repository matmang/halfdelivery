const { getDefaultConfig } = require("metro-config");
const blacklist = require("metro-config/src/defaults/blacklist"); //? AWS 폴더 추가로 인한, expo 에러 해결을 위해 추가함. SVG파일 사용을 위한 설정과 무관.

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer"),
    },
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"],
      blacklistRE: blacklist([/#current-cloud-backend\/.*/]),
    },
  };
})();
