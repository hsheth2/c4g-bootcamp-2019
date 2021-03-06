const express = require('express');
const app = express();
const port = 3001;

// Request logger.
const morgan = require('morgan');
app.use(morgan('tiny'));

// Parse incoming requests.
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/api/ping', (req, res) => {
    res.send('pong');
});

let items = [
    {
        id: 0,
        text: "test item",
        completed: false,
    },
    {
        id: 1,
        text: "test item 2",
        completed: false,
    },
];

app.get('/api/items', (req, res) => {
    res.json(items);
})

app.post('/api/items', (req, res) => {
    console.log(req.body);

    const text = req.body.text;
    const id = items.length;

    items.push({
        id,
        text,
        complete: false,
    })

    res.json({
        result: "success",
    })
})

app.listen(port, () => console.log(`Server listening on port ${port}!`));