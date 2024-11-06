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

      <div className="faq-section">
        <h3>¿Cómo puedo rastrear mi pedido?</h3>
        <p>
          Una vez que tu pedido haya sido enviado, recibirás un correo electrónico con un número de seguimiento y 
          un enlace para rastrear tu paquete en tiempo real. Puedes consultar el estado de tu envío en cualquier 
          momento usando ese enlace.
        </p>
      </div>

      <div className="faq-section">
        <h3>¿Ofrecen envío gratuito?</h3>
        <p>
          Sí, todos nuestros productos incluyen envío gratuito a nivel mundial sin importe mínimo de compra. 
          Esto significa que puedes disfrutar de nuestros productos sin preocuparte por los costos adicionales de envío.
        </p>
      </div>

      <div className="faq-section">
        <h3>¿Puedo enviar mi pedido a una dirección diferente?</h3>
        <p>
        Sí, puedes especificar una dirección de envío diferente a la dirección de facturación durante 
        el proceso de compra. Asegúrate de ingresar correctamente todos los detalles de la dirección 
        para evitar problemas de entrega.
        </p>
      </div>

      <div className="faq-section">
        <h3>¿Qué debo hacer si mi pedido llega dañado o defectuoso?</h3>
        <p>
        Si recibes un producto dañado o defectuoso, contáctanos dentro de las 48 horas posteriores 
        a la recepción del paquete a <a href="mailto:soporte@shopnow.com">soporte@shopnow.com</a> o al Teléfono: <a href="tel:+1234567890">+123 456 7890</a>. Te pediremos una foto del producto dañado y, tras la evaluación, 
        te enviaremos un reemplazo o te reembolsaremos el importe, según prefieras.
        </p>
      </div>
    </div>
  );
}

export default PreguntasFrecuentes;
