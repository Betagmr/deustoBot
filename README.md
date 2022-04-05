# DEUSTOBOT
## PREREQUISITIOS
```Tener instalado Node```
## ESTRUCTURA
El proyecto esta basado en una estructura cliente servidor. El cliente en este caso es el bot en sí. Para la parte servidora utilizamos MongoDB. 
## INSTRUCCIONES DE INSTALACIÓN
Al tener el proyecto dividido en cliente y servidor, necesitaremos dos consolas. En una accederemos a la ruta de la carpeta bot ``cd bot``. Por la otra cosnsola accederemos
a la ruta de la carpeta servidor ``cd server``.
### CONSOLA BOT
**Instalación de las dependencias:**
```
npm i
```
**Instalar herramienta de testeo:**
```
npm install jest
```
**Iniciar el bot:** 
```
npm start
```
**Ejecutar tests:** 
```
npm test
```
### CONSOLA SERVIDOR
**Instalación de las dependencias:**
```
npm i
```
**Iniciar el servidor:**
```
npm start
```
## DEPENDENCIAS UTILIZADAS
**Cliente:**
* Axios
* Colors
* Discord.js
* Dotenv
* Mongoose


**Servidor:**
* Cors
* Dotenv
* Express
* Mongoose

## COMANDOS FUNCIONALES DISCORD
### Módulo Admin
Mueve a un canal a los n usuarios mencionados:
```
!m {canal} {@usuario1} {usuario2} {...}
!move {canal} {@usuario1} {usuario2} {...}
```
Mueve a todos los usuarios conectados a un canal:
```
!moveAll {canal}
!ma {canal}
```
Silencia al usuario seleccionado por un periodo de tiempo:
```
!mute {@usuario} {int: segundos}
```
### Módulo Financiero
Obtener información sobre la criptomoneda seleccionada:
```
!currency {criptomoneda}
!cy {criptomoneda}
!crypto {criptomoneda}
```
Comparar dos criptomonedas:
```
!currencyCompare {criptomoneda1} {criptomoneda2}
!compare {criptomoneda1} {criptomoneda2}
!comp {criptomoneda1} {criptomoneda2}
```
Añadir una criptomoneda a tu lista de favoritos:
```
!currencyList {criptomoneda}
!addCoin {criptomoneda}
!addc {criptomoneda}
```
Eliminar una criptomoneda de tu lista de favoritos:
```
!deleteCurrency {criptomoneda}
!deleteCoin {criptomoneda}
!dc {criptomoneda}
```
### Módulo Agenda
Crea un recordatorio:
```
!reminder {HH:MM} {DD/MM/AAAA} {Recordario}
!recordatorio {HH:MM} {DD/MM/AAAA} {Recordario}
!rem {HH:MM} {DD/MM/AAAA} {Recordario}
!rec {HH:MM} {DD/MM/AAAA} {Recordario}
```
Devuelve los recordatorios de los 15 días de un usuario:
```
!myReminders
!ma
!myrem
!myrec
```
### Módulo Información
Muestra el tiempo de retardo de conexión con el bot:
```
!ping
!latencia
!ms
```
