/* window.addEventListener('DOMContentLoaded', function() {
    document.body.style.backgroundImage = "url('img/fondoMovil.png')";
}); */

/* const contenedor = document.getElementById('cards'); */


/* La función "getCharacters" se utiliza para realizar una solicitud 
a una API que proporciona datos de personajes. */
//La función "getCharacters" se define con un parámetro llamado "done"
/* function getCharacters(done) { */
    /* fetch = se usa para realizar una solicitud 
    para obtener los datos de la API de rick y morty */
    /* fetch('https://rickandmortyapi.com/api/character/') */
    //"results" almacena la promesa devuelta por "fetch"
    //"then" metodo que maneja la respuesta de promesa "results"
    //En el primer .then(), se convierte la respuesta a formato JSON utilizando el método ".json()"
        /* .then(response => response.json()) */
    /* En el segundo .then(), se manejan los datos obtenidos. 
    La función de devolución de llamada recibe los datos como argumento "(data)." */
/*         .then(data => {
            done(data)
    })
} */

//se utiliza la función de devolución de llamada ("data => {...}") para manejar los datos obtenidos

/* getCharacters(data => {
    data.results.forEach(contenedor => {
        const article = document.createRange().createContextualFragment(`
      `);
        const main = RickAndMortyApi.querySelector("main");
        main.append(article);

})

    
    }) */
    
    
    function getCharacters(done) {
        fetch('https://rickandmortyapi.com/api/character/')
            .then(response => response.json())
            .then(data => {
                done(data);
            });
    }
    
    getCharacters(data => {
        data.results.forEach(contenedor => {
            const article = document.createRange().createContextualFragment(`
                <article class="contenedor">
                        <div class="">
                        <img class="imagen" src="${contenedor.image}" alt="personaje">
                    </div>
                    <div class="datos1">
                    <h5>${contenedor.name}</h5>
                    <span>Especie: ${contenedor.species}</span>
                    <span>Estado: ${contenedor.status}</span>
                    </div>
                </article>
            `);
            const main = document.querySelector("main");
            main.append(article);
        });
    });
    

/*     html

<button class="especie" data-especie="Humano">Humano</button>
    <button class="especie" data-especie="Robot">Robot</button>
    <button class="especie" data-especie="Animal">Animal</button>
    <button class="especie" data-especie="Criatura Mitologica">Criatura Mitologica</button>
css */

var botonesEspecie = document.querySelectorAll(".especie");
botonesEspecie.forEach(function(boton) {
  boton.addEventListener("click", function() {
    var especieSeleccionada = boton.getAttribute("data-especie");
    filtrarPorEspecie(especieSeleccionada);
  });
});
    
function filtrarPorEspecie(especie) {
    
    fetch("https://rickandmortyapi.com/api/character/?species=" + especie)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      mostrarResultados(data.results);
    });
}
function mostrarResultados(resultados) {
    let contenedor = document.querySelector(".main");
    contenedor.classList.add("main")
    contenedor.innerHTML = "";
    resultados.forEach(function(resultado) {
      let contenedorPersonaje = document.createElement("article");
      contenedorPersonaje.classList.add("contenedor");
    let contenedorImagen = document.createElement("div")


      let imagenPersonaje = document.createElement("img");
      imagenPersonaje.src = resultado.image;
      imagenPersonaje.alt = resultado.name;
      contenedorImagen.appendChild(imagenPersonaje);
      imagenPersonaje.classList.add("imagen");
      contenedorPersonaje.appendChild(contenedorImagen)
  
      let datosPersonaje = document.createElement("div");
      datosPersonaje.classList.add("datos1");
  
      let tituloPersonaje = document.createElement("h5");
      tituloPersonaje.textContent = resultado.name;
      datosPersonaje.appendChild(tituloPersonaje);
  
      let especiePersonaje = document.createElement("span");
      especiePersonaje.textContent = "Especie: " + resultado.species;
      datosPersonaje.appendChild(especiePersonaje);
  
      let estadoPersonaje = document.createElement("span");
      estadoPersonaje.textContent = "Estado: " + resultado.status;
      datosPersonaje.appendChild(estadoPersonaje);
  
      contenedorPersonaje.appendChild(datosPersonaje);
      contenedor.appendChild(contenedorPersonaje);
    });
  }
