# WorkLink - Gestión de Tareas y Comunicacións

WorkLink es una aplicación web diseñada para la gestión de tareas laborales y comunicación entre equipos. Permite a los usuarios registrarse, iniciar sesión, gestionar tareas, interactuar por correo electrónico y chat, así como visualizar estadísticas sobre las tareas completadas.

## Objetivo

Desarrollar una plataforma de productividad donde los usuarios puedan gestionar sus tareas diarias, recibir y enviar correos electrónicos, interactuar en un chat en tiempo real, y consultar su monitor de actividad y estadísticas. Esta aplicación también puede ser convertida en una aplicación móvil utilizando Apache Cordova.

## Importante
Este es un prototipo en desarrollo, por lo que algunas funcionalidades pueden estar limitadas o en constante evolución. El propósito es demostrar una idea general del flujo y la interacción del usuario dentro de una aplicación de gestión de tareas.

## Tecnologías Utilizadas

Frontend: HTML5, CSS3, JavaScript, Bootstrap
Backend: PHP (para manejar sesiones, autenticación, y tareas en servidor)
Almacenamiento: JSON para almacenamiento de usuarios, tareas y datos del chat.
Correo Electrónico: Integración con SMTP para enviar y recibir correos.
Cordova: Para convertir la aplicación web en una aplicación móvil.

## Estructura del Proyecto

worklink/
-- css
-- style.css
-- js
-- app.js
-- emailHandler.js
-- index.js
-- main.js
-- smtp.js
-- data
-- index.php
-- login.html
-- register.html
-- chat.html
-- documents.html
-- email.html
-- index.html
-- monitor.html
-- sensores.html
-- settings.html

## Instrucciones de Instalación

1. **Clona el repositorio**:
   -`git clone https://github.com/darkfusion1/WorkLink.git`
2. **Configura tu servidor local**:
   -Configura un servidor local (como XAMPP o similar) para que soporte PHP.
   -Asegúrate de que los archivos PHP puedan leer y escribir en los archivos users.json y tasks.json.
3. **Instala Cordova**: 
   -Asegúrate de tener Node.js instalado. Si no lo tienes, puedes descargarlo desde nodejs.org.
   -Instala Apache Cordova a través de npm (Node Package Manager):
   -`npm install -g cordova`
4. **Crea un Proyecto Cordova**:
   -Desde la raíz de tu proyecto, crea una nueva aplicación de Cordova:
   -`cordova create worklink com.worklink.app WorkLink`
     `cd worklink`
   -Agrega la plataforma para la cual quieres generar la app (por ejemplo, Android):
   -`cordova platform add android`
5. **Copiar Archivos del Proyecto Web a Cordova**:
   -Copia los archivos de tu proyecto web (como index.html, login.html, etc.) dentro de la carpeta www/ de tu proyecto Cordova.
   -Asegúrate de mantener la estructura de archivos y que la carpeta www/ contenga todos los archivos HTML, CSS y JS que forman tu aplicación web.
6. **Instalar Plugins de Cordova (si es necesario)**:
   -Si tu aplicación necesita funcionalidades como el acceso a la cámara, GPS, almacenamiento local, etc., puedes instalar los plugins de Cordova correspondientes. Por ejemplo, para acceder al almacenamiento local:
   -`cordova plugin add cordova-plugin-file`
7. **Construir y Ejecutar la Aplicación Móvil**:
   -Para compilar la aplicación y ejecutarla en un emulador o dispositivo real:
   -`cordova build android`
   -`cordova emulate android`
7. **Subir la App a un Dispositivo**:
   -`cordova run android`

## Uso

Para interactuar con todas las funcionalidades del sitio, debes seguir estos pasos:

1. **Gestión de Tareas**:
   - En la pagina index.html puedes navegar por las diferentes tareas.
2. **Correo Electronico**:
   -Envía correos electrónicos desde email.html a otros usuarios.
3. **Chat en Tiempo Real**:
   - Comunícate con tu equipo en tiempo real usando el chat en chat.html.
4. **Gestion de Monitores Conectados al Sistema**:
   - Monitorea y Gestiona los sensores conectados al sistema.
5. **Monitor de Actividad**:
   - Consulta el monitor de actividad y las estadísticas de tareas en monitor.html.
6. **Configuracion**:
   - Ajusta las preferencias de usuario en la página settings.html.
## Desafíos y Soluciones

- **Problema**: Convertir la aplicación web en una aplicación móvil.
  - **Solución**: Utilicé Apache Cordova para empaquetar la aplicación web como una app móvil, permitiendo su ejecución en dispositivos Android e iOS.

- **Problema**: Manejo de correos electrónicos y chat
  - **Solución**: Usé integración con SMTP para el envío de correos electrónicos y un sistema de chat basado en WebSockets para interacción en tiempo real.

## Documentación Adicional

Para más detalles, consulta los archivos `CONTRIBUTING.md` y otros documentos en la carpeta raíz.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT.
