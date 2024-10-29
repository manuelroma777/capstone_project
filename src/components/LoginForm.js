import React, { useState } from 'react';
import axios from 'axios';

function LoginForm({ setToken, setUser }) {  // Añadir setUser como prop
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Enviar las credenciales al backend para obtener el token y los datos del usuario
    axios.post('http://localhost:5000/login', { email, password })
      .then(response => {
        const { token, user } = response.data;  // Obtener token y datos del usuario
        localStorage.setItem('token', token);  // Guardar el token en localStorage
        localStorage.setItem('user', JSON.stringify(user));  // Guardar los datos del usuario en localStorage

        // Actualizar los estados del token y del usuario en el componente padre
        setToken(token);
        setUser(user);

        setEmail('');  // Limpiar campos
        setPassword('');
        setError('');  // Limpiar errores
      })
      .catch(error => {
        console.error("Error de autenticación:", error);
        setError("Credenciales inválidas");  // Mostrar mensaje de error
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Iniciar Sesión</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}  {/* Mostrar error si las credenciales son incorrectas */}
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Iniciar sesión</button>
    </form>
  );
}

export default LoginForm;

// import React, { useState } from 'react';
// import axios from 'axios';

// function LoginForm({ setToken }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Enviar las credenciales al backend para obtener el token y el nombre del usuario
//     axios.post('http://localhost:5000/login', { email, password })
//       .then(response => {
//         const { token, firstName } = response.data;  // Obtener token y nombre
//         localStorage.setItem('token', token);  // Guardar el token en localStorage
//         localStorage.setItem('firstName', firstName);  // Guardar el nombre en localStorage
//         setToken(token);  // Actualizar el estado del token en el componente padre
//         setEmail('');
//         setPassword('');
//         setError('');
//       })
//       .catch(error => {
//         console.error("Error de autenticación:", error);
//         setError("Credenciales inválidas");  // Mostrar mensaje de error
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Iniciar Sesión</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <input
//         type="email"
//         placeholder="Correo electrónico"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//       />
//       <input
//         type="password"
//         placeholder="Contraseña"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//       />
//       <button type="submit">Iniciar sesión</button>
//     </form>
//   );
// }

// export default LoginForm;

// import React, { useState } from 'react';
// import axios from 'axios';

// function LoginForm({ setToken }) {
//   const [email, setEmail] = useState('');  // Cambiado a email
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Enviar las credenciales al backend para obtener el token
//     axios.post('http://localhost:5000/login', { email, password })  // Cambiado a email
//       .then(response => {
//         const token = response.data.token;  // Obtener el token JWT
//         localStorage.setItem('token', token);  // Guardar el token en localStorage
//         setToken(token);  // Actualizar el estado del token en el componente padre
//         setEmail('');  // Limpiar el campo email
//         setPassword('');
//         setError('');
//       })
//       .catch(error => {
//         console.error("Error de autenticación:", error);
//         setError("Credenciales inválidas");  // Mostrar mensaje de error
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Iniciar Sesión</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>} {/* Mostrar error si las credenciales son incorrectas */}
//       <input
//         type="email"  // Cambiado a email
//         placeholder="Correo electrónico"
//         value={email}  // Cambiado a email
//         onChange={(e) => setEmail(e.target.value)}  // Cambiado a email
//         required
//       />
//       <input
//         type="password"
//         placeholder="Contraseña"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//       />
//       <button type="submit">Iniciar sesión</button>
//     </form>
//   );
// }

// export default LoginForm;

// import React, { useState } from 'react';
// import axios from 'axios';

// function LoginForm({ setToken }) {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Enviar las credenciales al backend para obtener el token
//     axios.post('http://localhost:5000/login', { username, password })
//       .then(response => {
//         const token = response.data.token;  // Obtener el token JWT
//         localStorage.setItem('token', token);  // Guardar el token en localStorage
//         setToken(token);  // Actualizar el estado del token en el componente padre
//         setUsername('');
//         setPassword('');
//         setError('');
//       })
//       .catch(error => {
//         console.error("Error de autenticación:", error);
//         setError("Credenciales inválidas");  // Mostrar mensaje de error
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Iniciar Sesión</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>} {/* Mostrar error si las credenciales son incorrectas */}
//       <input
//         type="text"
//         placeholder="Nombre de usuario"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         required
//       />
//       <input
//         type="password"
//         placeholder="Contraseña"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//       />
//       <button type="submit">Iniciar sesión</button>
//     </form>
//   );
// }

// export default LoginForm;
