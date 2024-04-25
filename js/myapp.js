const credenciales = {
    usuario: [
        { id: 1, usuario: "usuario1", contraseña: "gatowaza" }
    ],
    chofer: [
        { id: 1, usuario: "chofer1", contraseña: "xdxdxdxd" }
    ]
};

$(document).ready(function(){
    $("#login").click(function(){
        var user = $("#usuario").val();
        var contraseña = $("#password").val();
        
        for(var i = 0; i < credenciales.usuario.length; i++) {
            if(user === credenciales.usuario[i].usuario && contraseña === credenciales.usuario[i].contraseña) {
                localStorage.setItem("usuarioLogueado", true);
                localStorage.setItem("userID", credenciales.usuario[i].id);
                alert("¡Bienvenido Usuario!");
                location.href = "dashboardUsuario.html";
                return;
            }
        }
        
        for(var j = 0; j < credenciales.chofer.length; j++) {
            if(user === credenciales.chofer[j].user && contraseña === credenciales.chofer[j].contraseña) {
                localStorage.setItem("usuarioLogueado", true);
                localStorage.setItem("userID", credenciales.chofer[j].id);
                localStorage.setItem("usernameChofer", credenciales.chofer[j].user); 
                alert("¡Bienvenido Conductor!");
                location.href = "dashboardConductor.html";
                return;
            }
        }
        
        alert("Usuario o contraseña incorrectos");
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