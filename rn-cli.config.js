// ? AWS 폴더 추가로 인한, expo 에러 해결을 위해 추가함.
// ? 참고: https://www.notion.so/halfdelivery/expo-start-AWS-Amplify-React-Native-947c4ac7567641529ad7c7b3ca36325b

// works with older react native versions
// const blacklist = require('metro').createBlacklist;

const blacklist = require("metro-config/src/defaults/blacklist");

module.exports = {
  resolver: {
    blacklistRE: blacklist([/#current-cloud-backend\/.*/]),
  },
};
