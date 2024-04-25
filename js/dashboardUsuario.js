const usuario = [
    {
        usuarioId: 1,
        nombre: "Pepe", 
        viajes: [
            { id: 1, duracion: "3 dias", fecha: "22/04/2022", origen: "Lima", destino:"Cuzco", conductor: "conductor 1" },
            { id: 2, duracion: "14 dias", fecha: "22/05/2022", origen: "Lima", destino:"Huanuco", conductor: "conductor 1" },
            { id: 3, duracion: "30 dias", fecha: "14/05/2021", origen: "Lima", destino:"Piura", conductor: "conductor 1" },
            { id: 4, duracion: "16 dias", fecha: "22/05/2022", origen: "Lima", destino:"Arequipa", conductor: "conductor 1" },
            { id: 5, duracion: "16 dias", fecha: "22/05/2023", origen: "Lima", destino:"Cajamarca", conductor: "conductor 1" },
            { id: 6, duracion: "16 dias", fecha: "01/01/2024", origen: "Lima", destino:"Ancash", conductor: "conductor 1" },
            { id: 7, duracion: "16 dias", fecha: "22/05/2020", origen: "Lima", destino:"Ica", conductor: "conductor 1" },
            { id: 8, duracion: "16 dias", fecha: "22/05/2022", origen: "Lima", destino:"Junin", conductor: "conductor 1" },
            { id: 9, duracion: "16 dias", fecha: "14/07/2020", origen: "Lima", destino:"Comas", conductor: "conductor 1" },
            { id: 10, duracion: "16 dias", fecha: "15/03/2024", origen: "Lima", destino:"Cuzco", conductor: "conductor 1" },
        ]
    }
];

var usuarioId = localStorage.getItem("userID");

function mostrarViajes() {
    var viajes = usuario.find(viaje => viaje.usuarioId == usuarioID).usuario;

    $("#lista-viajes").empty();

    listaViajes.forEach(function(user) {
        $("#lista-viajes").append(`<li><a href="#" class="usuario" data-id="${user.id}">${user.nombre}</a></li>`);
    });
}

function mostrarDescripcionUsuario(userID) {
    var viajes = usuario.find(viaje => viaje.usuarioId == usuarioID)
                            .usuario.find(user => user.id === userId).descripcion;
    $("#descripcion-curso").text(descripcion);
    $("#descripcion-curso").show();
}

$(document).ready(function(){
    mostrarCursosProfesor();

    $(document).on("click", ".curso", function(event) {
        event.preventDefault();
        var cursoId = parseInt($(this).data("id"));
        mostrarDescripcionCurso(cursoId);
    });
});

// se añadió un cerrar sesión en ancho pc
document.getElementById('cerrarSesion').addEventListener('click', function () {
    localStorage.removeItem("usuarioLogueado");
    location.href = "index.html";
});
// se añadió un cerrar sesión en ancho movil
document.getElementById('cerrarSesionToggle').addEventListener('click', function () {
    localStorage.removeItem("usuarioLogueado");
    location.href = "index.html";
});
function verificarAutenticacion() {
    if (!localStorage.getItem("usuarioLogueado")) {
        location.href = "index.html";
    }
}
verificarAutenticacion();