# DEUSTOBOT
## Información del proyecto
El proyecto esta basado en una arquitectura cliente-servidor, donde el bot actua como un cliente que se conecta al servidor. Contamos con dos modulos independientes, compuestos por su respectivo proyecto **Node.js**.
## Prerequisitos
* Tener instalado una versión de [nodejs](https://nodejs.org/) 16.14.x o superior.
* Tener y configurar un [cluster de MongoDB](https://www.mongodb.com/es/cloud/atlas/) para la base de datos.
* Obtener un [token](https://discord.com/developers/docs/intro) valido de un bot de discord.
* Invitar al BOT al servidor donde se quiera desplegar y darle permisos de administración.
* (Opcional) Tener instalado [Docker](https://www.docker.com/)
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
DEV_MONGODB_URI={mongodb_dev_cluster_uri}
TEST_MONGODB_URI={mongodb_test_cluster_uri}
```
## Instrucciones de ejecución
### Node
Los dos módulos cuentan con 3 scripts a la hora de ser ejecutado:
* `npm start` ejecuta el módulo en el modo de producción.
* `npm run dev` ejecuta el módulo en el modo de desarrollo.
* `npm test` ejecuta los tests del módulo.
> Debe ejecutar el comando en cada uno de los modulos. \
> El modo de **desarrollo** se conecta a la BD de desarrollo y renicia de forma automática el bot cada vez que se realiza un cambio en el código.
### Docker
Si dispone de docker instalado puede ejecutar el comando `docker-compose up` en la raiz del proyecto para iniciar tanto el bot como el servidor.
## Comandos funcionales del bot
> Para ejecutar un comando es necesario incorporar el prefijo.\
> **Estructura**: `{PREFIX}{comando} {args*}` \
> **Ejemplo**: para `PREFIX = !` -> `!move Bat @Betagmr`
### Módulo Admin
Comandos para la administración del servidor:
* `move {canal} {@usuario+}`: Mueve a los n usuarios selccionados a un canal expecifico.
* `moveall {canal}`: Mueve a todos los usuarios conectados a un canal.
* `mute {@usuario} {int: segundos}`: Silencia al usuario seleccionado por un periodo de tiempo.
### Módulo Información
Comandos de informaciòn:
* `ping`: Muestra el tiempo de retardo de conexión con el bot
### Módulo Gamblimg
Comandos para la interaccion con al modulo de juegos:
* `bet {int: monedas} {up | mid | down}`: Crear una apuesta.
* `bonus`: Una vez al dia te da una cantidad de monedas.
* `wallet`: Muestra de cuantas monedas dispones.
* `top`: Muestra el top 10 con mas dinero.
### Módulo Agenda
Comandos para la interaccion con al modulo de juegos:
* `addchecklist {nombre_checklist} {elemento}`: Añade un elemento a una checklist.
* `checkelement {nombre_checklist} {int: elemento}`: Marca un elemento de la checklist como hecho.
* `deleteelement {nombre_checklist} {int: elemento}`: Elimina un elemento de la checklist.
* `showchecklist {nombre_checklist}`: Muestra la checklist seleccionada.
* `reminder {HH:MM} {DD/MM/AAAA} {recordatorio}`: Crea un recordatorio.
* `myreminders`: Muestra tus recordatorios.
____
Esto hay que quitarlo y ponerlo con el formato de arriba
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
