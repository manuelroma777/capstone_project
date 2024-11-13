import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PromoBanner from './PromoBanner'; // Importa el componente PromoBanner
import "../Styles/Home.css"

function Home({ token, cart, setCart }) {  // Agregar cart y setCart como props
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/products')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Hubo un error al obtener los productos.');
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (product) => {
    if (!token) {
      window.alert('Por favor, inicia sesión para continuar con la compra.');
      navigate('/login');
    } else {
      setCart([...cart, product]);
      window.alert(`${product.name} agregado al carrito.`);
    }
  };

  const handleImageClick = (productId) => {
    navigate(`/productos/${productId}`);
  };

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Container className="mt-5">
      {/* Agrega el componente PromoBanner en la parte superior */}
      <PromoBanner />
      
      <h2 className="text-center mb-4 section-title">SIEMPRE CON LOS MEJORES PRECIOS</h2>
      <Row>
        {products.length > 0 ? (
          products.map(product => (
            <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
              <Card>
                <Card.Img 
                  variant="top" 
                  src={product.image_url}  
                  alt={product.name} 
                  onClick={() => handleImageClick(product.id)}
                  onError={(e) => { e.target.src = "https://via.placeholder.com/150"; }}
                  style={{ cursor: 'pointer' }}
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>
                    {product.description}
                    <br />
                    <strong>Precio: ${product.price}</strong>
                  </Card.Text>
                  <Button variant="primary" onClick={() => handleAddToCart(product)}>
                    Agregar al carrito
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>No hay productos disponibles en este momento.</p>
        )}
      </Row>
    </Container>
  );
}

export default Home;

// import React, { useEffect, useState } from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function Home({ token, cart, setCart }) {  // Agregar cart y setCart como props
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get('http://localhost:5000/products')
//       .then(response => {
//         setProducts(response.data);
//         setLoading(false);
//       })
//       .catch(error => {
//         setError('Hubo un error al obtener los productos.');
//         setLoading(false);
//       });
//   }, []);

//   const handleAddToCart = (product) => {
//     if (!token) {
//       window.alert('Por favor, inicia sesión para continuar con la compra.');
//       navigate('/login');
//     } else {
//       // Agregar el producto al carrito y actualizar el estado
//       setCart([...cart, product]);
//       window.alert(`${product.name} agregado al carrito.`);
//     }
//   };

//   const handleImageClick = (productId) => {
//     navigate(`/productos/${productId}`);
//   };

//   if (loading) {
//     return <div>Cargando productos...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <Container className="mt-5">
//       <h2 className="text-center mb-4">Productos Destacados</h2>
//       <Row>
//         {products.length > 0 ? (
//           products.map(product => (
//             <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
//               <Card>
//                 <Card.Img 
//                   variant="top" 
//                   src={product.image_url}  
//                   alt={product.name} 
//                   onClick={() => handleImageClick(product.id)}
//                   onError={(e) => { e.target.src = "https://via.placeholder.com/150"; }}
//                   style={{ cursor: 'pointer' }}
//                 />
//                 <Card.Body>
//                   <Card.Title>{product.name}</Card.Title>
//                   <Card.Text>
//                     {product.description}
//                     <br />
//                     <strong>Precio: ${product.price}</strong>
//                   </Card.Text>
//                   <Button variant="primary" onClick={() => handleAddToCart(product)}>
//                     Agregar al carrito
//                   </Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))
//         ) : (
//           <p>No hay productos disponibles en este momento.</p>
//         )}
//       </Row>
//     </Container>
//   );
// }

// export default Home;

// import React, { useEffect, useState } from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function Home({ token }) {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get('http://localhost:5000/products')
//       .then(response => {
//         setProducts(response.data);
//         setLoading(false);
//       })
//       .catch(error => {
//         setError('Hubo un error al obtener los productos.');
//         setLoading(false);
//       });
//   }, []);

//   const handleAddToCart = (product) => {
//     if (!token) {
//       window.alert('Por favor, inicia sesión para continuar con la compra.');
//       navigate('/login');
//     } else {
//       window.alert(`${product.name} agregado al carrito.`);
//     }
//   };

//   const handleImageClick = (productId) => {
//     navigate(`/productos/${productId}`);  // Redirigir a la página de detalles del producto
//   };

//   if (loading) {
//     return <div>Cargando productos...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <Container className="mt-5">
//       <h2 className="text-center mb-4">Productos Destacados</h2>
//       <Row>
//         {products.length > 0 ? (
//           products.map(product => (
//             <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
//               <Card>
//                 <Card.Img 
//                   variant="top" 
//                   src={product.image_url}  
//                   alt={product.name} 
//                   onClick={() => handleImageClick(product.id)}  // Redirigir al hacer clic en la imagen
//                   onError={(e) => { e.target.src = "https://via.placeholder.com/150"; }}
//                   style={{ cursor: 'pointer' }}  // Cambiar el cursor para indicar que es clickeable
//                 />
//                 <Card.Body>
//                   <Card.Title>{product.name}</Card.Title>
//                   <Card.Text>
//                     {product.description}
//                     <br />
//                     <strong>Precio: ${product.price}</strong>
//                   </Card.Text>
//                   <Button variant="primary" onClick={() => handleAddToCart(product)}>
//                     Agregar al carrito
//                   </Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))
//         ) : (
//           <p>No hay productos disponibles en este momento.</p>
//         )}
//       </Row>
//     </Container>
//   );
// }

// export default Home;

// import React, { useEffect, useState } from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';  // Importa useNavigate para redirigir

// function Home({ token }) {  // Pasamos token como prop al componente
//   const [products, setProducts] = useState([]);  // Inicializa products como un array vacío
//   const [loading, setLoading] = useState(true);  // Estado de carga
//   const [error, setError] = useState(null);      // Estado para errores
//   const navigate = useNavigate();  // Hook para la navegación

//   useEffect(() => {
//     // Llama a la API para obtener los productos
//     axios.get('http://localhost:5000/products')
//       .then(response => {
//         setProducts(response.data);  // Almacena los productos
//         setLoading(false);           // Detén el estado de carga
//       })
//       .catch(error => {
//         setError('Hubo un error al obtener los productos.');  // Manejo de errores
//         setLoading(false);
//       });
//   }, []);

//   // Función para manejar la acción de agregar al carrito
//   const handleAddToCart = (product) => {
//     if (!token) {
//       // Si el usuario no está autenticado, redirigir a la página de inicio de sesión
//       window.alert('Por favor, inicia sesión para continuar con la compra.');
//       navigate('/login');  // Redirigir a la página de login
//     } else {
//       // Lógica para agregar el producto al carrito si está autenticado
//       setCart(prevCart => [...prevCart, product]);  // Agregar el producto al carrito
//       window.alert(`${product.name} agregado al carrito.`);
//       // Aquí puedes agregar la lógica para manejar el carrito
//     }
//   };

//   // Si está cargando, muestra un mensaje de carga
//   if (loading) {
//     return <div>Cargando productos...</div>;
//   }

//   // Si hubo un error al obtener los productos, muestra el error
//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <Container className="mt-5">
//       <h2 className="text-center mb-4">Productos Destacados</h2>
//       <Row>
//         {products.length > 0 ? (
//           products.map(product => (
//             <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
//               <Card>
//                 <Card.Img 
//                   variant="top" 
//                   src={product.image_url}  // Usar image_url del producto
//                   alt={product.name} 
//                   onError={(e) => { e.target.src = "https://via.placeholder.com/150"; }} // Imagen por defecto si falla el enlace
//                 />
//                 <Card.Body>
//                   <Card.Title>{product.name}</Card.Title>
//                   <Card.Text>
//                     {product.description}
//                     <br />
//                     <strong>Precio: ${product.price}</strong>
//                   </Card.Text>
//                   <Button variant="primary" onClick={() => handleAddToCart(product)}>
//                     Agregar al carrito
//                   </Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))
//         ) : (
//           <p>No hay productos disponibles en este momento.</p>
//         )}
//       </Row>
//     </Container>
//   );
// }

// export default Home;

// import React, { useEffect, useState } from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import axios from 'axios';

// function Home() {
//   const [products, setProducts] = useState([]);  // Inicializa products como un array vacío
//   const [loading, setLoading] = useState(true);  // Estado de carga
//   const [error, setError] = useState(null);      // Estado para errores

//   useEffect(() => {
//     // Llama a la API para obtener los productos
//     axios.get('http://localhost:5000/products')
//       .then(response => {
//         setProducts(response.data);  // Almacena los productos
//         setLoading(false);           // Detén el estado de carga
//       })
//       .catch(error => {
//         setError('Hubo un error al obtener los productos.');  // Manejo de errores
//         setLoading(false);
//       });
//   }, []);

//   // Si está cargando, muestra un mensaje de carga
//   if (loading) {
//     return <div>Cargando productos...</div>;
//   }

//   // Si hubo un error al obtener los productos, muestra el error
//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <Container className="mt-5">
//       <h2 className="text-center mb-4">Productos Destacados</h2>
//       <Row>
//         {products.length > 0 ? (
//           products.map(product => (
//             <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
//               <Card>
//                 <Card.Img 
//                   variant="top" 
//                   src={product.image_url}  // Usar image_url del producto
//                   alt={product.name} 
//                   onError={(e) => { e.target.src = "https://via.placeholder.com/150"; }} // Imagen por defecto si falla el enlace
//                 />
//                 <Card.Body>
//                   <Card.Title>{product.name}</Card.Title>
//                   <Card.Text>
//                     {product.description}
//                     <br />
//                     <strong>Precio: ${product.price}</strong>
//                   </Card.Text>
//                   <Button variant="primary">Agregar al carrito</Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))
//         ) : (
//           <p>No hay productos disponibles en este momento.</p>
//         )}
//       </Row>
//     </Container>
//   );
// }

// export default Home;

// import React, { useEffect, useState } from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import axios from 'axios';

// function Home() {
//   const [products, setProducts] = useState([]);  // Inicializa products como un array vacío
//   const [loading, setLoading] = useState(true);  // Estado de carga
//   const [error, setError] = useState(null);      // Estado para errores

//   useEffect(() => {
//     // Llama a la API para obtener los productos
//     axios.get('http://localhost:5000/products')
//       .then(response => {
//         setProducts(response.data);  // Almacena los productos
//         setLoading(false);           // Detén el estado de carga
//       })
//       .catch(error => {
//         setError('Hubo un error al obtener los productos.');  // Manejo de errores
//         setLoading(false);
//       });
//   }, []);

//   // Si está cargando, muestra un mensaje de carga
//   if (loading) {
//     return <div>Cargando productos...</div>;
//   }

//   // Si hubo un error al obtener los productos, muestra el error
//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <Container className="mt-5">
//       <h2 className="text-center mb-4">Productos Destacados</h2>
//       <Row>
//         {products.length > 0 ? (
//           products.map(product => (
//             <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
//               <Card>
//                 <Card.Img variant="top" src={`https://via.placeholder.com/150?text=${product.name}`} alt={product.name} />
//                 <Card.Body>
//                   <Card.Title>{product.name}</Card.Title>
//                   <Card.Text>
//                     {product.description}
//                     <br />
//                     <strong>Precio: ${product.price}</strong>
//                   </Card.Text>
//                   <Button variant="primary">Agregar al carrito</Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))
//         ) : (
//           <p>No hay productos disponibles en este momento.</p>
//         )}
//       </Row>
//     </Container>
//   );
// }

// export default Home;

// import React from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';

// function Home({ products }) {
//   return (
//     <Container className="mt-5">
//       <h2 className="text-center mb-4">Productos Destacados</h2>
//       <Row>
//         {products.map(product => (
//           <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
//             <Card>
//               <Card.Img variant="top" src={`https://via.placeholder.com/150?text=${product.name}`} alt={product.name} />
//               <Card.Body>
//                 <Card.Title>{product.name}</Card.Title>
//                 <Card.Text>
//                   {product.description}
//                   <br />
//                   <strong>Precio: ${product.price}</strong>
//                 </Card.Text>
//                 <Button variant="primary">Agregar al carrito</Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// }

// export default Home;


// import React from 'react';
// import PromoBanner from './PromoBanner';  // Si ya tienes el banner creado
// import ProductGrid from './ProductGrid';  // Si ya tienes una cuadrícula de productos

// function Home() {
//   return (
//     <div>
//       <PromoBanner />  {/* Banner promocional */}
//       <div className="container">
//         <h2 className="my-4">Productos Destacados</h2>
//         <ProductGrid />  {/* Mostrar algunos productos */}
//       </div>
//     </div>
//   );
// }

// export default Home;
