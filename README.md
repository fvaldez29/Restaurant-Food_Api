# Food-App API

## Descripción

La **Food-App API** es una API RESTful construida con Node.js y Express. Está diseñada para manejar usuarios, autenticación, y datos relacionados con una aplicación de comida. Incluye autenticación, gestión de usuarios y rutas de prueba para propósitos de desarrollo.

## Estructura de Carpetas


```plaintext
food-app/
├── config/                 # Archivos de configuración
├── controllers/            # Controladores de la API
│   ├── authController.js   # Controlador de autenticación
│   ├── testController.js   # Controlador para pruebas
│   └── userController.js   # Controlador de gestión de usuarios
├── data/
│   └── middlewares/        # Middlewares personalizados
├── models/                 # Modelos de datos (esquemas de MongoDB)
│   └── userModel.js        # Esquema del usuario
├── node_modules/           # Dependencias instaladas (ignorado por Git)
├── routes/                 # Rutas de la API
│   ├── authRoutes.js       # Rutas relacionadas con autenticación
│   ├── testRoutes.js       # Rutas para pruebas
│   └── userRoutes.js       # Rutas de gestión de usuarios
├── utils/                  # Utilidades y helpers
├── .gitignore              # Archivos y carpetas ignorados por Git
├── .env                    # Variables de entorno (ignorado por Git)
├── package.json            # Dependencias y scripts de NPM
├── package-lock.json       # Versión exacta de las dependencias
└── server.js               # Punto de entrada principal del servidor
