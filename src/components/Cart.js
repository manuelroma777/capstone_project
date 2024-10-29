import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, ListGroup } from 'react-bootstrap';

function Cart({ cart, setCart }) {
  const navigate = useNavigate();  // Hook para la navegación

  const handleCheckout = () => {
    navigate('/checkout');  // Redirigir a la página de checkout
  };

  return (
    <div>
      <h2>Tu Carrito</h2>
      <ListGroup>
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <ListGroup.Item key={index}>
              {item.name} - ${item.price}
            </ListGroup.Item>
          ))
        ) : (
          <p>Tu carrito está vacío.</p>
        )}
      </ListGroup>
      {cart.length > 0 && (
        <Button variant="primary" onClick={handleCheckout}>Proceder al Checkout</Button>
      )}
    </div>
  );
}

export default Cart;

// import React from 'react';
// import { Container, Row, Col, Button, Card } from 'react-bootstrap';

// function Cart({ cart, setCart }) {
//   const handleRemoveItem = (index) => {
//     const newCart = [...cart];
//     newCart.splice(index, 1);  // Elimina el item del carrito según el índice
//     setCart(newCart);
//   };

//   return (
//     <Container className="mt-5">
//       <h2>Tu Carrito</h2>
//       {cart.length === 0 ? (
//         <p>Tu carrito está vacío.</p>
//       ) : (
//         <Row>
//           {cart.map((item, index) => (
//             <Col key={index} sm={12} md={6} lg={4} className="mb-4">
//               <Card>
//                 <Card.Img variant="top" src={item.image_url} alt={item.name} />
//                 <Card.Body>
//                   <Card.Title>{item.name}</Card.Title>
//                   <Card.Text>Precio: ${item.price}</Card.Text>
//                   <Button variant="danger" onClick={() => handleRemoveItem(index)}>
//                     Eliminar del carrito
//                   </Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       )}
//       {cart.length > 0 && <Button variant="primary">Proceder al Checkout</Button>}
//     </Container>
//   );
// }

// export default Cart;
