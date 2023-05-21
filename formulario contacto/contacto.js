document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector("contac-form");
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var messageInput = document.getElementById("message");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var message = messageInput.value.trim();

    // Validación del campo de nombre
    if (name === "") {
      showError(nameInput, "Por favor, ingresa tu nombre");
      return;
    } else {
      removeError(nameInput);
    }

    // Validación del campo de email
    if (email === "") {
      showError(emailInput, "Por favor, ingresa tu email");
      return;
    } else if (!isValidEmail(email)) {
      showError(emailInput, "Por favor, ingresa un email válido");
      return;
    } else {
      removeError(emailInput);
    }

    // Validación del campo de mensaje
    if (message === "") {
      showError(messageInput, "Por favor, ingresa tu mensaje");
      return;
    } else {
      removeError(messageInput);
    }

    // Si todas las validaciones son exitosas, puedes enviar el formulario programáticamente:
    form.submit();
  });

  // Función para mostrar un mensaje de error
  function showError(input, message) {
    var formControl = input.parentElement;
    var errorElement = formControl.querySelector(".error-message");
    errorElement.innerText = message;
    formControl.classList.add("error");
  }

  // Función para eliminar el mensaje de error
  function removeError(input) {
    var formControl = input.parentElement;
    var errorElement = formControl.querySelector(".error-message");
    errorElement.innerText = "";
    formControl.classList.remove("error");
  }

  // Función para validar el formato de un email utilizando una expresión regular
  function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
