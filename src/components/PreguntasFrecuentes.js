import React from 'react';
import '../Styles/Preguntas.css';

function PreguntasFrecuentes() {
  return (
    <div className="faq-container">
      <h2 className="faq-title">Preguntas Frecuentes</h2>
      <img src="/images/Preguntas.jpg" alt="Preguntas Frecuentes" className="faq-image" />

      <div className="faq-section">
        <h3>¿Cuáles son los métodos de pago?</h3>
        <p>Aceptamos varias formas de pago para tu comodidad, entre ellas:</p>
        <ul>
          <li>Tarjetas de crédito y débito (Visa, MasterCard, etc.)</li>
          <li>PayPal</li>
          <li>Transferencia bancaria</li>
        </ul>
      </div>

      <div className="faq-section">
        <h3>¿Cuál es la política de devolución?</h3>
        <p>
          Si no estás satisfecho con tu compra, puedes devolver el producto dentro de las dos semanas siguientes
          a la fecha de compra. El producto debe estar en su estado original y con el empaque completo.
        </p>
      </div>

      <div className="faq-section">
        <h3>¿Puedo realizar cambios en mi pedido después de la compra?</h3>
        <p>
          Sí, puedes modificar o cancelar tu pedido dentro de las primeras 24 horas después de haberlo realizado.
          Contáctanos lo antes posible para ayudarte con el cambio.
        </p>
      </div>
    </div>
  );
}

export default PreguntasFrecuentes;
