document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".container img");

    // Funcție pentru a verifica dacă o imagine este în viewport
    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    };

    // Funcție care gestionează evenimentul de scroll
    const handleScroll = () => {
        images.forEach((img) => {
            if (isInViewport(img)) {
                img.classList.add("visible"); // Adaugă clasa pentru animație
            }
        });
    };

    // Atașăm evenimentul scroll
    window.addEventListener("scroll", handleScroll);

    // Verificăm imaginile inițial (în caz că unele sunt deja vizibile)
    handleScroll();
});