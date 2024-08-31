module.exports = {
  devServer: {
    before: function (app) {
      app.use((req, res, next) => {
        res.setHeader('ngrok-skip-browser-warning', 'true');
        next();
      });
    },
    headers: {
      "ngrok-skip-browser-warning": "true"
    }
  },
  transpileDependencies: [
    "vuetify"
  ]
}
