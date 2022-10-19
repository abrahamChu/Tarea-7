window.onload = function () {
  //Inicializacion de las variables necesarias.
  let palabra = document.getElementById("palabra");
  let letra = document.getElementById("letra");
  let acierto = document.getElementById("aciertos");
  let fallo = document.getElementById("fallos");
  let adivinar;
  let aux;

  palabra.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
      //Si se pulsa enter se ejecuta la funcion que recoge la palabra a adivinar
      guiones();
    }
  });

  letra.addEventListener("keyup", sustituirLetras, false);//Cuando se pulsa una tecla se ejecuta el evento que ejecuta la funcion sustituirLetras

  //Funcion que sustituye las letras por guiones en la caja de texto "adivina".
  function guiones() {
    aux = palabra.value.toUpperCase();
    adivinar = aux.replace(/[a-z]/gi, "-");
    acierto.value = adivinar;
    letra.focus();
  }

  //Funcion que sustituye los guiones por las letras que son correctas.
  function sustituirLetras() {
    var caracterBuscar = (letra.value).toUpperCase();
    letra.value = "";
    letra.focus();
    for (i = 0; i < aux.length; i++) {
      if (caracterBuscar == aux[i]) {
        adivinar = adivinar.substring(0, i) + caracterBuscar + adivinar.substr(i + 1, adivinar.length);
        acierto.value = adivinar;
      }
    }

    //Si la letra que ha introducido el usuario no esta en la palabra esta se guarda en la variable fallos.
    if (aux.indexOf(caracterBuscar) == -1) {
      p1 = document.createElement("p");
      var texto1 = document.createTextNode(caracterBuscar);
      p1.appendChild(texto1);
      fallo.appendChild(p1);
    }

    //Cuando se adivina la palabra se envia una alerta que te da la enhorabuena por acertarla.
    if (acierto.value.indexOf("-") == -1) {
      alert("HAS ACERTADO LA PALABRA");
    }
  }
};
