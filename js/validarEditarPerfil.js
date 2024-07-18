document
  .getElementById("formulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    //tomar el contenido de los input
    let usuario = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let correo = document.getElementById("correo").value;
    let telefono = document.getElementById("telefono").value;

    // validacion de campos
    if (
      usuario.trim() === "" ||
      apellido.trim() === "" ||
      correo.trim() === "" ||
      telefono.trim() === ""
    ) {
      document.getElementById(
        "mensaje"
      ).textContent = `Los campos estan vacios`;
      setTimeout(() => {
        document.getElementById("mensaje").textContent = "";
      }, 4000);
    } else {
      document.getElementById("mensaje").textContent =
        "Se ha actualizado los datos";
      setTimeout(() => {
        window.location.href = "perfil.html";
      }, 2000);
    }
  });
