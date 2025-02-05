    // Obtener elementos
    const Ventana = document.getElementById("ventana");
    const openbtn = document.querySelector(".btnabout");
    const closeVentana = document.getElementById("close-ventana");

    // Evento para abrir la ventana emergente
    openbtn.addEventListener("click", () => {
        Ventana.style.display = "flex";
    });

    // Evento para cerrar la ventana emergente
    closeVentana.addEventListener("click", () => {
        Ventana.style.display = "none";
    });
