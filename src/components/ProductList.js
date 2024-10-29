import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function ProductList({ products, cart, setCart, token }) {
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    if (!token) {
      // Si no hay token, redirigir al inicio de sesión
      window.alert("Por favor, inicia sesión para agregar productos al carrito");
      navigate("/login");
    } else {
      // Si está autenticado, agregar el producto al carrito
      setCart([...cart, product]);
      window.alert(`${product.name} agregado al carrito`);
    }
  };

  const handleViewDetails = (productId) => {
    // Redirigir a la página de detalles del producto al hacer clic en la imagen
    navigate(`/productos/${productId}`);
  };

  return (
    <div className="row">
      {products.map(product => (
        <div key={product.id} className="col-md-4">
          <Card>
            <Card.Img 
              variant="top" 
              src={product.image_url} 
              alt={product.name} 
              onClick={() => handleViewDetails(product.id)} 
              style={{ cursor: 'pointer' }}  // Estilo para indicar que es clicable
              onError={(e) => { e.target.src = "https://via.placeholder.com/150"; }} // Imagen por defecto
            />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Button variant="primary" onClick={() => handleAddToCart(product)}>
                Agregar al carrito
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

// import React from 'react';
// import { Button, Card } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

// function ProductList({ products, cart, setCart, token }) {
//   const navigate = useNavigate();

//   const handleAddToCart = (product) => {
//     if (!token) {
//       // Si no hay token, redirigir al inicio de sesión
//       window.alert("Por favor, inicia sesión para agregar productos al carrito");
//       navigate("/login");
//     } else {
//       // Si está autenticado, agregar el producto al carrito
//       setCart([...cart, product]);
//       window.alert(`${product.name} agregado al carrito`);
//     }
//   };

//   return (
//     <div className="row">
//       {products.map(product => (
//         <div key={product.id} className="col-md-4 mb-4">
//           <Card>
//             {/* Mostrar la imagen del producto */}
//             <Card.Img 
//               variant="top" 
//               src={product.image_url}  // Mostrar la URL de la imagen del producto
//               alt={product.name} 
//             />
//             <Card.Body>
//               <Card.Title>{product.name}</Card.Title>
//               <Card.Text>{product.description}</Card.Text>
//               <Card.Text><strong>Precio: ${product.price}</strong></Card.Text>
//               <Button variant="primary" onClick={() => handleAddToCart(product)}>
//                 Agregar al carrito
//               </Button>
//             </Card.Body>
//           </Card>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ProductList;

// import React from 'react';
// import { Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

// function ProductList({ products, cart, setCart, token }) {
//   const navigate = useNavigate();

//   const handleAddToCart = (product) => {
//     if (!token) {
//       // Si no hay token, redirigir al inicio de sesión
//       window.alert("Por favor, inicia sesión para agregar productos al carrito");
//       navigate("/login");
//     } else {
//       // Si está autenticado, agregar el producto al carrito
//       setCart([...cart, product]);
//       window.alert(`${product.name} agregado al carrito`);
//     }
//   };

//   return (
//     <div className="row">
//       {products.map(product => (
//         <div key={product.id} className="col-md-4">
//           <h3>{product.name}</h3>
//           <p>{product.description}</p>
//           <Button variant="primary" onClick={() => handleAddToCart(product)}>Agregar al carrito</Button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ProductList;

// import React from 'react';
// import { Card, Button, Row, Col } from 'react-bootstrap';

// function ProductList({ products, handleAddToCart }) {
//   return (
//     <div>
//       <h2>Productos disponibles</h2>
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
//                 <Button variant="primary" onClick={() => handleAddToCart(product)}>Agregar al carrito</Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// }

// export default ProductList;


// import React from 'react';

// function ProductList({ products, setProducts, editingProduct, setEditingProduct, handleUpdate, handleDelete }) {
//   return (
//     <ul>
//       {products.map(product => (
//         <li key={product.id}>
//           {editingProduct === product.id ? (
//             <form onSubmit={(e) => {
//               e.preventDefault();
//               handleUpdate(product);
//             }}>
//               <input
//                 type="text"
//                 value={product.name}
//                 onChange={(e) => setProducts(products.map(p => p.id === product.id ? { ...p, name: e.target.value } : p))}
//               />
//               <input
//                 type="number"
//                 value={product.price}
//                 onChange={(e) => setProducts(products.map(p => p.id === product.id ? { ...p, price: e.target.value } : p))}
//               />
//               <textarea
//                 value={product.description}
//                 onChange={(e) => setProducts(products.map(p => p.id === product.id ? { ...p, description: e.target.value } : p))}
//               />
//               <input
//                 type="number"
//                 value={product.stock}
//                 onChange={(e) => setProducts(products.map(p => p.id === product.id ? { ...p, stock: e.target.value } : p))}
//               />
//               <button type="submit">Guardar</button>
//               <button type="button" onClick={() => setEditingProduct(null)}>Cancelar</button>
//             </form>
//           ) : (
//             <>
//               {product.name} - ${product.price} <br />
//               {product.description} <br />
//               Stock: {product.stock} <br />
//               <button onClick={() => setEditingProduct(product.id)}>Editar</button>
//               <button onClick={() => handleDelete(product.id)}>Eliminar</button>
//             </>
//           )}
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default ProductList;
