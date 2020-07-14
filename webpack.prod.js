const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
module.exports = merge.merge(common, {
  mode: "production",
  plugins: [new BundleAnalyzerPlugin()],
});
