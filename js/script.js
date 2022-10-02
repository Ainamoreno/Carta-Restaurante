const inputDia = document.getElementById('input-dia');
const inputMes = document.getElementById('input-mes');
const inputAno = document.getElementById('input-ano');
const inputPersonas = document.getElementById('input-personas');
const inputHora = document.getElementById('input-hora');
const valorPorDefectoInput = 'Elige...';

// Con esta función se abre el Toast 
function mostrarToast() {
    var toast = document.getElementById("toast");
    toast.className = "mostrar";
    setTimeout(function(){ toast.className = toast.className.replace("mostrar", ""); }, 7000); 
    inputDia.value = valorPorDefectoInput;
    inputMes.value = valorPorDefectoInput;
    inputAno.value = valorPorDefectoInput;
    inputPersonas.value = valorPorDefectoInput;
    inputHora.value = valorPorDefectoInput;
}

// Con esta función se cierra el Toast 
function cerrarToast() {
    var toast = document.getElementById("toast");
    toast.className = "cerrar";
    toast.className = toast.className.replace("cerrar", "");
}

function validarFormulario () {
    const esInvalid = [inputDia.value, inputMes.value, inputAno.value, inputPersonas.value, inputHora.value].includes(valorPorDefectoInput);
    document.getElementById('btn-reservar').disabled = esInvalid;
}



