document
.getElementById("formulario")
.addEventListener("submit", function (event) {
  event.preventDefault();

  //tomar el contenido de los input
  let usuario = document.getElementById("contra").value;
  let password = document.getElementById("nueva").value;

  // validacion de campos
  if (usuario.trim() === "" || password.trim() === "") {
    document.getElementById(
      "mensaje"
    ).textContent = `Los campos estan vacios`;
    setTimeout(() => {
      document.getElementById("mensaje").textContent = "";
    }, 4000);
  } else {
    document.getElementById("mensaje").textContent =
      "Su contraseña ha sido actualizada";
    setTimeout(() => {
      window.location.href = "admin.html";
    }, 2000);
  }
});