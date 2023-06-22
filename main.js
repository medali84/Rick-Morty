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
    

    