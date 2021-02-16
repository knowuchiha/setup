const express = require('express');
const app = express();
const port = 8000;
var path   = require ('path');

app.use(express.static(__dirname + "/reactapps/build"));

app.use('/',(req, res) => {
	return res.sendFile(path.join(__dirname + '/reactapps/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
