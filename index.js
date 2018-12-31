const express = require('express');
const indexRoute = require('./routes/index');
const path = require('path');

const app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRoute);

const server = app.listen(8000, (req, res) => {
  console.log(`Listening on http://localhost:${server.address().port}`);
});