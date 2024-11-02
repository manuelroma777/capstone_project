import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Button, Badge } from 'react-bootstrap';

function Header({ token, user, cart, setToken, setCart }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Limpiar token, usuario y carrito
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('cart');
    setToken(null);
    setCart([]);
    navigate("/login");
  };

  return (
    <Navbar expand="lg">
      {/* Sustituimos el texto con el logo */}
      <Navbar.Brand as={Link} to="/">
        <img 
          src="/images/ShopNow-Logo.png" 
          alt="ShopNow Logo" 
          style={{ width: '50px', height: 'auto' }} // Ajuste de tamaño según sea necesario
        />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/productos">Todos Los Productos</Nav.Link>
          <Nav.Link as={Link} to="/about">Acerca de Nosotros</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
          <Nav.Link as={Link} to="/preguntas-frecuentes">Preguntas Frecuentes</Nav.Link> {/* Enlace a Preguntas Frecuentes */}
          <Nav.Link as={Link} to="/envios-gratis">Envíos Gratis</Nav.Link> {/* Enlace a Envíos Gratis */}

          {token ? (
            <>
              <Nav.Link>
                {user ? `${user.first_name} ${user.last_name}` : ''} {/* Verificación de que user no sea null */}
              </Nav.Link>
              <Nav.Link as={Link} to="/carrito">
                Carrito <Badge variant="secondary">{cart.length}</Badge> {/* Mostrar cantidad de productos */}
              </Nav.Link>
              <Button variant="outline-danger" onClick={handleLogout}>Cerrar sesión</Button>
            </>
          ) : (
            <Nav.Link as={Link} to="/login">Iniciar Sesión</Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;

// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Navbar, Nav, Button, Badge } from 'react-bootstrap';

// function Header({ token, user, cart, setToken, setCart }) {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Limpiar token, usuario y carrito
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     localStorage.removeItem('cart');
//     setToken(null);
//     setCart([]);
//     navigate("/login");
//   };

//   return (
//     <Navbar expand="lg">
//       <Navbar.Brand as={Link} to="/">ShopNow Store</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="ml-auto">
//           <Nav.Link as={Link} to="/productos">Todos Los Productos</Nav.Link>
//           <Nav.Link as={Link} to="/about">Acerca de Nosotros</Nav.Link>
//           <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
//           <Nav.Link as={Link} to="/preguntas-frecuentes">Preguntas Frecuentes</Nav.Link> {/* Enlace a Preguntas Frecuentes */}
//           <Nav.Link as={Link} to="/envios-gratis">Envíos Gratis</Nav.Link> {/* Enlace a Envíos Gratis */}

//           {token ? (
//             <>
//               <Nav.Link>
//                 {user ? `${user.first_name} ${user.last_name}` : ''} {/* Verificación de que user no sea null */}
//               </Nav.Link>
//               <Nav.Link as={Link} to="/carrito">
//                 Carrito <Badge variant="secondary">{cart.length}</Badge> {/* Mostrar cantidad de productos */}
//               </Nav.Link>
//               <Button variant="outline-danger" onClick={handleLogout}>Cerrar sesión</Button>
//             </>
//           ) : (
//             <Nav.Link as={Link} to="/login">Iniciar Sesión</Nav.Link>
//           )}
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }

// export default Header;

// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Navbar, Nav, Button, Badge } from 'react-bootstrap';

// function Header({ token, user, cart, setToken, setCart }) {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Limpiar token, usuario y carrito
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     localStorage.removeItem('cart');
//     setToken(null);
//     setCart([]);
//     navigate("/login");
//   };

//   return (
//     <Navbar expand="lg">
//       <Navbar.Brand as={Link} to="/">ShopNow Store</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="ml-auto">
//           <Nav.Link as={Link} to="/productos">Todos Los Productos</Nav.Link>
//           <Nav.Link as={Link} to="/about">Acerca de Nosotros</Nav.Link> {/* Enlace a About */}
//           <Nav.Link as={Link} to="/contact">Contacto</Nav.Link> {/* Enlace a Contact */}

//           {token ? (
//             <>
//               <Nav.Link>
//                 {user ? `${user.first_name} ${user.last_name}` : ''} {/* Verificación de que user no sea null */}
//               </Nav.Link>
//               <Nav.Link as={Link} to="/carrito">
//                 Carrito <Badge variant="secondary">{cart.length}</Badge> {/* Mostrar cantidad de productos */}
//               </Nav.Link>
//               <Button variant="outline-danger" onClick={handleLogout}>Cerrar sesión</Button>
//             </>
//           ) : (
//             <Nav.Link as={Link} to="/login">Iniciar Sesión</Nav.Link>
//           )}
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }

// export default Header;

// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Navbar, Nav, Button, Badge } from 'react-bootstrap';

// function Header({ token, user, cart, setToken, setCart }) {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Limpiar token, usuario y carrito
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     localStorage.removeItem('cart');
//     setToken(null);
//     setCart([]);
//     navigate("/login");
//   };

//   return (
//     <Navbar expand="lg">
//       <Navbar.Brand as={Link} to="/">ShopNow Store</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="ml-auto">
//           <Nav.Link as={Link} to="/productos">Todos Los Productos</Nav.Link>

//           {token ? (
//             <>
//               <Nav.Link>
//                 {user ? `${user.first_name} ${user.last_name}` : ''} {/* Verificación de que user no sea null */}
//               </Nav.Link>
//               <Nav.Link as={Link} to="/carrito">
//                 Carrito <Badge variant="secondary">{cart.length}</Badge> {/* Mostrar cantidad de productos */}
//               </Nav.Link>
//               <Button variant="outline-danger" onClick={handleLogout}>Cerrar sesión</Button>
//             </>
//           ) : (
//             <Nav.Link as={Link} to="/login">Iniciar Sesión</Nav.Link>
//           )}
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }

// export default Header;

// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Navbar, Nav, Button, Badge } from 'react-bootstrap';

// function Header({ token, user, cart, setToken, setCart }) {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Limpiar token, usuario y carrito
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     localStorage.removeItem('cart');
//     setToken(null);
//     setCart([]);
//     navigate("/login");
//   };

//   return (
//     <Navbar expand="lg">
//       <Navbar.Brand as={Link} to="/">ShopNow</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="ml-auto">
//           <Nav.Link as={Link} to="/productos">Productos</Nav.Link>

//           {token ? (
//             <>
//               <Nav.Link>
//                 {user ? `${user.first_name} ${user.last_name}` : ''} {/* Verificación de que user no sea null */}
//               </Nav.Link>
//               <Nav.Link as={Link} to="/carrito">
//                 Carrito <Badge variant="secondary">{cart.length}</Badge> {/* Mostrar cantidad de productos */}
//               </Nav.Link>
//               <Button variant="outline-danger" onClick={handleLogout}>Cerrar sesión</Button>
//             </>
//           ) : (
//             <Nav.Link as={Link} to="/login">Iniciar Sesión</Nav.Link>
//           )}
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }

// export default Header;

// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Navbar, Nav, Button, Badge } from 'react-bootstrap';

// function Header({ token, user, cart, setToken, setCart }) {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     localStorage.removeItem('cart');  // Eliminar carrito del localStorage
//     setToken(null);
//     setCart([]);
//     navigate("/login");
//   };

//   return (
//     <Navbar bg="light" expand="lg">
//       <Navbar.Brand as={Link} to="/">ShopNow</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="ml-auto">
//           <Nav.Link as={Link} to="/productos">Productos</Nav.Link>

//           {token ? (
//             <>
//               <Nav.Link>{user.first_name} {user.last_name}</Nav.Link>
//               <Nav.Link as={Link} to="/checkout"> {/* Enlazar al checkout */}
//                 Carrito <Badge variant="secondary">{cart.length}</Badge>
//               </Nav.Link>
//               <Button variant="outline-danger" onClick={handleLogout}>Cerrar sesión</Button>
//             </>
//           ) : (
//             <Nav.Link as={Link} to="/login">Iniciar Sesión</Nav.Link>
//           )}
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }

// export default Header;

// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Navbar, Nav, Button, Badge } from 'react-bootstrap';

// function Header({ token, user, cart, setToken, setCart }) {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Limpiar token, usuario y carrito al cerrar sesión
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');  // Eliminar también los datos del usuario
//     localStorage.removeItem('cart');  // Eliminar carrito del localStorage
//     setToken(null);
//     setCart([]);
//     navigate("/login");
//   };

//   return (
//     <Navbar bg="light" expand="lg">
//       <Navbar.Brand as={Link} to="/">ShopNow</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="ml-auto">
//           <Nav.Link as={Link} to="/productos">Productos</Nav.Link>

//           {token ? (
//             <>
//               <Nav.Link>
//                 {user?.first_name} {user?.last_name} {/* Mostrar nombre del usuario si está disponible */}
//               </Nav.Link>
//               <Nav.Link as={Link} to="/carrito">
//                 Carrito <Badge bg="secondary">{cart.length}</Badge> {/* Mostrar cantidad de productos en el carrito */}
//               </Nav.Link>
//               <Button variant="outline-danger" onClick={handleLogout}>Cerrar sesión</Button>
//             </>
//           ) : (
//             <Nav.Link as={Link} to="/login">Iniciar Sesión</Nav.Link>
//           )}
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }

// export default Header;

// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Navbar, Nav, Button, Badge } from 'react-bootstrap';

// function Header({ token, user, cart, setToken, setCart }) {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Limpiar token y carrito
//     localStorage.removeItem('token');
//     setToken(null);
//     setCart([]);
//     navigate("/login");
//   };

//   console.log("Token:", token);
//   console.log("User:", user);

//   return (
//     <Navbar bg="light" expand="lg">
//       <Navbar.Brand as={Link} to="/">ShopNow</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="ml-auto">
//           <Nav.Link as={Link} to="/productos">Productos</Nav.Link>

//           {token ? (
//             <>
//               <Nav.Link>
//                 {user.first_name} {user.last_name} {/* Mostrar nombre del usuario */}
//               </Nav.Link>
//               <Nav.Link as={Link} to="/carrito">
//                 Carrito <Badge variant="secondary">{cart.length}</Badge> {/* Mostrar cantidad de productos */}
//               </Nav.Link>
//               <Button variant="outline-danger" onClick={handleLogout}>Cerrar sesión</Button>
//             </>
//           ) : (
//             <Nav.Link as={Link} to="/login">Iniciar Sesión</Nav.Link>
//           )}
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }

// export default Header;

// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Navbar, Nav, Button, Badge } from 'react-bootstrap';

// function Header({ token, user, cart, setToken, setCart }) {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     setToken(null);
//     setCart([]);
//     navigate('/login');
//   };

//   console.log("Token:", token);
//   console.log("User:", user);


//   return (
//     <Navbar bg="light" expand="lg">
//       <Navbar.Brand as={Link} to="/">ShopNow</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="ml-auto">
//           {token ? (
//             <>
//               <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
//               <Nav.Link>
//                 {user.first_name} {user.last_name}  {/* Mostrar nombre del usuario */}
//               </Nav.Link>
//               <Nav.Link as={Link} to="/carrito">
//                 Carrito <Badge variant="secondary">{cart.length}</Badge> {/* Mostrar cantidad de productos */}
//               </Nav.Link>
//               <Button variant="outline-danger" onClick={handleLogout}>Cerrar sesión</Button>
//             </>
//           ) : (
//             <Nav.Link as={Link} to="/login">Iniciar Sesión</Nav.Link>
//           )}
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }

// export default Header;

// import React from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// function Header() {
//   return (
//     <Navbar bg="dark" variant="dark" expand="lg">
//       <Container>
//         <Navbar.Brand as={Link} to="/">ShopNow</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ml-auto">
//             <Nav.Link as={Link} to="/">Inicio</Nav.Link>
//             <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
//             <Nav.Link as={Link} to="/login">Iniciar Sesión</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Header;

// import React from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// function Header() {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Container>
//         <Navbar.Brand as={Link} to="/">ShopNow</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link as={Link} to="/">Inicio</Nav.Link>
//             <Nav.Link as={Link} to="/login">Iniciar Sesión</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Header;
