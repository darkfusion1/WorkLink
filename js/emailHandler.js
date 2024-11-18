function sendEmail() {
    const recipient = document.querySelector("#emailRecipient").value;
    const message = document.querySelector("#emailMessage").value;

    if (!recipient || !message) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    // Lógica de envío (simulación)
    alert(`Correo enviado a ${recipient} con el mensaje: "${message}"`);
}

document.querySelector("#sendButton").addEventListener("click", sendEmail);
