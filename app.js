// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarTexto(elemento, texto){
    let lista = document.getElementById('listaAmigos');

}

function agregarAmigo(){
    let amigo = document.getElementById("amigo").value;
    if (amigo != ""){
        amigos.push(amigo);
        console.log(amigos);
    }else{
        alert('Debes ingresar un nombre de amigo');
    }
}