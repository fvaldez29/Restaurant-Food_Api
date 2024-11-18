# Food-App API

## Descripción

La **Food-App API** es una API RESTful construida con Node.js y Express. Está diseñada para manejar usuarios, autenticación, y datos relacionados con una aplicación de comida. Incluye autenticación, gestión de usuarios y rutas de prueba para propósitos de desarrollo.

## Estructura de Carpetas

# Estructura del Proyecto

Este proyecto sigue una arquitectura modular, organizada en carpetas para facilitar el mantenimiento y escalabilidad. A continuación, se describe cada carpeta y sus archivos.

---

## **1. Configuración**
- **`config/`**: Contiene configuraciones globales o específicas del proyecto. Es un lugar ideal para incluir configuraciones como conexiones a bases de datos, configuraciones de servicios externos, etc.
  - `authController.js`: Archivo posiblemente relacionado con la configuración o control de autenticación (puede revisarse si su ubicación está correcta).

---

## **2. Controladores**
- **`controllers/`**: Contiene la lógica principal de negocio para las diferentes entidades del sistema. Los controladores gestionan las solicitudes y respuestas HTTP.
  - `authController.js`: Maneja el inicio de sesión, registro y otros procesos relacionados con la autenticación de usuarios.
  - `categoryController.js`: Controlador para manejar las operaciones relacionadas con categorías, como creación, edición o eliminación.
  - `foodController.js`: Gestiona las solicitudes relacionadas con los alimentos, como creación, listado, actualización y eliminación.
  - `restaurantController.js`: Responsable de las operaciones relacionadas con restaurantes, como gestionar información y funcionalidades específicas.
  - `testController.js`: Controlador utilizado para pruebas de la API u otros propósitos temporales.
  - `userController.js`: Administra las operaciones relacionadas con los usuarios, como actualizar perfiles, eliminar cuentas, etc.

---

## **3. Datos**
- **`data/`**: Contiene archivos de datos que pueden usarse para propósitos de prueba o inicialización.
  - `data.js`: Archivo que probablemente almacena datos estáticos, simulados o de inicialización para el proyecto.

---

## **4. Middlewares**
- **`middlewares/`**: Contiene funciones de middleware que procesan solicitudes antes de que lleguen a los controladores.
  - `adminMiddleware.js`: Middleware que verifica si el usuario tiene permisos de administrador antes de permitir el acceso a ciertas rutas.
  - `authMiddleware.js`: Middleware que valida la autenticación del usuario, asegurando que esté autenticado antes de acceder a las rutas protegidas.

---

## **5. Modelos**
- **`models/`**: Contiene los esquemas de Mongoose que representan las entidades del sistema. Estos modelos interactúan con la base de datos MongoDB.
  - `categoryRestaurant.js`: Define la estructura y las validaciones para las categorías asociadas a restaurantes.
  - `foodModel.js`: Esquema para gestionar los datos relacionados con los alimentos.
  - `orderModel.js`: Modelo para manejar los pedidos realizados por los usuarios.
  - `restaurantModel.js`: Representa los datos relacionados con restaurantes en la base de datos.
  - `userModel.js`: Define la estructura de los datos de los usuarios, como nombre, correo electrónico, rol, etc.

---

## **6. Rutas**
- **`routes/`**: Define las rutas de la API y conecta cada una con su respectivo controlador.
  - `authRoutes.js`: Maneja las rutas relacionadas con la autenticación, como registro e inicio de sesión.
  - `categoryRoutes.js`: Rutas para realizar operaciones CRUD sobre las categorías.
  - `foodRoutes.js`: Define las rutas para gestionar los alimentos, como listar o agregar nuevos.
  - `restaurantRoutes.js`: Rutas para manejar las operaciones relacionadas con restaurantes.
  - `testRoutes.js`: Rutas temporales utilizadas para pruebas.
  - `userRoutes.js`: Define las rutas relacionadas con la gestión de usuarios.

---

## **7. Otros Archivos**
- **`.env`**: Archivo para almacenar variables de entorno sensibles, como claves API o credenciales de base de datos.
- **`.gitignore`**: Lista de archivos o carpetas que deben ser ignorados por Git (por ejemplo, `node_modules` o `.env`).
- **`data.js`**: Archivo adicional que puede ser usado para datos simulados u otras funcionalidades relacionadas con la aplicación.
- **`package-lock.json`**: Archivo generado automáticamente para registrar las versiones exactas de las dependencias instaladas.
- **`package.json`**: Archivo principal del proyecto Node.js que contiene información sobre el proyecto y sus dependencias.
- **`README.md`**: Documentación principal del proyecto, donde se describe su propósito, cómo instalarlo y usarlo.
- **`server.js`**: Archivo de entrada principal del servidor, donde se inicializa la aplicación, se configuran las rutas y se conectan los servicios necesarios.

---

## **Notas adicionales**
- La estructura modular facilita la escalabilidad, ya que cada sección del proyecto tiene su responsabilidad claramente definida.
- **Recomendación:** Verificar si `authController.js` en la carpeta `config/` debería estar en `controllers/`, ya que parece más relacionado con la lógica de negocio que con configuraciones globales.

---
