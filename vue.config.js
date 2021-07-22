const path = require("path");
module.exports = {
  transpileDependencies: ["vuetify"],
  outputDir: path.resolve(__dirname, "./production"),
  devServer: {
    proxy: {
      "/building": {
        target: "http://localhost:5000/",
      },
      "/user": {
        target: "http://localhost:5000/",
      },
    },
  },
};
