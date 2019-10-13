const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, 'static')));

app.get('*bundle.js', (req, res, next) => {
  res.sendFile(path.resolve(__dirname, `static/bundle.js`))
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'static/index.html'));
});

app.listen(process.env.PORT || 4200, () => console.log('express is listening'));
