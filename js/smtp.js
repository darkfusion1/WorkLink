function sendEmail() {
    Email.send({
        Host: "smtp.your-email-provider.com",
        Username: "your-email@example.com",
        Password: "your-email-password",
        To: 'recipient@example.com',
        From: "your-email@example.com",
        Subject: "Título del Correo",
        Body: "Este es el contenido del correo",
    }).then(
      message => alert("Correo enviado exitosamente: " + message)
    );
}
