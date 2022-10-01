// Con esta función se abre el Toast 
function mostrarToast() {
    var toast = document.getElementById("toast");
    toast.className = "mostrar";
    setTimeout(function(){ toast.className = toast.className.replace("mostrar", ""); }, 7000);
}


// Con esta función se cierra el Toast 
function cerrarToast() {
    var toast = document.getElementById("toast");
    toast.className = "cerrar";
    toast.className = toast.className.replace("cerrar", "");
}

const inputDia = document.getElementById('input-dia');
console.log(inputDia)
