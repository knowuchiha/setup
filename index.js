const express = require('express');
const app = express();
const port = 8080;
var path   = require ('path');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.static(__dirname + "/reduxsetup/build"));

app.use('/login',(req, res) => {
	return res.sendFile(path.join(__dirname + '/reduxsetup/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
