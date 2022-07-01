const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.listen(port, ()=> console.log(`Server running in http://localhost:${port}`));

app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', '/index.html')));
