document.getElementById('buscador_boton').addEventListener('click', buscarCocktail);

function buscarCocktail() {
    let nombre = document.getElementById('buscador_input').value;
    fetch('https://www.judithMMCocktail.somee.com/api/Cocktail/buscar/' + nombre,
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((data) => mostrarData(data));

}
function mostrarData(data) {
    console.log(data);

    let container = document.getElementById('container');

    let nombreCocktail = document.createElement('h1');
    nombreCocktail.innerHTML = data.nombre;
    container.appendChild(nombreCocktail);
    nombreCocktail.className = 'nombre-cocktail';

    let receta = document.createElement('p');
    receta.innerHTML = data.receta;
    container.appendChild(receta);
    receta.className = 'receta-cocktail';

    let foto = document.createElement('img');
    foto.src = data.fotoSrc;
    container.appendChild(foto);
    foto.className = 'foto-cocktail';
}

document.getElementById('crear_boton').addEventListener('click', crearCocktail);
function crearCocktail() {
    let valorNombre = document.getElementById('nombre_input').value;
    let valorReceta = document.getElementById('receta_input').value;
    let valorFotoSrc = document.getElementById('fotoSrc_input').value;
    fetch('https://www.judithMMCocktail.somee.com/api/Cocktail',
        {
            method: 'POST',
            headers:
            {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ Nombre: valorNombre, Receta: valorReceta, FotoSrc: valorFotoSrc })
        });
}

document.getElementById('borrar_boton').addEventListener('click', borrarCocktail);
function borrarCocktail(){
    let cocktailId = document.getElementById('borrar_input').value;

    fetch('https://www.judithMMCocktail.somee.com/api/Cocktail/' + cocktailId,
        {
            method: 'DELETE',
        });

}
