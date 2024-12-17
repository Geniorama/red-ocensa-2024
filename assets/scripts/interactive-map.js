const containersDots = document.querySelectorAll(".dots-map-2024");
const buttonsInteractive = document.querySelectorAll(
  ".card-interactive-icons__container"
);
const menuInteractive = document.getElementById('menu-map')
const itemsMenu = menuInteractive.querySelectorAll('.link-menu')
const mapInteractiveContainer = document.getElementById('container-map-terminal-2024')
const columnInfo = document.getElementById('col-data-map')
const columnMap = document.getElementById('col-map')
const cardsInfo = columnInfo.querySelectorAll('.card-list-info')

if (containersDots && buttonsInteractive) {
  buttonsInteractive.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const target = button.dataset.target;
      if (target) {
        const containerSelected = document.getElementById(target);
        if (containerSelected) {
          containerSelected.classList.toggle("d-none");
          button.classList.toggle('active')

          scrollToSection('map-terminal-2024')
          centerMapToZone(containerSelected, mapInteractiveContainer)
        } else {
          console.log("No existe el contenedor con el id");
        }
      } else {
        console.log("No hay un target asignado");
      }
    });
  });
}



if(menuInteractive){
  itemsMenu.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const target = link.dataset.target;
      if(target){
        resetCards()
        resetMap()
        const containerSelected = document.getElementById(target);
        
        if (containerSelected) {
          containerSelected.classList.toggle("d-none");
          if (containerSelected.classList.contains("d-none")) {
            link.classList.remove("active");
          } else {
            link.classList.add("active");
          }

          scrollToSection('col-data-map')
        } else {
          console.log("No existe el contenedor con el id");
        }

        columnInfo.classList.add('col-lg-5', 'col-xl-4')
        columnMap.classList.add('col-lg-7', 'col-xl-8')
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

function scrollToSection(idSection){
  if(idSection){
    const targetSection = document.getElementById(idSection);
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}


function centerMapToZone(zoneElement, mapContainer) {
  const map = mapContainer || document.getElementById("container-map-terminal-2024");
  const zone = zoneElement;
  

  if (map && zone) {
    const mapContainer = map.parentElement
    const mapContainerWidth = mapContainer.offsetWidth

    const dotsZone = zone.querySelectorAll('.location-map-dot');
    const firstDot = dotsZone[0];
    const firstDotOffsetLeft = firstDot.offsetLeft
    const dotWidth = firstDot.offsetWidth

    const scrollTo = firstDotOffsetLeft - mapContainerWidth / 2 + dotWidth / 2;
    mapContainer.scrollTo({
      left: scrollTo,
      behavior: "smooth",
    });
  } else {
    console.log("No existe el contenedor del mapa o la zona.");
  }
}

// Acoordion functions
const titleAccordions = document.querySelectorAll('.accordion-title')

if(titleAccordions){
  titleAccordions.forEach(title => {
    title.addEventListener('click', () => {
      const target = title.dataset.accordion
      if(target){
        const accordionSelected = document.getElementById(target)
        if(accordionSelected){
          accordionSelected.classList.toggle('active')
          title.classList.toggle('active')
        }
      } else {
        console.log('No tiene asignado un target')
      }
    } )
  })
}