const express = require("express"); // Importing express
const { apiSomar, apiSubtrair, apiMultiplicar, apiDividir } = require('./api/operacoes')

const app = express(); // Creating an instance of express
const porta = 3000; // Defining the port number
app.use(express.json()); // Middleware to parse JSON bodies




app.post("/somar", apiSomar);

app.post("/subtrair", apiSubtrair);

app.post("/multiplicar", apiMultiplicar);

app.post("/dividir", apiDividir);

app.listen(porta, () => {
  console.log("Server is running on port " + porta); // Logging when the server starts
}); // Listening on port 3000
