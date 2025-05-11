let input = document.querySelector(".input_correo");
let boton = document.querySelector(".boton_correo");
let formulario = document.querySelector(".formulario");
let parrafo_error = document.querySelector(".error_paragraph");

boton.addEventListener("click", function (e) {
  e.preventDefault(); // para evitar el envío del formulario
  let info_input = input.value;
  if (info_input.trim() === "") {
    // alert("Por favor ingresa un correo.");
    parrafo_error.classList.remove("error_paragraph-close");
  } else if (!info_input.includes("@")) {
    // alert("El correo debe contener un arroba (@).");
    parrafo_error.classList.remove("error_paragraph-close");
  } else {
    parrafo_error.classList.add("error_paragraph-close"); // es util ya que no se recarga la página
    input.value = "";
    Swal.fire({
      position: "center",
      icon: "success",
      title: "You have successfully subscribed",
      background: "#fff", // fff0f5
      color: "#000000",
      showConfirmButton: false,
      timer: 1500,
    });
  }
});
