const express = require('express');
const app = express();

app.use(express.static('static'));

app.listen(process.env.PORT || 4200, () => console.log('express is listening'));
