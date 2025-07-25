const http = require('http'); //pacote que vem instalado com o node
const path = require('path');
const url = require('url'); //pacote que vem instalado com o node

http.createServer((req, res) => {

    const parsedUrl = url.parse(req.url, true); //Analisa a URL da requisição
    const pathName = parsedUrl.pathname; //Extrai o caminho da URL
    const queryParams = parsedUrl.query; //Extrai os parâmetros de consulta da URL
 

    if(pathName === '/favicon.ico') { //Verifica se o caminho é o favicon
        res.writeHead(404); //Retorna um código de status 404 (Not Found)
        res.end(); //Finaliza a resposta
        return; //Interrompe a execução da função
    }

    console.log(queryParams); //Exibe os parâmetros de consulta no console

    if(req.method === 'GET') { //Verifica se o método é GET
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'}); //Define o cabeçalho da resposta
        res.write('A soma e:' + (Number(queryParams.num) + Number(queryParams.num2))) ; //Escreve a resposta
        res.end(); //Finaliza a resposta
    }


}).listen(9090); //Porta que o servidor vai escutar