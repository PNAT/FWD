const mix = require("laravel-mix");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const CopyWebpackPlugin = require("copy-webpack-plugin");
const imageminMozjpeg = require("imagemin-mozjpeg");
require("mix-tailwindcss");

mix
  .webpackConfig({
    plugins: [
      new CopyWebpackPlugin({
        patterns: [{ from: "./src/images", to: "./dist/images" }]
      }),

      new ImageminPlugin({
        test: /\.(jpe?g|png|gif|svg)$/i,
        plugins: [
          imageminMozjpeg({
            quality: 80
          })
        ]
      })
    ]
  })
  .sass("./src/sass/app.scss", "./dist/css")
  .tailwind("./tailwind.config.js")
  .js("./src/js/app.js", "./dist/js")
  .copy("./src/*.*", "./dist/");
