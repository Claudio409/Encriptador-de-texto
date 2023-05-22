function llamar(ID){
    return document.getElementById(ID); //Lllama a un elemento del html por su id
}

function nopermitidos(texto){
    let nuevo = texto.toLowerCase(); //convierte todo el texto del textarea en minusculas
    const verificar = /[^a-z\s]/gi; //aca solo estan de la a-z
    return nuevo.replace(verificar, ""); //el comando replace... hace que primero verifique el texto dentro de la variable "nuevo" con verificar para ver si coincide.... si no coincide entonces lo reemplza por un espacio.
}

var encriptar = llamar("mensaje"); //poner lo que entra en el text area en la vaible encriptar

encriptar.addEventListener('input',function(){ //realiza un evento
    var texto = encriptar.value;
    encriptar.value = nopermitidos(texto);
});