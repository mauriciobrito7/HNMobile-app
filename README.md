# HN Mobile App

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?style=for-the-badge&logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org)

Bienvenidos al repositorio de HN Mobile, una aplicación de código abierto construida con React Native y TypeScript. HN Mobile es una aplicación cliente que permite a los usuarios interactuar con contenidos de alta calidad, ofreciendo una experiencia de usuario optimizada para dispositivos móviles.

## Instalación

Para instalar y ejecutar HN Mobile en su máquina local, siga estos pasos:

1. Clone el repositorio a su máquina local:

```sh
git clone https://github.com/mauriciobrito7/HNMobile-app.git
cd hnmobile-app

# Si usa yarn
yarn install

# Si usa npm
npm install
```

## Inicio de la Aplicación

Asegurese de incluir las variables de entorno en un archivo .env en la raíz del proyecto. Puede encontrar un ejemplo de las variables de entorno en el archivo `.env.example.`

Antes de iniciar, asegúrese de haber instalado la aplicación Expo Go en su dispositivo físico para poder ejecutar la aplicación en desarrollo. Puede descargar Expo Go desde la App Store o Google Play Store según su dispositivo.

### Para iniciar la aplicación y escanear con Expo Go

Utilice el siguiente comando para arrancar la aplicación. Luego, escanee el código QR generado con la aplicación Expo Go en su dispositivo físico.

```sh
# Si usa yarn
yarn start

# Si usa npm
npm start
```

Una vez que la aplicación se haya iniciado, verá un código QR en la terminal o en la página web que se abre automáticamente (normalmente en localhost:19002). Escanee este código QR con la aplicación Expo Go en su dispositivo Android o iOS para abrir la aplicación.

Alternativas para Simuladores y Emuladores
Si prefiere usar un emulador o simulador en lugar de un dispositivo físico, puede utilizar los siguientes comandos:

Para iniciar en Android Emulator:

```sh
yarn android
```

```sh
npm run android
```

```sh
yarn ios
```

```sh
npm run ios
```

## Características

- Navegación y enrutamiento integrados con expo-router.
- Soporte para fuentes personalizadas y vector icons con expo-font y react-native-vector-icons.
- Implementación de la barra de estado con expo-status-bar.
- Manejo de llamadas API a través de axios.
- Uso de date-fns para el manejo de fechas y horas.
- Optimización de la experiencia del usuario en diferentes dispositivos con react-native-safe-area-context y react-native-screens.

## Construido con

- React Native para el desarrollo multiplataforma.
- TypeScript para agregar tipado estático.
- Expo para simplificar el proceso de desarrollo y despliegue.
- Eslint y Prettier para asegurar la calidad del código y mantener un estilo consistente.
