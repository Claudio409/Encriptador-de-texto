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
var copiar = llamar('copiar');
var pegar = llamar('pegar');
var borrar = llamar('borrar');
var verificador = false; 

//Para que el textarea solo admita minusculas 
function nopermitidos(texto){
    let nuevo = texto.toLowerCase(); //convierte todo el texto del textarea en minusculas
    let verificar = /[^a-zñ\s]/gi; //aca solo estan de la a-z
    if(nuevo!=''){
        verificador= true;
    }else{
        verificador=false;
    }
    return nuevo.replace(verificar,''); //el comando replace... hace que primero verifique el texto dentro de la variable "nuevo" con verificar para ver si coincide.... si no coincide entonces lo reemplza por un espacio.
}


/*Funcionalidad base codificar del boton encriptar y desencriptar*/
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

function decodificar(){
    let texto = encriptar.value;
    let codigo = /ai|enter|imes|ober|ufat/g;
    let texto2=texto.replace(codigo, function(coincide){
        if(coincide=='ai'){
            return 'a';
        }
        if(coincide=='enter'){
            return 'e';
        }
        if (coincide == 'imes'){
            return 'i';
        }
        if (coincide=='ober'){
            return 'o';
        }
        if (coincide=='ufat'){
            return 'u';
        }
    });
    return texto2;
};

//Revisa que en el textarea no haya caracteres no permitidos
encriptar.addEventListener('input',function(){ 
    var texto = encriptar.value;
    encriptar.value = nopermitidos(texto);
    if (encriptar.value==''){
        avisos.style.display="inline-block";
        copiar.style.display="none";
        pegar.style.display="inline-block";
        return textoDesencriptado.value = texto;
    }else{
        pegar.style.display="none";
    }
});

//Funcionalidad de los botones encriptar y desencriptar
botonencriptador.addEventListener('click', function(){
    let texto1 = codificar();
    if (verificador){
                avisos.style.display="none";
                copiar.style.display="inline-block";
                return textoDesencriptado.value = texto1;
    }
});

desencriptar.addEventListener('click',function(){
    let texto1 = decodificar();
    if (verificador){
        avisos.style.display="none";
        copiar.style.display="inline-block";
    }
    if(verificador==true){
        return textoDesencriptado.value = texto1;
    }
})

//Botón copiar

copiar.addEventListener('click', function(){
    let texto = textoDesencriptado.value;
    let vacio = /  /g; //aquí se especifica que busque los dobles espacios
    texto = texto.replace(vacio, "");
    navigator.clipboard.writeText(texto);
});

//Funcionalidad del boton pegar
encriptar.addEventListener('focus',function(focus){
    pegar.style.display="none";
});

encriptar.addEventListener('blur', function(){
    if (encriptar.value==''){
        pegar.style.display="inline-block";
    }
})

pegar.addEventListener('click', async function(){
    const texto = await navigator.clipboard.readText();
    encriptar.value = texto;
    pegar.style.display="none";
    verificador=true;
});

//comandos para borrar
borrar.addEventListener('click', function(){
    encriptar.value="";
    textoDesencriptado.value="";
    avisos.style.display="inline-block";
    copiar.style.display="none";
    pegar.style.display="inline-block";
    verificador=false;
});