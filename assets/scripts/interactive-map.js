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
const itemsMenu = menuInteractive.querySelectorAll('.link-menu')
const mapInteractiveContainer = document.getElementById('container-map-terminal-2024')
const columnInfo = document.getElementById('col-data-map')
const cardsInfo = columnInfo.querySelectorAll('.card-list-info')

if(menuInteractive){
  itemsMenu.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const target = link.dataset.target;
      if(target){
        resetCards()
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

        columnInfo.classList.add('col')
        mapInteractiveContainer.style.margin = "unset"

        
      }
    })
  });
}

const resetCards = () => {
  cardsInfo.forEach(card => {
    card.classList.add('d-none')
  })

  itemsMenu.forEach(item => {
    item.classList.remove('active')
  })
}

const resetMap = () => {
  containersDots.forEach(container => {
    container.classList.add('d-none')
  })

  buttonsInteractive.forEach(button => {
    button.classList.remove('active')
  })
}