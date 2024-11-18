document.addEventListener("DOMContentLoaded", () => {
    // Cambiar la clase activa del menú al hacer clic
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        });
    });

    // Cualquier otra función global
    console.log("Aplicación cargada");
});
