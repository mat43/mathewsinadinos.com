const express = require('express');
const app = express();
const port = 5505;

app.use(express.static('public'));

console.log(__dirname);

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

app.get('*', function (req, res) {
    res.redirect('/');
});

app.listen(port, () => console.log(`listening on port ${port}!`));