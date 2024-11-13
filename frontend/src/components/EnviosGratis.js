import React from 'react';
import '../Styles/Envios.css';

function EnviosGratis() {
  return (
    <div className="envios-container">
      <h2 className="envios-title">Envíos Gratis a Todo el Mundo</h2>
      <img src="/images/Envio-Gratis.jpg" alt="Envíos Gratis" className="envios-image" />

      <p className="envios-text">
        En <strong>ShopNow</strong>, nos enorgullece ofrecer <strong>envíos gratuitos a nivel mundial</strong> en
        todos nuestros productos. No importa dónde te encuentres, queremos que tengas una experiencia de compra sin
        preocuparte por costos adicionales.
      </p>

      <div className="envios-details">
        <h3>Detalles de los Envíos</h3>
        <ul>
          <li>Tu orden será procesada en un máximo de <strong>24 horas</strong>.</li>
          <li>Recibirás un número de seguimiento para que puedas monitorear tu pedido.</li>
          <li>Tiempo estimado de entrega: entre 5 y 15 días hábiles, dependiendo de tu ubicación.</li>
        </ul>
      </div>

      <div className="envios-section">
        <h3>¿Por qué ofrecemos envíos gratuitos?</h3>
        <p>
          Queremos brindarte la mejor experiencia de compra posible. La comodidad y satisfacción de nuestros clientes
          son nuestras prioridades, y sabemos que los envíos gratuitos ayudan a que esta experiencia sea aún mejor.
        </p>
      </div>
    </div>
  );
}

export default EnviosGratis;
