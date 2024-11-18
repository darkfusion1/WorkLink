function sendMessage() {
    const chatInput = document.getElementById("chat-input");
    const message = chatInput.value;
    const chatBox = document.getElementById("chat-box");

    if (message) {
        const messageNode = document.createElement("p");
        messageNode.textContent = message;
        chatBox.appendChild(messageNode);
        chatInput.value = "";
    }
}

function uploadFile() {
    const fileInput = document.getElementById("file-upload");
    if (fileInput.files.length > 0) {
        const fileName = fileInput.files[0].name;
        const fileList = document.getElementById("file-list");
        const fileNode = document.createElement("p");
        fileNode.textContent = "Documento subido: " + fileName;
        fileList.appendChild(fileNode);
    }
}

function sendEmail() {
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    if (email && subject && message) {
        alert("Correo enviado a: " + email);
    } else {
        alert("Por favor, completa todos los campos.");
    }
}

// Funciones para mostrar datos de sensores (simulados)
document.getElementById("temp-display").textContent = "22°C";
document.getElementById("humidity-display").textContent = "50%";
document.getElementById("light-display").textContent = "300 lux";
