// este se usa para obtener los enlaces del menu, recorriendolo y haciendo una accion
// por el clicl que se le haga 
const links = document.querySelectorAll('nav a');
links.forEach(link => {
    link.addEventListener('click', () => {
    console.log("Navegando a:", link.textContent);
    });
});