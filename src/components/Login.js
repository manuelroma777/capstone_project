import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../Styles/Login.css';

function Login({ setToken }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/login', { email, password })
      .then(response => {
        setToken(response.data.token);
        navigate('/productos');
      })
      .catch(error => {
        setError('Credenciales inválidas. Inténtalo de nuevo.');
        console.error(error);
      });
  };

  return (
    <Container className="login-container">
      <Row className="align-items-center">
        {/* Columna para la imagen */}
        <Col md={6} className="login-image-container order-md-1 order-2">
          <img src="/images/login.jpg" alt="Login" className="login-image" />
        </Col>

        {/* Columna para el formulario */}
        <Col md={6} className="order-md-2 order-1">
          <h2 className="text-center mb-4">Iniciar Sesión</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="password" className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            {error && <p className="text-danger">{error}</p>}

            <Button variant="primary" type="submit" className="w-100">Iniciar Sesión</Button>
          </Form>

          <p className="mt-3 text-center">¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link></p>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;

// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import axios from 'axios';
// import { Form, Button, Container, Row, Col } from 'react-bootstrap';
// import '../Styles/Login.css'; // Importa el archivo CSS para los estilos personalizados

// function Login({ setToken }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:5000/login', { email, password })
//       .then(response => {
//         setToken(response.data.token);
//         navigate('/productos');
//       })
//       .catch(error => {
//         setError('Credenciales inválidas. Inténtalo de nuevo.');
//         console.error(error);
//       });
//   };

//   return (
//     <Container className="login-container">
//       <Row className="align-items-center">
//         {/* Columna izquierda para la imagen */}
//         <Col md={6} className="login-image-container">
//           <img src="/images/login.jpg" alt="Login" className="login-image" />
//         </Col>

//         {/* Columna derecha para el formulario */}
//         <Col md={6}>
//           <h2 className="text-center mb-4">Iniciar Sesión</h2>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="email" className="mb-3">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </Form.Group>

//             <Form.Group controlId="password" className="mb-3">
//               <Form.Label>Contraseña</Form.Label>
//               <Form.Control
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </Form.Group>

//             {error && <p className="text-danger">{error}</p>}

//             <Button variant="primary" type="submit" className="w-100">Iniciar Sesión</Button>
//           </Form>

//           <p className="mt-3 text-center">¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link></p>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Login;

// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import axios from 'axios';
// import { Form, Button, Container } from 'react-bootstrap';

// function Login({ setToken }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:5000/login', { email, password })
//       .then(response => {
//         setToken(response.data.token);
//         navigate('/productos');
//       })
//       .catch(error => {
//         setError('Credenciales inválidas. Inténtalo de nuevo.');
//         console.error(error);
//       });
//   };

//   return (
//     <Container className="mt-5">
//       <img src="/images/login.jpg" alt="Login" style={{ width: '40%', height: 'auto', marginBottom: '20px' }} />
//       <h2 className="text-center mb-4">Iniciar Sesión</h2>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="email" className="mb-3">
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </Form.Group>

//         <Form.Group controlId="password" className="mb-3">
//           <Form.Label>Contraseña</Form.Label>
//           <Form.Control
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </Form.Group>

//         {error && <p className="text-danger">{error}</p>}

//         <Button variant="primary" type="submit">Iniciar Sesión</Button>
//       </Form>

//       <p className="mt-3">¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link></p>
//     </Container>
//   );
// }

// export default Login;

// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import axios from 'axios';
// import { Form, Button, Container } from 'react-bootstrap';

// function Login({ setToken }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:5000/login', { email, password })
//       .then(response => {
//         setToken(response.data.token);  // Guardar el token
//         navigate('/productos');  // Redirigir al usuario a la página de productos después de iniciar sesión
//       })
//       .catch(error => {
//         setError('Credenciales inválidas. Inténtalo de nuevo.');
//         console.error(error);
//       });
//   };

//   return (
//     <Container className="mt-5">
//       <h2 className="text-center mb-4">Iniciar Sesión</h2>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="email" className="mb-3">
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </Form.Group>

//         <Form.Group controlId="password" className="mb-3">
//           <Form.Label>Contraseña</Form.Label>
//           <Form.Control
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </Form.Group>

//         {error && <p className="text-danger">{error}</p>}

//         <Button variant="primary" type="submit">Iniciar Sesión</Button>
//       </Form>

//       {/* Añadir enlace para registrar una nueva cuenta */}
//       <p className="mt-3">¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link></p>
//     </Container>
//   );
// }

// export default Login;

// import React, { useState } from 'react';
// import axios from 'axios';

// function Login({ setToken }) {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     axios.post('http://localhost:5000/login', { username, password })
//       .then(response => {
//         const { token } = response.data;
//         setToken(token);  // Guardar el token en el estado principal o localStorage
//         setErrorMessage('');  // Limpiar cualquier error anterior
//       })
//       .catch(error => {
//         setErrorMessage('Credenciales inválidas. Intenta nuevamente.');
//       });
//   };

//   return (
//     <div className="login-form">
//       <h2>Iniciar Sesión</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Usuario:</label>
//           <input 
//             type="text" 
//             value={username} 
//             onChange={(e) => setUsername(e.target.value)} 
//             required 
//           />
//         </div>
//         <div>
//           <label>Contraseña:</label>
//           <input 
//             type="password" 
//             value={password} 
//             onChange={(e) => setPassword(e.target.value)} 
//             required 
//           />
//         </div>
//         <button type="submit">Ingresar</button>
//         {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//       </form>
//     </div>
//   );
// }

// export default Login;

// import React, { useState } from 'react';
// import axios from 'axios';

// function Login({ setToken }) {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     axios.post('http://localhost:5000/login', { username, password })
//       .then(response => {
//         const { token } = response.data;
//         setToken(token);  // Guardar el token en el estado principal o localStorage
//         setErrorMessage('');  // Limpiar cualquier error anterior
//       })
//       .catch(error => {
//         setErrorMessage('Credenciales inválidas. Intenta nuevamente.');
//       });
//   };

//   return (
//     <div className="login-form">
//       <h2>Iniciar Sesión</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Usuario:</label>
//           <input 
//             type="text" 
//             value={username} 
//             onChange={(e) => setUsername(e.target.value)} 
//             required 
//           />
//         </div>
//         <div>
//           <label>Contraseña:</label>
//           <input 
//             type="password" 
//             value={password} 
//             onChange={(e) => setPassword(e.target.value)} 
//             required 
//           />
//         </div>
//         <button type="submit">Ingresar</button>
//         {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//       </form>
//     </div>
//   );
// }

// export default Login;

// import React, { useState } from 'react';
// import axios from 'axios';

// function Login({ setToken }) {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     axios.post('http://localhost:5000/login', { username, password })
//       .then(response => {
//         const token = response.data.token;
//         localStorage.setItem('token', token);  // Guardar el token
//         setToken(token);
//       })
//       .catch(error => {
//         setError("Credenciales inválidas");
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Iniciar Sesión</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
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

// export default Login;
