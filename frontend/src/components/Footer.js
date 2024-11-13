import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import '../Styles/Footer.css'; // Importamos los estilos del footer

function Footer() {
  return (
    <footer className="footer bg-dark text-white py-4">
      <Container>
        <Row>
          {/* Contacto */}
          <Col md={3}>
            <h5><Link to="/contact" className="footer-link">Contacto</Link></h5>
            <ul className="list-unstyled">
              <li>Email: <a href="mailto:soporte@shopnow.com">soporte@shopnow.com</a></li>
              <li>Teléfono: <a href="tel:+1234567890">+123 456 7890</a></li>
              <li>Dirección: Calle Principal, Ciudad, Codigo Postal, País</li>
            </ul>
          </Col>

          {/* Preguntas Frecuentes */}
          <Col md={3}>
            <h5><Link to="/preguntas-frecuentes" className="footer-link">Preguntas Frecuentes</Link></h5>
            <ul className="list-unstyled">
              <li><Link to="/preguntas-frecuentes" className="footer-link">¿Cuáles son los métodos de pago?</Link></li>
              <li><Link to="/preguntas-frecuentes" className="footer-link">¿Cuál es la política de devolución?</Link></li>
              <li><Link to="/preguntas-frecuentes" className="footer-link">¿Puedo realizar cambios en mi pedido después de la compra?</Link></li>
            </ul>
          </Col>

          {/* Acerca de Nosotros */}
          <Col md={3}>
            <h5><Link to="/about" className="footer-link">Acerca de Nosotros</Link></h5>
            <p>
              En ShopNow, nos especializamos en ofrecer los mejores productos con
              envíos gratuitos y atención al cliente.
            </p>
          </Col>

          {/* Envíos Gratis */}
          <Col md={3}>
            <h5><Link to="/envios-gratis" className="footer-link">Envíos Gratis</Link></h5>
            <p>
              Todos nuestros productos incluyen envíos gratuitos, sin mínimo de
              compra.
            </p>
          </Col>
        </Row>
        <Row className="text-center mt-3">
          <Col>
            {/* Sección de logos de pago */}
            <div className="payment-logos">
              <img src="/images/PayPal_logo.png" alt="PayPal" className="payment-logo" />
              <img src="/images/Credit_Card_Logos.png" alt="Tarjetas de Crédito" className="payment-logo" />
            </div>
            <p>&copy; {new Date().getFullYear()} ShopNow. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import '../Styles/Footer.css'; // Importamos los estilos del footer

// function Footer() {
//   return (
//     <footer className="footer bg-dark text-white py-4">
//       <Container>
//         <Row>
//           {/* Contacto */}
//           <Col md={3}>
//             <h5>Contacto</h5>
//             <ul className="list-unstyled">
//               <li>Email: soporte@shopnow.com</li>
//               <li>Teléfono: +123 456 7890</li>
//               <li>Dirección: Calle Principal, Ciudad, Codigo Postal, Pais</li>
//             </ul>
//           </Col>

//           {/* Preguntas Frecuentes */}
//           <Col md={3}>
//             <h5>Preguntas Frecuentes</h5>
//             <ul className="list-unstyled">
//               <li>¿Cómo hacer una compra?</li>
//               <li>¿Qué métodos de pago aceptan?</li>
//               <li>Política de devolución</li>
//             </ul>
//           </Col>

//           {/* Acerca de Nosotros */}
//           <Col md={3}>
//             <h5>Acerca de Nosotros</h5>
//             <p>
//               En ShopNow, nos especializamos en ofrecer los mejores productos con
//               envíos gratuitos y atención al cliente dedicada.
//             </p>
//           </Col>

//           {/* Envíos Gratis */}
//           <Col md={3}>
//             <h5>Envíos Gratis</h5>
//             <p>
//               Todos nuestros productos incluyen envíos gratuitos, sin mínimo de
//               compra.
//             </p>
//           </Col>
//         </Row>
//         <Row className="text-center mt-3">
//           <Col>
//             {/* Sección de logos de pago */}
//             <div className="payment-logos">
//               <img src="/images/PayPal_logo.png" alt="PayPal" className="payment-logo" />
//               <img src="/images/Credit_Card_Logos.png" alt="Tarjetas de Crédito" className="payment-logo" />
//             </div>
//             <p>&copy; {new Date().getFullYear()} ShopNow. Todos los derechos reservados.</p>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// }

// export default Footer;

// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';

// function Footer() {
//   return (
//     <footer className="bg-dark text-white py-4">
//       <Container>
//         <Row>
//           {/* Contacto */}
//           <Col md={3}>
//             <h5>Contacto</h5>
//             <ul className="list-unstyled">
//               <li>Email: soporte@shopnow.com</li>
//               <li>Teléfono: +123 456 7890</li>
//               <li>Dirección: Calle Principal, Ciudad</li>
//             </ul>
//           </Col>

//           {/* Preguntas Frecuentes */}
//           <Col md={3}>
//             <h5>Preguntas Frecuentes</h5>
//             <ul className="list-unstyled">
//               <li>¿Cómo hacer una compra?</li>
//               <li>¿Qué métodos de pago aceptan?</li>
//               <li>Política de devolución</li>
//             </ul>
//           </Col>

//           {/* Acerca de Nosotros */}
//           <Col md={3}>
//             <h5>Acerca de Nosotros</h5>
//             <p>
//               En ShopNow, nos especializamos en ofrecer los mejores productos con
//               envíos gratuitos y atención al cliente dedicada.
//             </p>
//           </Col>

//           {/* Envíos Gratis */}
//           <Col md={3}>
//             <h5>Envíos Gratis</h5>
//             <p>
//               Todos nuestros productos incluyen envíos gratuitos, sin mínimo de
//               compra.
//             </p>
//           </Col>
//         </Row>
//         <Row className="text-center mt-3">
//           <Col>
//             <p>&copy; {new Date().getFullYear()} ShopNow. Todos los derechos reservados.</p>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// }

// export default Footer;

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
  