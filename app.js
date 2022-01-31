const express = require('express');
const app = express();
app.get('/', (req, res) => {
res.send("NodeJS app 2");
});
app.listen(8080);
