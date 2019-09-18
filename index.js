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
 resp.send(pizzas)
});

console.log(`Server listening on port ${port}`);
app.listen(port);
