// JavaScript
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("mensaje").value;
    var regex = /^[a-zA-Z\s]+$/; // Expresión regular para letras y espacios
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para email
    var resultElement = document.getElementById("result");

    // Validación de nombre
    if (name === "" || !regex.test(name)) {
        resultElement.style.color = "red";
        resultElement.innerHTML = "Error: El nombre debe contener solo letras.";
        return;
    }

    // Validación de email
    if (email === "" || !emailRegex.test(email)) {
        resultElement.style.color = "red";
        resultElement.innerHTML = "Error: El email debe tener un formato válido.";
        return;
    }

    // Validación de mensaje
    if (message === "" || !regex.test(message)) {
        resultElement.style.color = "red";
        resultElement.innerHTML = "Error: El mensaje debe contener solo letras y números.";
        return;
    }

    // Si todo es correcto
    resultElement.style.color = "green";
    resultElement.innerHTML = "¡Formulario válido!";

    // Puedes enviar el formulario aquí si lo deseas
    document.getElementById("contactForm").submit();
}