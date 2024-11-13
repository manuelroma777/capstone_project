import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';  // Importar useNavigate
import axios from 'axios';
import { Container, Card, Button } from 'react-bootstrap';

function ProductDetail({ token, cart, setCart }) {  // Recibir token, cart y setCart como props
  const { id } = useParams();  // Obtener el ID del producto desde la URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();  // Para la redirección

  useEffect(() => {
    // Obtener el producto específico por ID
    axios.get(`http://localhost:5000/products/${id}`)
      .then(response => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Hubo un error al obtener los detalles del producto.');
        setLoading(false);
      });
  }, [id]);

  // Función para manejar la acción de agregar al carrito
  const handleAddToCart = () => {
    if (!token) {
      // Si el usuario no ha iniciado sesión, redirigir a la página de login
      window.alert('Por favor, inicia sesión para agregar productos al carrito.');
      navigate('/login');  // Redirigir a la página de login
    } else {
      // Si el usuario ha iniciado sesión, agregar el producto al carrito
      setCart([...cart, product]);
      window.alert(`${product.name} agregado al carrito.`);
    }
  };

  // Si está cargando, muestra un mensaje de carga
  if (loading) {
    return <div>Cargando detalles del producto...</div>;
  }

  // Si hubo un error al obtener los detalles del producto, muestra el error
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Container className="mt-5">
      {product ? (
        <Card>
          <Card.Img 
            variant="top" 
            src={product.image_url} 
            alt={product.name} 
            onError={(e) => { e.target.src = "https://via.placeholder.com/150"; }} 
          />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <p><strong>Precio: ${product.price}</strong></p>
            <p><strong>Stock disponible: {product.stock}</strong></p>
            <Button variant="primary" onClick={handleAddToCart}>
              Agregar al carrito
            </Button>
          </Card.Body>
        </Card>
      ) : (
        <p>Producto no encontrado.</p>
      )}
    </Container>
  );
}

export default ProductDetail;

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { Container, Card, Button } from 'react-bootstrap';

// function ProductDetail() {
//   const { id } = useParams();  // Obtener el ID del producto desde la URL
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Obtener el producto específico por ID
//     axios.get(`http://localhost:5000/products/${id}`)
//       .then(response => {
//         setProduct(response.data);
//         setLoading(false);
//       })
//       .catch(error => {
//         setError('Hubo un error al obtener los detalles del producto.');
//         setLoading(false);
//       });
//   }, [id]);

//   // Si está cargando, muestra un mensaje de carga
//   if (loading) {
//     return <div>Cargando detalles del producto...</div>;
//   }

//   // Si hubo un error al obtener los detalles del producto, muestra el error
//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <Container className="mt-5">
//       {product ? (
//         <Card>
//           <Card.Img 
//             variant="top" 
//             src={product.image_url} 
//             alt={product.name} 
//             onError={(e) => { e.target.src = "https://via.placeholder.com/150"; }} 
//           />
//           <Card.Body>
//             <Card.Title>{product.name}</Card.Title>
//             <Card.Text>{product.description}</Card.Text>
//             <p><strong>Precio: ${product.price}</strong></p>
//             <p><strong>Stock disponible: {product.stock}</strong></p>
//             <Button variant="primary">Agregar al carrito</Button>
//           </Card.Body>
//         </Card>
//       ) : (
//         <p>Producto no encontrado.</p>
//       )}
//     </Container>
//   );
// }

// export default ProductDetail;
