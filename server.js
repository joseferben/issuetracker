const path = require('path');
const express = require('express');

module.exports = {
  app() {
    const app = express();

    app.use(express.static(path.join(__dirname, '/app')));
    return app;
  },
};
