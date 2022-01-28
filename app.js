const express = require('express');
const app = express();
app.get('/', (req, res) => {
res.send("NodeJS app");
});
app.listen(8080,'127.0.0.1');
