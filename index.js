function llamar(ID){
    return document.getElementById(ID); //Lllama a un elemento del html por su id
}
//Variables del html para js
var encriptar = llamar("mensaje"); //poner lo que entra en el text area en la vaible encriptar
var verificador = false; 
var botonencriptador = llamar("encriptar");
var avisos = llamar("avisos");
var copiar = llamar("copiar")
var desencriptar = llamar("desencriptar")

//Para que el textarea solo admita minusculas 
function nopermitidos(texto){
    let nuevo = texto.toLowerCase(); //convierte todo el texto del textarea en minusculas
    const verificar = /[^a-z\s]/gi; //aca solo estan de la a-z
    if(nuevo!= 0){
        verificador= true;
    }
    return nuevo.replace(verificar, ""); //el comando replace... hace que primero verifique el texto dentro de la variable "nuevo" con verificar para ver si coincide.... si no coincide entonces lo reemplza por un espacio.
}


encriptar.addEventListener('input',function(){ //realiza un evento
    var texto = encriptar.value;
    encriptar.value = nopermitidos(texto);
    if (encriptar.value==""){
        avisos.style.display="inline-block";
        copiar.style.display="none";
    }
});


botonencriptador.addEventListener('click', function(){
    if (verificador){
                avisos.style.display="none";
                copiar.style.display="inline-block";
    }
});

desencriptar.addEventListener('click',function(){
    if (verificador){
        avisos.style.display="none";
        copiar.style.display="inline-block";
    }
})