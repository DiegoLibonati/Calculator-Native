/** @param {import('@babel/core').ConfigAPI} api */

export default function (api) {
  api.cache.forever();

  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@": "./src",
            "@tests": "./__tests__",
          },
        },
      ],
    ],
  };
}
