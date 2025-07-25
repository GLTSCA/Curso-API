const express = require('express'); // Importing express
const app = express(); // Creating an instance of express
const porta=3000; // Defining the port number

app.get('/', (req, res) => {
    req.query.num
    res.send('This sum is: ' + (Number(req.query.num) + Number(req.query.num2))); // Sending a response for the root route
});

app.post('/', (req, res) => {
    req.query.num
    res.send('Was post'); // Sending a response for the root route
});


app.listen(porta, () => {
    console.log('Server is running on port ' + porta); // Logging when the server starts
}); // Listening on port 3000