function llamar(ID){
    return document.getElementById(ID); //Lllama a un elemento del html por su id
}
//Variables del html para js
var encriptar = llamar("mensaje"); //poner lo que entra en el text area en la vaible encriptar
var botonencriptador = llamar("encriptar");
var avisos = llamar("avisos");
var copiar = llamar("copiar")
var desencriptar = llamar("desencriptar")
var textoDesencriptado= llamar('mensaje-desencriptado')
var verificador = false; 

//Para que el textarea solo admita minusculas 
function nopermitidos(texto){
    let nuevo = texto.toLowerCase(); //convierte todo el texto del textarea en minusculas
    let verificar = /[^a-zñ\s]/gi; //aca solo estan de la a-z
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
        return textoDesencriptado.value = texto;
    }
});


botonencriptador.addEventListener('click', function(){
    let texto1 = codificar();
    let texto2 = "  "+texto1;
    if (verificador){
                avisos.style.display="none";
                copiar.style.display="inline-block";
    }
    return textoDesencriptado.value = texto2;
});

desencriptar.addEventListener('click',function(){
    if (verificador){
        avisos.style.display="none";
        copiar.style.display="inline-block";
    }
    let texto1 = encriptar.value;
    let texto2 = "  "+texto1
    return textoDesencriptado.value = texto2;
})

/*Funcion codificar del boton encriptar*/
function codificar(){
    let texto1 = encriptar.value;
    let remplazo = /[aeiou]/g;
    
    let texto2 = texto1.replace(remplazo, function(coincide){
        if (coincide == 'a'){
            return 'ai';
        }
        if(coincide=='e'){
            return 'enter';
        }
        if(coincide=='i'){
            return 'imes';
        }
        if (coincide == 'o'){
            return 'ober';
        }
        if(coincide=='u'){
            return 'ufat'
        }
    });
    return texto2;
};
