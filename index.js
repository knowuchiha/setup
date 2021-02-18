const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
var path   = require ('path');
const apis = require ('./routes/apis');

app.get('/apis/*',apis);

app.use(express.static("./reactapps/build"));

app.use('/',(req, res) => {
	return res.sendFile('./reactapps/build/index.html');
});

app.use('/ping', (req,res) => res.send('pong'));


app.listen(port, () => {
  console.log(`Example app listening at ${port}`)
})
