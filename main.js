document.addEventListener("DOMContentLoaded", function() {
const form = document.getElementById("formulario");
const mostrarDatos = document.createElement('div')
mostrarDatos.id = 'mostrarDatos';
document.body.appendChild(mostrarDatos);

//mostrar datos guardados al cargar
mostrarGuardados();

form.addEventListener("submit", function(event) {
    event.preventDefault(); //evita el envio tradicional

    //obtiene los valores

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const mensaje = document.getElementById("mensaje").value;

    //guarda en localStorage del navegador

    const datos = {correo, nombre, mensaje};
    localStorage.setItem('datosformulario', JSON.stringify(datos));

    mostrarGuardados();
    alert("Datos guardados correctamente");
});

//funcion para mostrar datos
function mostrarGuardados() {
    const datos = localStorage.getItem('datosformulario');
    if (datos) {
        const obj = JSON.parse(datos);
        mostrarDatos.innerHTML = `
            <p><strong>Nombre:</strong> ${obj.nombre}</p>
            <p><strong>Correo:</strong> ${obj.correo}</p>
            <p><strong>Mensaje:</strong> ${obj.mensaje}</p>
        `;
    }
}

});
