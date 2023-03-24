Primero validamos que se haya recibido un valor númerico para nuestro indice a utilizar en la ruta */fibo* como un parametro llamado *n*, caso contrario, le notificamos al usuario que ha enviado un dato invalido

Posteriormente llamo a la funcion *getFibo* para calcular el número fibonacci con base al indice recibido

Una vez obtenido el resultado lo agregamos al response dentro de la variable *message* y si todo marchó sin problemas, se procede a enviar nuestro response

Optimizaciones futuras:
- Se podria modificar para que genere los numeros fibonacci de n indices, en otras palabras, el usuario podria mandar un arreglo de indices y de nuestro lado le generariamos los numeros de dichos indices

- Mejorar la validacion del valor numerico recibido, ya que aunque en esta primera version si mandan un valor negativo, sigue regresando 0, se podria agregar un mensaje al usuario notificandole de la situacion, o parsear directamente los valores negativos a positivos como una segunda opcion

- Mover la funcion que calcula el numero fibonacci a un archivo diferente, para no mezclarlo donde tenemos las rutas de la api