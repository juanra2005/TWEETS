
const comentario = document.getElementById("comentario");
const btnName = document.getElementById("btn-name");
const response = document.getElementById("result");
const userName = document.querySelector("#txt-name");
const responseNombre = document.getElementById("nombre");
const responseInitial = document.getElementById("nombreInicial");
const btnConvert = document.getElementById("btn-convert");


btnName.addEventListener("click", textComentario);
btnConvert.addEventListener("click",convertUpperAndLowerCase);
userName.addEventListener("keydown", tryName);

function tryName(event) {
    let username = userName.value;
    let primerCaracter = userName.value.charAt(0);

    if (event.code === "Enter") {
        responseNombre.textContent = username;
        responseInitial.textContent = primerCaracter;
    
    }
}

function contadorletras() {

    let total = 280;
    let restantes = 0;

    setTimeout(function () {
        var valor = document.getElementById("comentario");
        var respuesta = document.getElementById("contador");
        var cantidad = valor.value.length;
        document.getElementById("contador").innerHTML = " Contador → " + (restantes = total - cantidad);
        if (restantes <= 50) {
            respuesta.style.color = "red";
        }
        else {
            respuesta.style.color = "green";
        }
    1}, 10);
    

}

function textComentario() {
    let comentariofull = comentario.value;

    response.textContent = `Su comentario es → ${comentariofull}`;
}

function convertUpperAndLowerCase(event) {
    if(btnConvert.value === "true"){
        comentario.value = comentario.value.toUpperCase();
      btnConvert.textContent = "Minusculas";
      btnConvert.value = false;
    }else{
        comentario.value = comentario.value.toLowerCase();
      btnConvert.textContent = "Mayusculas";
      btnConvert.value = true;
    }
  }

