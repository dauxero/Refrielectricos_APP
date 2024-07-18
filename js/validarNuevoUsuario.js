document
  .getElementById("formulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    //tomar el contenido de los input
    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let correo = document.getElementById("correo").value;
    let telefono = document.getElementById("telefono").value;
    let rol = document.getElementById("rol").value;

    // validacion de campos
    if (
      usuario.trim() === "" ||
      password.trim() === "" ||
      nombre.trim() === "" ||
      apellido.trim() === "" ||
      correo.trim() === "" ||
      telefono.trim() === "" ||
      rol.trim() === ""
    ) {
      document.getElementById(
        "mensaje"
      ).textContent = `Los campos estan vacios`;
      setTimeout(() => {
        document.getElementById("mensaje").textContent = "";
      }, 4000);
    } else {
      document.getElementById("mensaje").textContent =
        "Se ha creado el nuevo usuario";
      setTimeout(() => {
        window.location.href = "moduloUsuarios.html";
      }, 2000);
    }
  });
