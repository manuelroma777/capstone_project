import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    calle: '',
    ciudad: '',
    comunidad: '',
    codigoPostal: '',
    pais: '',
    movil: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Manejar los cambios en los inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/register', formData)
      .then(response => {
        alert('Usuario registrado correctamente');
        navigate('/login');  // Redirigir a la página de inicio de sesión después del registro
      })
      .catch(error => {
        setError('Hubo un problema al registrar el usuario. Inténtelo de nuevo.');
        console.error(error);
      });
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Regístrate</h2>
      <Form onSubmit={handleSubmit}>
        {/* Campos de nombre y apellido */}
        <Form.Group controlId="firstName" className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="lastName" className="mb-3">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Campos de email y contraseña */}
        <Form.Group controlId="email" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="password" className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Nuevos campos para la dirección */}
        <Form.Group controlId="calle" className="mb-3">
          <Form.Label>Calle</Form.Label>
          <Form.Control
            type="text"
            name="calle"
            value={formData.calle}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="ciudad" className="mb-3">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control
            type="text"
            name="ciudad"
            value={formData.ciudad}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="comunidad" className="mb-3">
          <Form.Label>Comunidad</Form.Label>
          <Form.Control
            type="text"
            name="comunidad"
            value={formData.comunidad}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="codigoPostal" className="mb-3">
          <Form.Label>Código Postal</Form.Label>
          <Form.Control
            type="text"
            name="codigoPostal"
            value={formData.codigoPostal}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="pais" className="mb-3">
          <Form.Label>País</Form.Label>
          <Form.Control
            type="text"
            name="pais"
            value={formData.pais}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="movil" className="mb-3">
          <Form.Label>Móvil</Form.Label>
          <Form.Control
            type="text"
            name="movil"
            value={formData.movil}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {error && <p className="text-danger">{error}</p>}

        <Button variant="primary" type="submit">Registrarse</Button>
      </Form>
    </Container>
  );
}

export default Register;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { Form, Button, Container } from 'react-bootstrap';

// function Register() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: ''
//   });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   // Manejar los cambios en los inputs
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   // Manejar el envío del formulario
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:5000/register', formData)
//       .then(response => {
//         alert('Usuario registrado correctamente');
//         navigate('/login');  // Redirigir a la página de inicio de sesión después del registro
//       })
//       .catch(error => {
//         setError('Hubo un problema al registrar el usuario. Inténtelo de nuevo.');
//         console.error(error);
//       });
//   };

//   return (
//     <Container className="mt-5">
//       <h2 className="text-center mb-4">Regístrate</h2>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="firstName" className="mb-3">
//           <Form.Label>Nombre</Form.Label>
//           <Form.Control
//             type="text"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleChange}
//             required
//           />
//         </Form.Group>
        
//         <Form.Group controlId="lastName" className="mb-3">
//           <Form.Label>Apellido</Form.Label>
//           <Form.Control
//             type="text"
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleChange}
//             required
//           />
//         </Form.Group>

//         <Form.Group controlId="email" className="mb-3">
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </Form.Group>

//         <Form.Group controlId="password" className="mb-3">
//           <Form.Label>Contraseña</Form.Label>
//           <Form.Control
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </Form.Group>

//         {error && <p className="text-danger">{error}</p>}

//         <Button variant="primary" type="submit">Registrarse</Button>
//       </Form>
//     </Container>
//   );
// }

// export default Register;
