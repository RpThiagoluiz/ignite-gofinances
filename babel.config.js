module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@screens": "./src/screens",
            "@components": "/components",
            "@utils": "/utils",
            "@store": "/store",
          },
          extensions: [
            ".js",
            ".jsx",
            ".png",
            ".svg",
            ".json",
            ".html",
            ".pdf",
            ".ts",
            ".tsx",
          ],
        },
      ],
    ],
  };
};
