const express = require('express');
const app = express();
const port = 3001;

// Request logger.
const morgan = require('morgan');
app.use(morgan('tiny'));

app.get('/api/ping', (req, res) => {
    res.send('pong');
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));