const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3005;

app.use(express.static('../dist/interior'))//set the static path 
app.set('view engine', 'pug');


app.get('/.well-known/acme-challenge/9Asiqcz186dvyhFWu1i5di9NDt8_aBS5DdyK3-QLuNg', (req, res) => {
    res.send('9Asiqcz186dvyhFWu1i5di9NDt8_aBS5DdyK3-QLuNg.pZIVgDuYe2oBpPA8rOZS3Rrw5PCWGer-v-ciRpFZdnE');
});

app.get('/*', (req, res) => {
	//console.log(req.url);
	//console.log(__dirname);
    res.sendFile(req.url,{root:__dirname})
});

app.listen(port);
console.log('Server started at http://localhost:' + port);