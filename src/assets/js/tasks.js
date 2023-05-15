$(function () {
    
    // Getting lists
    const pendiente = document.getElementById('pendiente');
    const enProceso = document.getElementById('en-proceso');
    const terminado = document.getElementById('terminado');

    // Sortable Task
    var sortablePendiente = new Sortable(pendiente, {
        group: 'tasks',
        animation: 250,
        draggable: '.tarea'
    })

    var sortableEnProceso = new Sortable(enProceso, {
        group: 'tasks',
        animation: 250,
        draggable: '.tarea'
    })

    var sortableTerminado = new Sortable(terminado, {
        group: 'tasks',
        animation: 250,
        draggable: '.tarea'
    })
    
    // Click on a task
    $('.tarea').on('click', () => {
        $('.task-popup').css('display', 'flex')
    })

    const closePopup = () => {
        $('.task-popup').css('display', 'none')
    };

    $('.task-back').on('click', closePopup)
    $('#popup-closer').on('click', closePopup)

})