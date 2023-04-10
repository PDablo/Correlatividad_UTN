// Declaro las materias y su dependencia
const fisicaII = ["AMI", "FisicaI"];
const dispositivos = ["AMI", "FisicaI", "QuimicaGral"];
/*
// Obtener el elemento del checkbox con ID "FisicaI"
var checkboxFisicaI = document.getElementById("FisicaI");
*/
// Obtengo los checkboxes que estan chequeados solamente
const checkboxTrue = document.querySelectorAll('.my-checkbox:checked');

// Agregar un evento "change" al checkbox
checkboxFisicaI.addEventListener("change", function() {
  // Obtener el valor booleano del checkbox
  var fisicaICheckeado = checkboxFisicaI.checked;

  // Mostrar el valor en la consola
  console.log("El checkbox de Fisica I está marcado: " + fisicaICheckeado);
});
/*
// Obtener todos los elementos input de tipo checkbox
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
*/

// Recorrer todos los checkboxes
for(let i=0; i<checkboxTrue.length; i++){
    console.log(checkboxTrue[i].value)
}

