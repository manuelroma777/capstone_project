import React from 'react';
import '../Styles/About.css';

function About() {
  return (
    <div className="about-container">
      <h2 className="about-title">Acerca de Nosotros</h2>
      
      <img src="/images/Acerca de Nosotros.jpg" alt="Acerca de Nosotros" className="about-image" />

      <p className="about-text">
        En <strong>ShopNow</strong>, creemos en el poder de la tecnología para revolucionar la experiencia de compra.
        Somos un proyecto nuevo e innovador que busca ofrecer una amplia selección de productos de alta calidad,
        cuidadosamente seleccionados para satisfacer las necesidades de nuestros clientes. Desde artículos de uso diario
        hasta productos únicos, nuestra misión es proporcionarte lo mejor en un solo lugar.
      </p>

      <p className="about-text">
        Nos especializamos en ofrecer no solo los mejores productos, sino también una experiencia de compra rápida y sin
        complicaciones. Todos nuestros artículos incluyen <strong>envíos gratuitos</strong> para que puedas comprar sin
        preocupaciones y sin costos adicionales. Entendemos que tu tiempo y comodidad son importantes, por eso
        trabajamos para garantizar que tu experiencia sea satisfactoria desde el primer clic hasta que recibes
        el producto en tu puerta.
      </p>

      <h3 className="about-subtitle">¿Por qué elegirnos?</h3>

      <ul className="about-list">
        <li><strong>Innovación constante:</strong> Nos mantenemos actualizados con las últimas tendencias para ofrecerte siempre los productos más modernos y relevantes.</li>
        <li><strong>Envío gratuito:</strong> Disfruta de envíos sin costo en cada compra, sin importar el tamaño o precio de tu pedido.</li>
        <li><strong>Experiencia personalizada:</strong> Nos enfocamos en crear una experiencia única para cada cliente, atendiendo tus necesidades específicas y tus preferencias.</li>
        <li><strong>Compromiso y transparencia:</strong> Valoramos la confianza de nuestros clientes y nos esforzamos por mantener una comunicación clara y transparente en cada transacción.</li>
      </ul>

      <p className="about-text">
        En <strong>ShopNow</strong>, estamos construyendo un lugar donde la comodidad y la innovación se unen para
        ofrecerte una experiencia de compra inigualable. Gracias por confiar en nosotros, estamos aquí para servirte
        y ayudarte con productos que realmente mejoren tu calidad de vida.
      </p>
    </div>
  );
}

export default About;

// import React from 'react';
// import acercaDeNosotrosImage from '../public/images/Acerca de Nosotros.jpg';



// function About() {
//   return (
//     <div className="about-container">
//       <h2 className="about-title">Acerca de Nosotros</h2>
//       <img src={acercaDeNosotrosImage} alt="Acerca de Nosotros" className="about-image" />

//       <p className="about-text">
//         En <strong>ShopNow</strong>, creemos en el poder de la tecnología para revolucionar la experiencia de compra.
//         Somos un proyecto nuevo e innovador que busca ofrecer una amplia selección de productos de alta calidad,
//         cuidadosamente seleccionados para satisfacer las necesidades de nuestros clientes. Desde artículos de uso diario
//         hasta productos únicos, nuestra misión es proporcionarte lo mejor en un solo lugar.
//       </p>

//       <p className="about-text">
//         Nos especializamos en ofrecer no solo los mejores productos, sino también una experiencia de compra rápida y sin
//         fricciones. Todos nuestros artículos incluyen <strong>envíos gratuitos</strong> para que puedas comprar sin
//         preocupaciones y sin costos adicionales. Entendemos que tu tiempo y comodidad son importantes, por eso
//         trabajamos para garantizar que tu experiencia sea ágil y satisfactoria desde el primer clic hasta que recibes
//         el producto en tu puerta.
//       </p>

//       <h3 className="about-subtitle">¿Por qué elegirnos?</h3>

//       <ul className="about-list">
//         <li><strong>Innovación constante:</strong> Nos mantenemos actualizados con las últimas tendencias para ofrecerte siempre los productos más modernos y relevantes.</li>
//         <li><strong>Envío gratuito:</strong> Disfruta de envíos sin costo en cada compra, sin importar el tamaño o precio de tu pedido.</li>
//         <li><strong>Experiencia personalizada:</strong> Nos enfocamos en crear una experiencia única para cada cliente, atendiendo tus necesidades específicas y tus preferencias.</li>
//         <li><strong>Compromiso y transparencia:</strong> Valoramos la confianza de nuestros clientes y nos esforzamos por mantener una comunicación clara y transparente en cada transacción.</li>
//       </ul>

//       <p className="about-text">
//         En <strong>ShopNow</strong>, estamos construyendo un lugar donde la comodidad y la innovación se unen para
//         ofrecerte una experiencia de compra inigualable. Gracias por ser parte de este viaje; estamos aquí para servirte
//         y ayudarte a descubrir productos que realmente mejoren tu vida.
//       </p>
//     </div>
//   );
// }

// export default About;

// import React from 'react';
// import { Container } from 'react-bootstrap';

// function About() {
//   return (
//     <Container className="mt-5">
//       <h2>Acerca de Nosotros</h2>
//       <img 
//         src="/images/Acerca de Nosotros.jpg" 
//         alt="Acerca de Nosotros" 
//         style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', marginBottom: '20px' }} 
//       />
//       <p>      
// En ShopNow, creemos en el poder de la tecnología para revolucionar la experiencia de compra. Somos un proyecto nuevo e innovador que busca ofrecer una amplia selección de productos de alta calidad, cuidadosamente seleccionados para satisfacer las necesidades de nuestros clientes. Desde artículos de uso diario hasta productos únicos, nuestra misión es proporcionarte lo mejor en un solo lugar.

// Nos especializamos en ofrecer no solo los mejores productos, sino también una experiencia de compra rápida y sin fricciones. Todos nuestros artículos incluyen envíos gratuitos para que puedas comprar sin preocupaciones y sin costos adicionales. Entendemos que tu tiempo y comodidad son importantes, por eso trabajamos para garantizar que tu experiencia sea ágil y satisfactoria desde el primer clic hasta que recibes el producto en tu puerta.

// Nuestro compromiso con la atención al cliente es una de nuestras mayores prioridades. Contamos con un equipo dedicado que está disponible para responder tus preguntas, ayudarte en cualquier parte del proceso de compra y asegurarse de que cada detalle de tu experiencia esté cubierto. Queremos que te sientas acompañado en cada paso de tu compra en ShopNow.

// ¿Por qué elegirnos?

// Innovación constante: Nos mantenemos actualizados con las últimas tendencias para ofrecerte siempre los productos más modernos y relevantes.
// Envío gratuito: Disfruta de envíos sin costo en cada compra, sin importar el tamaño o precio de tu pedido.
// Experiencia personalizada: Nos enfocamos en crear una experiencia única para cada cliente, atendiendo tus necesidades específicas y tus preferencias.
// Compromiso y transparencia: Valoramos la confianza de nuestros clientes y nos esforzamos por mantener una comunicación clara y transparente en cada transacción.
// En ShopNow, estamos construyendo un lugar donde la comodidad y la innovación se unen para ofrecerte una experiencia de compra inigualable. Gracias por ser parte de este viaje; estamos aquí para servirte y ayudarte a descubrir productos que realmente mejoren tu vida.
//       </p>
//     </Container>
//   );
// }

// export default About;

// import React from 'react';

// function About() {
//   return (
//     <div className="container mt-5">
//       <h2>Acerca de Nosotros</h2>
//       <p>Bienvenido a ShopNow, donde nos especializamos en ofrecer productos de alta calidad con un excelente servicio al cliente. Nuestro equipo está dedicado a brindarte una experiencia de compra única.</p>
//     </div>
//   );
// }

// export default About;
