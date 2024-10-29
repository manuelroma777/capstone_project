import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          {/* Contacto */}
          <Col md={3}>
            <h5>Contacto</h5>
            <ul className="list-unstyled">
              <li>Email: soporte@shopnow.com</li>
              <li>Teléfono: +123 456 7890</li>
              <li>Dirección: Calle Principal, Ciudad</li>
            </ul>
          </Col>

          {/* Preguntas Frecuentes */}
          <Col md={3}>
            <h5>Preguntas Frecuentes</h5>
            <ul className="list-unstyled">
              <li>¿Cómo hacer una compra?</li>
              <li>¿Qué métodos de pago aceptan?</li>
              <li>Política de devolución</li>
            </ul>
          </Col>

          {/* Acerca de Nosotros */}
          <Col md={3}>
            <h5>Acerca de Nosotros</h5>
            <p>
              En ShopNow, nos especializamos en ofrecer los mejores productos con
              envíos gratuitos y atención al cliente dedicada.
            </p>
          </Col>

          {/* Envíos Gratis */}
          <Col md={3}>
            <h5>Envíos Gratis</h5>
            <p>
              Todos nuestros productos incluyen envíos gratuitos, sin mínimo de
              compra.
            </p>
          </Col>
        </Row>
        <Row className="text-center mt-3">
          <Col>
            <p>&copy; {new Date().getFullYear()} ShopNow. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

// import React from 'react';
// import { Container } from 'react-bootstrap';

// function Footer() {
//   return (
//     <footer className="bg-dark text-white mt-5 p-4 text-center">
//       <Container>
//         &copy; {new Date().getFullYear()} ShopNow. Todos los derechos reservados.
//       </Container>
//     </footer>
//   );
// }

// export default Footer;

// const Footer = () => {
//     return <div>Footer placeholder</div>;
//   };
  
//   export default Footer;
  