const containersDots = document.querySelectorAll('.dots-map-2024')
const buttonsInteractive = document.querySelectorAll('.card-interactive-icons__container')

if(containersDots && buttonsInteractive){
    buttonsInteractive.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const target = button.dataset.target
            if(target){
                const containerSelected = document.getElementById(target)
                containerSelected.classList.toggle('d-none')

                // Comprobar visibilidad de los puntos
                if(containerSelected.classList.contains('d-none')){
                    button.classList.remove('active')
                } else {
                    button.classList.add('active')
                }
            } else {
                console.log('No hay un target asignado')
            }
        })
    });
}
