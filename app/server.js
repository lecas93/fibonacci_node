var express = require('express') //llamamos a Express
var app = express()

var port = process.env.PORT || 8080  // establecemos nuestro puerto

/**
 * Genera el número fibonacci para el indice n
 * @param {Number} n Indice a generar
 */
function getFibo(n) {
    var fibNum = [0, 1]; //inicializamos la serie

    for (var i = 0; i < n; i++) { //generamos el numero del indice actual y lo almacenamos en nuestro array
        fibNum.push(fibNum[i] + fibNum[i + 1]);
    }

    return fibNum[i]; //devolvemos el ultimo numero generado ya que correspondera al indice recibido
}

/**
 * endpoint fibo para recibir el indice n
 */
app.get('/fibo', function (req, res) {
    console.log('req.query', req.query);

    var response = {
        code: 200,
        message: ""
    };

    try {
        var n = parseInt(req.query.n);

        if (isNaN(n)) {
            response.code = 400;
            response.message = "Valor inválido para n, debe ser númerico.";
        } else {
            var fibNum = getFibo(n);
            response.message = fibNum;
        }
    } catch (error) {
        console.error('error', error);
        response.code = 500;
        response.message = error;
    }

    res.json(response);
})

// iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)