# 🛍️ ShopNow – Tienda en Línea

**ShopNow** es una aplicación de comercio electrónico desarrollada como proyecto final del curso Full Stack Developer. Permite a los usuarios navegar por productos, registrarse, iniciar sesión, agregar productos al carrito y realizar pedidos.

### 🛒 Las Mejores Marcas
![Banner ShopNow](https://raw.githubusercontent.com/manuelroma777/capstone_project/refs/heads/main/frontend/public/images/ShopNow%201.png).

### 🛒 Productos Destacados
![Productos Destacados](https://raw.githubusercontent.com/manuelroma777/capstone_project/refs/heads/main/frontend/public/images/ShopNow%201.png).

### 🔐 Formulario de Login
![Login Form ShopNow](https://raw.githubusercontent.com/manuelroma777/capstone_project/refs/heads/main/frontend/public/images/ShopNow%20-%20Login.png)

---

## 📌 Descripción General

ShopNow combina un frontend en React y un backend en Python (Flask), con conexión a una base de datos MySQL. Ofrece una experiencia de usuario intuitiva y adaptada a dispositivos móviles.

## 🚀 Tecnologías Utilizadas

### Frontend
- React
- Bootstrap 5
- React Router
- Axios

### Backend
- Python
- Flask
- Flask-CORS
- Flask-Bcrypt
- Flask-JWT-Extended
- MySQL Connector

### Base de datos
- MySQL Workbench (local)

---

## 🌐 URLs del Proyecto

- 🔗 **Frontend **: https://github.com/manuelroma777/capstone_project/tree/main/frontend
- 🔗 **Backend **: https://github.com/manuelroma777/capstone_project/tree/main/backend

> ⚠️ La base de datos está alojada localmente en MySQL Workbench, por lo que la API no estará completamente funcional en producción a menos que se configure una base de datos remota como **PlanetScale** o **Render PostgreSQL**.

---

## 🧠 Funcionalidad Autodidacta

- ✅ Diseño responsive con división de layout para login y banner.
- ✅ Manejo de JWT para autenticación segura.
- ✅ Gestión de carrito de compras con persistencia en localStorage.
- ✅ Banners promocionales dinámicos.
- ✅ Componentes personalizados como: Envíos Gratis, Preguntas Frecuentes, Contacto, etc.
- ✅ Organización profesional del código separando `frontend/` y `backend/`.

---

## 🔐 Credenciales para pruebas

```plaintext
Usuario de prueba: test@demo.com  
Contraseña: Test1234


Estructura del Repositorio
capstone_project/
│
├── frontend/             → React app
│   ├── public/
│   └── src/
│       ├── components/
│       └── Styles/
│
├── backend/              → Flask app
│   ├── app.py
│   └── requirements.txt
│
└── README.md

Para correr el proyecto localmente

Backend

cd backend
pip install -r requirements.txt
python app.py

Frontend

cd frontend
npm install
npm start

📣 Autor
Luis Manuel Vásquez Roma
Email: manuelroma333@hotmail.es
GitHub: @manuelroma777

Notas Finales
Para producción, se recomienda migrar la base de datos a un servicio cloud como PlanetScale, Railway o Render PostgreSQL.

Se aceptan sugerencias para mejorar el proyecto. ¡Gracias por visitar ShopNow!

