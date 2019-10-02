const express = require('express');
const port = 8080;
const app = express();
const pizzas = [
    {
        id: 1,
        name: "tandoori hot:'",
        size: "12 inch",
        spicy: true
    },
    {

        id: 2,
        name: "peperroni",
        size: "small",
        spicy: false
    }


];

app.get('/karen-mservice-repo', (req, resp) => {
    console.log('Returning karen-mservice-repo');
    resp.setHeader('Content-Type', 'application/json');
    // rerun pizzas
    resp.send(pizzas)
});

app.get('/karen-mservice-repo/*', (req, resp) => {
    // get the id form the url path
    const id = parseInt(req.params[0]);

    // log which endpoint was hit
    console.log('Endpoint /karen-mservice-repo/${id} hit');

    // find pizza with the id in the request
    const pizza = pizzas.find(pizza => pizza.id === id);

    // set the content type header of the response
    resp.setHeader('Content-type', 'application/json');
    // if pizza found return it else error message
    // with status 404 not found
    if (pizza) {
        resp.send(pizza);
    }
    else {
        resp.status(404).send('{error:"pizza with ID${id} nor found"} ');
    }
});

// start the server listening on the port constant 

console.log(`Server listening on port ${port}`);
app.listen(port);
