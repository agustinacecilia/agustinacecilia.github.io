document.addEventListener('DOMContentLoaded', function () {
    // Manejadores de eventos para los disparadores de modales
    var modalTriggers = document.querySelectorAll('.modal-trigger');
    modalTriggers.forEach(function (trigger) {
        trigger.addEventListener('click', function (event) {
            event.preventDefault();
            var modalId = this.getAttribute('data-modal');
            var modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'flex'; // Mostrar el modal
            }
        });
    });

    // Manejadores de eventos para los botones de cierre de modales
    var closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var modal = this.closest('.modal');
            if (modal) {
                modal.style.display = 'none'; // Ocultar el modal
            }
        });
    });

    // Cerrar el modal si se hace clic fuera de él
    window.onclick = function (event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none'; // Ocultar el modal
        }
    }

    // Manejo de la navegación entre imágenes en el modal de proyectos
    var currentIndex = 0;
    var projectContainers = document.querySelectorAll('#projectsModal .project-container');
    var totalImages = projectContainers.length;

    function showImage(index) {
        if (index >= 0 && index < totalImages) { // Verificar índice válido
            projectContainers.forEach((container, i) => {
                container.style.display = (i === index) ? 'flex' : 'none';
            });
        }
    }

    // Ejemplo de cómo usar la función showImage
    // Llama a showImage(currentIndex) cuando quieras mostrar una imagen específica
});
