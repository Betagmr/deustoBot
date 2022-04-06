# DEUSTOBOT
## Información del proyecto
El proyecto esta basado en una arquitectura cliente-servidor, donde el bot actua como un cliente que se conecta al servidor. Contamos con dos modulos independientes, compuestos por su respectivo proyecto **Node.js**.
## Prerequisitos
* Tener instalado una versión de [nodejs](https://nodejs.org/) 16.14.x o superior.
* Tener y configurar un [cluster de MongoDB](https://www.mongodb.com/es/cloud/atlas/) para la base de datos.
* Obtener un [token](https://discord.com/developers/docs/intro) valido de un bot de discord.
* Invitar al BOT al servidor donde se quiera desplegar y darle permisos de administración.
## Instrucciones de instalación
### Bot
1. Ejecuta `nmp i` en la consola, dentro del directorio `./bot`
2. Crear un archivo `.env` en la raiz del **modulo bot**
3. Rellenar los siguentes campos del `.env`
```
TOKEN={discord_bot_token}
PREFIX=!
```
### Server
1. Ejecuta `nmp i` en la consola, dentro del directorio `./server`
2. Crear un archivo `.env` en la raiz del **modulo server**
3. Rellenar los siguentes campos del `.env`
```
PORT=3001
MONGODB_URI={mongodb_cluster_uri}
TEST_MONGODB_URI={mongodb_test_cluster_uri}
```
## Instrucciones de ejecución
Los dos módulos cuentan con 3 scripts a la hora de ser ejecutado:
* `npm start` ejecuta el módulo en el modo de producción.
* `npm run dev` ejecuta el módulo en el modo de desarrollo.
* `npm test` ejecuta los tests del módulo.
> El modo de **desarrollo** se conecta a la BD de pruebas y renicia de forma automática el bot cada vez que se realiza un cambio en el código.
## Comandos funcionales del bot
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
