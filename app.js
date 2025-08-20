//El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Creamos el Array amigos
let amigos = [];

//Usamos la funcion agregarAmigos para llenar la lista
function agregarAmigo(){
    let amigo = document.getElementById("amigo").value;
    
    //Si amigo ni esta vacio se carga a la lista
    if (amigo != ""){
        amigos.push(amigo);
    }else{
        //Si la el campo esta vacio pedimos que agregen un nombre
        alert('Debes ingresar un nombre');
        return; //Detenemos la función si el nombre está vacío
    }

    //Actualizamos la visualización de la lista en la página
    actualizarListaAmigos();

    //Limpiamos el campo de entrada para el siguiente nombre
    document.getElementById("amigo").value = '';
}

/**
 * Actualiza la lista de amigos en el HTML.
 * Crea un elemento <li> por cada amigo en la lista.
 */
function actualizarListaAmigos() {
    let elementoLista = document.getElementById("listaAmigos");
    elementoLista.innerHTML = ''; //Limpia la lista actual para no duplicar nombres

    for (let amigo of amigos) {
        let item = document.createElement('li'); //Crea un elemento <li>
        item.textContent = amigo; //Le asigna el nombre del amigo
        elementoLista.appendChild(item); //Añade el <li> a la lista <ul> en el HTML
    }
}

//Creamos la funcion sortearAmigo
function sortearAmigo(){

    //Desordenamos la lista de amigos (Algoritmo de Fisher-Yates)
    let elejido = Math.floor(Math.random() * (amigos.length)); 
        
        if (elejido <= amigos.length){
            sorteo= document.getElementById("resultado");
            sorteo.innerHTML = 'El amigo secreto es ' + amigos[elejido] + '.';
        }else{
            alert('Primero debes ingresar los nombres')
        }
    }