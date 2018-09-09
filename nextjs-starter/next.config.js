const TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      },
      {
        test: /\.css$/,
        loader: 'babel-loader!raw-loader'
      },
      {
        test: /\.scss$/,
        loader: 'babel-loader!raw-loader!sass-loader'
      }
    );
    config.module.rules.push({
      test: /\.(jpe?g|png|svg|gif|ico)$/,
      use: [
        {
          loader: "url-loader",
          options: {
            limit: 1,
            fallback: "file-loader",
            publicPath: `/_next/static/media/`,
            outputPath: `static/media/`,
            name: "[name].[hash].[ext]"
          }
        }
      ]
    });

    config.plugins.push(
      new TransferWebpackPlugin([
        { from: 'node_modules/fakeloader/build/static', to: '../static/' }
      ])
    );
    return config
  }
}