document
  .getElementById("formulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    //tomar el contenido de los input
    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;

    // validacion de campos
    if (usuario.trim() === "" || password.trim() === "") {
      document.getElementById(
        "mensaje"
      ).textContent = `Los campos estan vacios`;
      setTimeout(() => {
        document.getElementById("mensaje").textContent = "";
      }, 4000);
    } else {
      window.location.href = "pages/admin.html";
    }
  });
