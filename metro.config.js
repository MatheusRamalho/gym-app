/* eslint-disable @typescript-eslint/no-var-requires */
// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config')
const { withNativeWind } = require('nativewind/metro')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const reactNativeSvgTransformer = require('react-native-svg-transformer')

const baseConfig = getDefaultConfig(__dirname)

// Modificações no transformer
baseConfig.transformer.babelTransformerPath = require.resolve('react-native-svg-transformer')

// Modificações no resolver
baseConfig.resolver.assetExts = baseConfig.resolver.assetExts.filter((ext) => ext !== 'svg')
baseConfig.resolver.sourceExts = [...baseConfig.resolver.sourceExts, 'svg']

module.exports = withNativeWind(baseConfig, { input: './src/styles/global.css' })
