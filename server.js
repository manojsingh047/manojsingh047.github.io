const express = require("express");
const app = express();
const port = process.env.PORT || 8082;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.render('index.html');
});

app.listen(port, () => console.log('app running'));