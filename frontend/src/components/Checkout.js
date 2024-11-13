import React, { useState, useEffect, useCallback } from 'react';

function Checkout({ cart, setCart }) {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);

  const calculateTotal = useCallback(() => {
    return cart.reduce((total, product) => {
      const price = parseFloat(product.price); 
      return !isNaN(price) ? total + price : total;
    }, 0).toFixed(2);
  }, [cart]);

  useEffect(() => {
    if (paymentMethod === 'paypal' && window.paypal) {
      // Renderiza el botón de PayPal
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: calculateTotal(), // El total de la compra
              },
            }],
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then((details) => {
            alert(`Pago completado por ${details.payer.name.given_name}`);
            // Vaciar el carrito después de la compra
            setCart([]);
            setIsConfirmed(true);
          });
        },
        onError: (err) => {
          console.error(err);
          alert('Hubo un problema con el pago. Intenta de nuevo.');
        }
      }).render('#paypal-button-container');
    }
  }, [paymentMethod, calculateTotal, setCart]); // Agregar calculateTotal y setCart a las dependencias

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleConfirmPurchase = () => {
    if (paymentMethod === 'credit-card') {
      alert('Compra realizada con éxito con Tarjeta de Crédito.');
      setCart([]);
      setIsConfirmed(true);
    } else if (paymentMethod === 'bank-transfer') {
      alert('Por favor, sigue las instrucciones para completar tu transferencia bancaria.');
      setCart([]);
      setIsConfirmed(true);
    } else if (!paymentMethod) {
      alert('Por favor selecciona un método de pago');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Checkout</h2>

      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <h3>Productos en el carrito:</h3>
          <ul>
            {cart.map((product, index) => (
              <li key={index}>
                {product.name} - ${parseFloat(product.price).toFixed(2)}
              </li>
            ))}
          </ul>

          <h4>Total: ${calculateTotal()}</h4>

          <div className="mt-3">
            <h5>Selecciona el método de pago:</h5>
            <select value={paymentMethod} onChange={handlePaymentChange}>
              <option value="">Selecciona un método de pago</option>
              <option value="credit-card">Tarjeta de crédito</option>
              <option value="paypal">PayPal</option>
              <option value="bank-transfer">Transferencia bancaria</option>
            </select>
          </div>

          {paymentMethod === 'paypal' && (
            <div id="paypal-button-container" className="mt-3"></div>
          )}

          {paymentMethod !== 'paypal' && (
            <button 
              className="btn btn-primary mt-3" 
              onClick={handleConfirmPurchase}
              disabled={isConfirmed}
            >
              Confirmar compra
            </button>
          )}

          {isConfirmed && <p className="mt-3">Compra confirmada. ¡Gracias por tu compra!</p>}
        </>
      )}
    </div>
  );
}

export default Checkout;

// import React, { useState, useEffect } from 'react';

// function Checkout({ cart, setCart }) {
//   const [paymentMethod, setPaymentMethod] = useState('');
//   const [isConfirmed, setIsConfirmed] = useState(false);

//   const calculateTotal = () => {
//     return cart.reduce((total, product) => {
//       const price = parseFloat(product.price); 
//       return !isNaN(price) ? total + price : total;
//     }, 0).toFixed(2);
//   };

//   useEffect(() => {
//     if (paymentMethod === 'paypal' && window.paypal) {
//       // Renderiza el botón de PayPal
//       window.paypal.Buttons({
//         createOrder: (data, actions) => {
//           return actions.order.create({
//             purchase_units: [{
//               amount: {
//                 value: calculateTotal(), // El total de la compra
//               },
//             }],
//           });
//         },
//         onApprove: (data, actions) => {
//           return actions.order.capture().then((details) => {
//             alert(`Pago completado por ${details.payer.name.given_name}`);
//             // Vaciar el carrito después de la compra
//             setCart([]);
//             setIsConfirmed(true);
//           });
//         },
//         onError: (err) => {
//           console.error(err);
//           alert('Hubo un problema con el pago. Intenta de nuevo.');
//         }
//       }).render('#paypal-button-container');
//     }
//   }, [paymentMethod]);

//   const handlePaymentChange = (e) => {
//     setPaymentMethod(e.target.value);
//   };

//   const handleConfirmPurchase = () => {
//     if (paymentMethod === 'credit-card') {
//       alert('Compra realizada con éxito con Tarjeta de Crédito.');
//       setCart([]);
//       setIsConfirmed(true);
//     } else if (paymentMethod === 'bank-transfer') {
//       alert('Por favor, sigue las instrucciones para completar tu transferencia bancaria.');
//       setCart([]);
//       setIsConfirmed(true);
//     } else if (!paymentMethod) {
//       alert('Por favor selecciona un método de pago');
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Checkout</h2>

//       {cart.length === 0 ? (
//         <p>No hay productos en el carrito.</p>
//       ) : (
//         <>
//           <h3>Productos en el carrito:</h3>
//           <ul>
//             {cart.map((product, index) => (
//               <li key={index}>
//                 {product.name} - ${parseFloat(product.price).toFixed(2)}
//               </li>
//             ))}
//           </ul>

//           <h4>Total: ${calculateTotal()}</h4>

//           <div className="mt-3">
//             <h5>Selecciona el método de pago:</h5>
//             <select value={paymentMethod} onChange={handlePaymentChange}>
//               <option value="">Selecciona un método de pago</option>
//               <option value="credit-card">Tarjeta de crédito</option>
//               <option value="paypal">PayPal</option>
//               <option value="bank-transfer">Transferencia bancaria</option>
//             </select>
//           </div>

//           {paymentMethod === 'paypal' && (
//             <div id="paypal-button-container" className="mt-3"></div>
//           )}

//           {paymentMethod !== 'paypal' && (
//             <button 
//               className="btn btn-primary mt-3" 
//               onClick={handleConfirmPurchase}
//               disabled={isConfirmed}
//             >
//               Confirmar compra
//             </button>
//           )}

//           {isConfirmed && <p className="mt-3">Compra confirmada. ¡Gracias por tu compra!</p>}
//         </>
//       )}
//     </div>
//   );
// }

// export default Checkout;

// import React, { useState, useEffect } from 'react';

// function Checkout({ cart, setCart }) {
//   const [paymentMethod, setPaymentMethod] = useState('');
//   const [isConfirmed, setIsConfirmed] = useState(false);

//   const calculateTotal = () => {
//     return cart.reduce((total, product) => {
//       const price = parseFloat(product.price); 
//       return !isNaN(price) ? total + price : total;
//     }, 0).toFixed(2);
//   };

//   useEffect(() => {
//     if (paymentMethod === 'paypal' && window.paypal) {
//       // Renderiza el botón de PayPal
//       window.paypal.Buttons({
//         createOrder: (data, actions) => {
//           return actions.order.create({
//             purchase_units: [{
//               amount: {
//                 value: calculateTotal(), // El total de la compra
//               },
//             }],
//           });
//         },
//         onApprove: (data, actions) => {
//           return actions.order.capture().then((details) => {
//             alert(`Pago completado por ${details.payer.name.given_name}`);
//             // Vaciar el carrito después de la compra
//             setCart([]);
//             setIsConfirmed(true);
//           });
//         },
//         onError: (err) => {
//           console.error(err);
//           alert('Hubo un problema con el pago. Intenta de nuevo.');
//         }
//       }).render('#paypal-button-container');
//     }
//   }, [paymentMethod]);

//   const handlePaymentChange = (e) => {
//     setPaymentMethod(e.target.value);
//   };

//   const handleConfirmPurchase = () => {
//     if (paymentMethod === 'credit-card') {
//       alert('Compra realizada con éxito con Tarjeta de Crédito.');
//       setCart([]);
//       setIsConfirmed(true);
//     } else if (!paymentMethod) {
//       alert('Por favor selecciona un método de pago');
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Checkout</h2>

//       {cart.length === 0 ? (
//         <p>No hay productos en el carrito.</p>
//       ) : (
//         <>
//           <h3>Productos en el carrito:</h3>
//           <ul>
//             {cart.map((product, index) => (
//               <li key={index}>
//                 {product.name} - ${parseFloat(product.price).toFixed(2)}
//               </li>
//             ))}
//           </ul>

//           <h4>Total: ${calculateTotal()}</h4>

//           <div className="mt-3">
//             <h5>Selecciona el método de pago:</h5>
//             <select value={paymentMethod} onChange={handlePaymentChange}>
//               <option value="">Selecciona un método de pago</option>
//               <option value="credit-card">Tarjeta de crédito</option>
//               <option value="paypal">PayPal</option>
//               <option value="bank-transfer">Transferencia bancaria</option>
//             </select>
//           </div>

//           {paymentMethod === 'paypal' && (
//             <div id="paypal-button-container" className="mt-3"></div>
//           )}

//           {paymentMethod !== 'paypal' && (
//             <button 
//               className="btn btn-primary mt-3" 
//               onClick={handleConfirmPurchase}
//               disabled={isConfirmed}
//             >
//               Confirmar compra
//             </button>
//           )}

//           {isConfirmed && <p className="mt-3">Compra confirmada. ¡Gracias por tu compra!</p>}
//         </>
//       )}
//     </div>
//   );
// }

// export default Checkout;

// import React, { useState } from 'react';

// function Checkout({ cart, setCart }) {
//   const [paymentMethod, setPaymentMethod] = useState('');
//   const [isConfirmed, setIsConfirmed] = useState(false);

//   const handlePaymentChange = (e) => {
//     setPaymentMethod(e.target.value);
//   };

//   const handleConfirmPurchase = () => {
//     if (!paymentMethod) {
//       alert('Por favor selecciona un método de pago');
//       return;
//     }

//     // Aquí puedes añadir la lógica para procesar el pago (API de pagos o algo simulado)
//     alert('Compra realizada con éxito. Gracias por tu compra.');

//     // Vaciar el carrito después de la compra
//     setCart([]);
//     setIsConfirmed(true);
//   };

//   const calculateTotal = () => {
//     // Verifica que todos los precios sean numéricos y realiza la suma
//     return cart.reduce((total, product) => {
//       const price = parseFloat(product.price); // Asegurarse de que el precio sea numérico
//       return !isNaN(price) ? total + price : total;
//     }, 0).toFixed(2); // Asegura que el total tenga 2 decimales
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Checkout</h2>
      
//       {cart.length === 0 ? (
//         <p>No hay productos en el carrito.</p>
//       ) : (
//         <>
//           <h3>Productos en el carrito:</h3>
//           <ul>
//             {cart.map((product, index) => (
//               <li key={index}>
//                 {product.name} - ${parseFloat(product.price).toFixed(2)} {/* Asegurarse de mostrar precios numéricos */}
//               </li>
//             ))}
//           </ul>

//           <h4>Total: ${calculateTotal()}</h4>

//           {/* Selección de método de pago */}
//           <div className="mt-3">
//             <h5>Selecciona el método de pago:</h5>
//             <select value={paymentMethod} onChange={handlePaymentChange}>
//               <option value="">Selecciona un método de pago</option>
//               <option value="credit-card">Tarjeta de crédito</option>
//               <option value="paypal">PayPal</option>
//               <option value="bank-transfer">Transferencia bancaria</option>
//             </select>
//           </div>

//           {/* Botón para confirmar la compra */}
//           <button 
//             className="btn btn-primary mt-3" 
//             onClick={handleConfirmPurchase}
//             disabled={isConfirmed}
//           >
//             Confirmar compra
//           </button>

//           {isConfirmed && <p className="mt-3">Compra confirmada. ¡Gracias por tu compra!</p>}
//         </>
//       )}
//     </div>
//   );
// }

// export default Checkout;

// import React, { useState, useEffect } from 'react';

// function Checkout({ cart, setCart }) {
//   const [paymentMethod, setPaymentMethod] = useState('');
//   const [isConfirmed, setIsConfirmed] = useState(false);

//   useEffect(() => {
//     // Verifica si PayPal está disponible en el SDK cargado
//     if (window.paypal) {
//       window.paypal.Buttons({
//         createOrder: (data, actions) => {
//           // Crea la orden de pago con el monto total
//           return actions.order.create({
//             purchase_units: [{
//               amount: {
//                 value: cart.reduce((total, product) => total + product.price, 0).toFixed(2), // Total en USD
//               },
//             }],
//           });
//         },
//         onApprove: (data, actions) => {
//           // Procesa el pago si es aprobado
//           return actions.order.capture().then((details) => {
//             alert(`Transacción completada por ${details.payer.name.given_name}`);
//             // Vaciar el carrito después de la compra
//             setCart([]);
//             setIsConfirmed(true);
//           });
//         },
//         onError: (err) => {
//           console.error('Error en el pago:', err);
//           alert('Hubo un error en el proceso de pago. Inténtalo de nuevo.');
//         },
//       }).render('#paypal-button-container');
//     }
//   }, [cart, setCart]);

//   const handlePaymentChange = (e) => {
//     setPaymentMethod(e.target.value);
//   };

//   const handleConfirmPurchase = () => {
//     if (!paymentMethod) {
//       alert('Por favor selecciona un método de pago');
//       return;
//     }

//     if (paymentMethod === 'paypal') {
//       // Mostrar el botón de PayPal si es seleccionado
//       return;
//     }

//     // Aquí puedes añadir la lógica para otros métodos de pago
//     alert('Compra realizada con éxito. Gracias por tu compra.');
//     setCart([]);
//     setIsConfirmed(true);
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Checkout</h2>

//       {cart.length === 0 ? (
//         <p>No hay productos en el carrito.</p>
//       ) : (
//         <>
//           <h3>Productos en el carrito:</h3>
//           <ul>
//             {cart.map((product, index) => (
//               <li key={index}>
//                 {product.name} - ${product.price}
//               </li>
//             ))}
//           </ul>

//           <h4>Total: ${cart.reduce((total, product) => total + product.price, 0).toFixed(2)}</h4>

//           {/* Selección de método de pago */}
//           <div className="mt-3">
//             <h5>Selecciona el método de pago:</h5>
//             <select value={paymentMethod} onChange={handlePaymentChange}>
//               <option value="">Selecciona un método de pago</option>
//               <option value="credit-card">Tarjeta de crédito</option>
//               <option value="paypal">PayPal</option>
//               <option value="bank-transfer">Transferencia bancaria</option>
//             </select>
//           </div>

//           {paymentMethod === 'paypal' && (
//             <div id="paypal-button-container" className="mt-3"></div>
//           )}

//           <button
//             className="btn btn-primary mt-3"
//             onClick={handleConfirmPurchase}
//             disabled={isConfirmed}
//           >
//             Confirmar compra
//           </button>

//           {isConfirmed && <p className="mt-3">Compra confirmada. ¡Gracias por tu compra!</p>}
//         </>
//       )}
//     </div>
//   );
// }

// export default Checkout;

// import React, { useState } from 'react';

// function Checkout({ cart, setCart }) {
//   const [paymentMethod, setPaymentMethod] = useState('');
//   const [isConfirmed, setIsConfirmed] = useState(false);

//   const handlePaymentChange = (e) => {
//     setPaymentMethod(e.target.value);
//   };

//   const handleConfirmPurchase = () => {
//     if (!paymentMethod) {
//       alert('Por favor selecciona un método de pago');
//       return;
//     }

//     // Aquí puedes añadir la lógica para procesar el pago (API de pagos o algo simulado)
//     alert('Compra realizada con éxito. Gracias por tu compra.');

//     // Vaciar el carrito después de la compra
//     setCart([]);
//     setIsConfirmed(true);
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Checkout</h2>
      
//       {cart.length === 0 ? (
//         <p>No hay productos en el carrito.</p>
//       ) : (
//         <>
//           <h3>Productos en el carrito:</h3>
//           <ul>
//             {cart.map((product, index) => (
//               <li key={index}>
//                 {product.name} - ${product.price}
//               </li>
//             ))}
//           </ul>

//           <h4>Total: ${cart.reduce((total, product) => total + product.price, 0)}</h4>

//           {/* Selección de método de pago */}
//           <div className="mt-3">
//             <h5>Selecciona el método de pago:</h5>
//             <select value={paymentMethod} onChange={handlePaymentChange}>
//               <option value="">Selecciona un método de pago</option>
//               <option value="credit-card">Tarjeta de crédito</option>
//               <option value="paypal">PayPal</option>
//               <option value="bank-transfer">Transferencia bancaria</option>
//             </select>
//           </div>

//           {/* Botón para confirmar la compra */}
//           <button 
//             className="btn btn-primary mt-3" 
//             onClick={handleConfirmPurchase}
//             disabled={isConfirmed}
//           >
//             Confirmar compra
//           </button>

//           {isConfirmed && <p className="mt-3">Compra confirmada. ¡Gracias por tu compra!</p>}
//         </>
//       )}
//     </div>
//   );
// }

// export default Checkout;
