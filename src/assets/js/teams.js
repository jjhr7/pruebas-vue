// Elements
const id = getUrlParameter('id');

// On page load
onInit();

// Init
function onInit(){
    if(id == false){
        $('#teamList').css('display', 'flex');
        $('#teamUserList').css('display', 'none');

        // Titulo
        $('#titulo').text('Equipos');

    } else {
        $('#teamList').css('display', 'none');
        $('#teamUserList').css('display', 'flex');

        // Titulo
        $('#titulo').text('Nombre del equipo');
    }
}

// Getting the URL params
function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};