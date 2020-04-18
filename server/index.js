const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/test', function (req, res) {
  res.send({data: 'hello world'});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});