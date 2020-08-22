const path = require(`path`);
const sass = require(`sass`);
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`);

module.exports = {
  entry: `./src/js/index.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`)
  },
  devServer: {
    contentBase: path.join(__dirname, `public`),
    port: 4444
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {loader: MiniCssExtractPlugin.loader},
          {loader: `css-loader`, options: {url: false}},
          {loader: `postcss-loader`},
          {loader: `sass-loader`, options: {implementation: sass}}
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {loader: `babel-loader`, options: {presets: [`@babel/preset-env`]}}
        ]
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin({filename: `bundle.css`})],
  devtool: `source-map`,
  mode: `development`
};
