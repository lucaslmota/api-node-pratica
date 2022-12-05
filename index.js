const express = require('express');
const { uuid } = require('uuidv4');

const port = process.env.PORT || 3000;

const app = express();

// informar que nossa api vai recber informações no formato JSON
app.use(express.json());

const projects = [];

app.get('/projects', (request, response) =>
    // const { title, owner } = request.query;
    response.json(projects),
);



app.listen(port, () =>
    console.log(`HelloNode app listening on port teste ${port}!`),
);

module.exports = app;