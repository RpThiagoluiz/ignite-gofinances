module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@screens': './src/screens',
            '@components': './src/components',
            '@utils': './src/utils',
            '@store': './src/store',
            '@theme': './src/global/theme'
          },
          extensions: ['.js', '.jsx', '.png', '.svg', '.json', '.html', '.pdf', '.ts', '.tsx']
        }
      ]
    ]
  }
}
