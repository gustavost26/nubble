module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['module-resolver', {
      root: '.',
      alias: {
        '@components': './src/components',
        '@hooks': './src/hooks',
        '@routes': './src/routes',
        '@screens': './src/screens',
        '@theme': './src/theme',
        '@utils': './src/utils',
      },
    }],
  ],
};
