const { somar, subtrair, multiplicar, dividir } = require("../services/operacoes");

function apiSomar(req, res) {
  try{

  const { num1, num2 } = req.body;
  const result = somar(num1, num2);

  res.status(200).send({ result });
} catch (e) {
  res.status(500).send({ msg: e.message });
}
}

function apiSubtrair(req, res) {
  try {
  const { num1, num2 } = req.body;
  const result = subtrair(num1, num2);

    res.status(200).send({ result });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
}

function apiMultiplicar(req, res) {
  try {
    const { num1, num2 } = req.body;
    const result = multiplicar(num1, num2);
    res.status(200).send({ result });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
}

function apiDividir(req, res) {
  try {
    const { num1, num2 } = req.body;
    const result = dividir(num1, num2);
    res.status(200).send({ result });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
}   

module.exports = { apiSomar, apiSubtrair, apiMultiplicar, apiDividir }; // Exporting all API functions for use in other files
