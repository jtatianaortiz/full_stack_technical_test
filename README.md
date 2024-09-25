# Double V Partners

## Desarrollador Full Stack Semi Senior

### ¡Bienvenidos / as!

### Tabla de Contenido

- [Introducción](#introducción)
- [Instrucciones de la Prueba Técnica](#instrucciones-de-la-prueba-técnica)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Dependencia](#dependencia)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Instalación](#instalación)
  - [Clonar el repositorio](#clonar-el-repositorio)
  - [Ejecutar con npm](#ejecutar-con-npm)
  - [Scripts disponibles](#scripts-disponibles)
- [Documentación](#documentación)
- [Desarrollador ✒️](#desarrollador-✒️)

## Introducción

Esta prueba técnica es una tienda en línea desarrollada con React, Ionic y TypeScript, que permite a los usuarios explorar productos, agregar productos a su lista de wishlist. La aplicación se conecta con una API RESTFUL de Platzi - [Fake Store API](https://fakeapi.platzi.com/), con el fin de obtener la información acerca de los productos.

## Instrucciones de la Prueba Técnica

[Detalles de la prueba técnica](https://drive.google.com/file/d/1HbPA2LbEIkFS5hWieopFKq0r4BJq7df8/view?usp=sharing)

## Tecnologías Utilizadas

- Ionic Framework
- React
- TypeScript
- React Router
- Context API

## Dependencia

Al ejecutar este proyecto, las versiones y dependencias son las siguientes:

- [ionic](https://ionic.io/) - **7.2.0**
- [react](https://es.react.dev/) - **18.2.0**
- [react-router-dom](https://reactrouter.com/en/main) - **5.3.4**
- [typescript](https://www.typescriptlang.org/) - **5.1.6**
- [axios](https://axios-http.com/docs/intro) - **1.7.7**
- [eslint](https://eslint.org/) - **8.35.0**
- [vite](https://vitejs.dev/) - **5.2.0**

## Estructura del proyecto

La estructura del proyecto se basó en la "estructura modular" o "estructura basada en funciones".

```
├── src
│   ├── assets
│   ├── components
│       ├── Header
│       ├── Loading
│       ├── Products
│       └── SideMenu
│   ├── Context
│       ├── NotificationContext
│       └── WishlistContext
│   ├── hooks
│       ├── useErrorHandler
│       └── useFetchProducts
│   ├── Pages
│       ├── Error
│       ├── Products
│       └── Wishlist
│   ├── routes
│   ├── services
│   ├── types
│   ├── utils
│   ├── app.css
│   ├── app.tsx
│   └── main.ts
├── .gitignore
├── package-lock.json
└── package.json
├── README.md
├── tsconfig.json
└── vite.config.ts
```

## Instalación

## Clonar el repositorio

1. Clonar el repositorio en tu maquina local.
2. Navegar a la carpeta del proyecto.

```

git clone https://github.com/jtatianaortiz/full_stack_technical_test.git

```

## Ejecutar con npm

1. Verificar las versiones antes de ejecutar el proyecto.
2. Abrir la terminal y ejecutar los siguientes comandos:

   - Instala las dependencias del proyecto.
     ```
     $ npm i
     ```
   - Inicia la aplicación.
     ```
     $ npm run dev
     ```

**Nota:** En tal caso que la versión de Node.js no coincida y se tenga una versión diferente, se puede instalar **NVM**, el cual nos permitirá administrar múltiples versiones de Node.js.

## Scripts disponibles

- Ejecuta la aplicación en un entorno de desarrollo.

```
$ npm run dev
```

- Permite la compilación y preparación de la aplicación.

```
$ npm run build
```

## Desarrollador ✒️

- **Tatiana Ortiz** - _[Software Developer 💻](https://www.linkedin.com/in/jtatianaortiz/)_
