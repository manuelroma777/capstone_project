import React from 'react';
import '../Styles/Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contáctanos</h2>
      
      <img src="/images/Contacto-2.jpg" alt="Contacto" className="contact-image" />

      <p className="contact-text">

        
        En <strong>ShopNow</strong>, estamos comprometidos en brindarte una atención al cliente excepcional y personalizada.
        Sabemos que una excelente experiencia de compra va más allá del momento de la transacción, y por eso nuestro
        equipo de soporte está disponible para ti <strong>las 24 horas del día, los 7 días de la semana</strong>.
        Ya sea que tengas una consulta, necesites ayuda con un pedido o tengas alguna inquietud, estamos aquí para ayudarte en todo momento.
      </p>

      <h3 className="contact-subtitle">Formas de Contacto</h3>

      <ul className="contact-list">
        <li><strong>Email:</strong> Puedes escribirnos a <a href="mailto:soporte@shopnow.com">soporte@shopnow.com</a> y te responderemos lo antes posible.</li>
        <li><strong>Teléfono:</strong> Llámanos al <a href="tel:+1234567890">+123 456 7890</a>. Nuestro equipo está listo para asistirte en cualquier momento.</li>
        <li><strong>Dirección:</strong> Si prefieres una visita presencial, nos encontramos en Calle Principal, Ciudad.</li>
        <li><strong>Redes Sociales:</strong> Encuéntranos en nuestras plataformas de redes sociales para estar al tanto de las novedades y promociones.</li>
      </ul>

      <h3 className="contact-subtitle">¿Por qué Contactarnos?</h3>

      <p className="contact-text">
        Nos importa mucho tu satisfacción y nos esforzamos por resolver cualquier inconveniente o responder cualquier
        pregunta que tengas. Ya sea que desees obtener más información sobre nuestros productos, necesites asistencia
        con tu pedido o simplemente quieras saber más sobre nuestras políticas, estamos aquí para escucharte y ayudarte.
      </p>

      <h3 className="contact-subtitle">Servicio 24/7</h3>

      <p className="contact-text">
        Nuestro equipo de atención al cliente está siempre disponible, <strong>24 horas al día, 7 días a la semana</strong>, para asegurarnos de que tengas una experiencia de compra sin contratiempos. Sabemos que la conveniencia es clave, y estamos aquí para ti cuando más lo necesites.
      </p>

      <p className="contact-footer">
        Gracias por confiar en <strong>ShopNow</strong>. Estamos aquí para servirte y hacer que tu experiencia sea lo mejor posible.
      </p>
    </div>
  );
}

export default Contact;

// import React from 'react';
// import { Container } from 'react-bootstrap';

// function Contact() {
//   return (
//     <Container className="mt-5">
//       <h2>Contacto</h2>
//       <img 
//         src="/images/Contacto.jpg" 
//         alt="Contacto" 
//         style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', marginBottom: '20px' }} 
//       />
//       <p>
//         Si tienes alguna pregunta o necesitas ayuda, no dudes en contactarnos. Nuestro equipo de atención al cliente está disponible 24 x 7 para ayudarte en todo lo que necesites.
//       </p>
//       <ul>
//         <li>Email: soporte@shopnow.com</li>
//         <li>Teléfono: +123 456 7890</li>
//         <li>Dirección: Calle Principal, Ciudad</li>
//       </ul>
//     </Container>
//   );
// }

// export default Contact;

// import React from 'react';

// function Contact() {
//   return (
//     <div className="container mt-5">
//       <h2>Contacto</h2>
//       <p>Email: contacto@shopnow.com</p>
//       <p>Teléfono: +123 456 7890</p>
//       <p>Dirección: Calle Principal, Ciudad</p>
//     </div>
//   );
// }

// export default Contact;
