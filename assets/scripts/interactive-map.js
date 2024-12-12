const containersDots = document.querySelectorAll(".dots-map-2024");
const buttonsInteractive = document.querySelectorAll(
  ".card-interactive-icons__container"
);

if (containersDots && buttonsInteractive) {
  buttonsInteractive.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const target = button.dataset.target;
      if (target) {
        const containerSelected = document.getElementById(target);
        if (containerSelected) {
          containerSelected.classList.toggle("d-none");

          // Comprobar visibilidad de los puntos
          if (containerSelected.classList.contains("d-none")) {
            button.classList.remove("active");
          } else {
            button.classList.add("active");
          }
        } else {
          console.log("No existe el contenedor con el id");
        }
      } else {
        console.log("No hay un target asignado");
      }
    });
  });
}

const menuInteractive = document.getElementById('menu-map')
const mapInteractiveContainer = document.getElementById('container-map-terminal-2024')
const columnInfo = document.getElementById('col-data-map')
const cardsInfo = columnInfo.querySelectorAll('.card-interactive-icons')

if(menuInteractive){
  const itemsMenu = menuInteractive.querySelectorAll('.link-menu')
  itemsMenu.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const target = link.dataset.target;
      if(target){
        const containerSelected = document.getElementById(target);
        
        if (containerSelected) {
          containerSelected.classList.toggle("d-none");

          if (containerSelected.classList.contains("d-none")) {
            link.classList.remove("active");
          } else {
            link.classList.add("active");
          }
        } else {
          console.log("No existe el contenedor con el id");
        }

        if(cardsInfo){
          cardsInfo.forEach(card => {
            if(!card.classList.contains('d-none')){
              columnInfo.classList.add('col')
              mapInteractiveContainer.style.margin = "unset"
            } else {
              columnInfo.classList.remove('col')
              mapInteractiveContainer.style.margin = "0 auto"
            }
          })
        }
      }
    })
  });
}

