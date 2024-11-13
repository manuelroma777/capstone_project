import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import PromoBanner from './components/PromoBanner';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';  
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import './Styles/App.css';
import About from './components/About';
import Contact from './components/Contact';
import PreguntasFrecuentes from './components/PreguntasFrecuentes';  // Importar componente Preguntas Frecuentes
import EnviosGratis from './components/EnviosGratis';  // Importar componente Envios Gratis

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    axios.get('http://localhost:5000/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("Hubo un error al obtener los productos:", error);
      });
  }, []);

  return (
    <Router>
      <Header token={token} user={user} cart={cart} setToken={setToken} setCart={setCart} />
      
      <Routes>
        <Route path="/" element={<Home products={products} cart={cart} setCart={setCart} token={token} />} />
        <Route path="/login" element={<Login setToken={setToken} setUser={setUser} />} />
        <Route path="/register" element={<Register />} />
        <Route 
          path="/productos" 
          element={
            <>
              <PromoBanner />
              <div className="container">
                <h1>LAS MEJORES MARCAS SIEMPRE</h1>
                {/* <h1>para ti</h1> */}
                <ProductList products={products} cart={cart} setCart={setCart} token={token} />
              </div>
            </>
          } 
        />
        <Route path="/productos/:id" element={<ProductDetail token={token} cart={cart} setCart={setCart} />} />
        <Route path="/carrito" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Nueva ruta para "Preguntas Frecuentes" */}
        <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
        {/* Nueva ruta para "Envíos Gratis" */}
        <Route path="/envios-gratis" element={<EnviosGratis />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import axios from 'axios';
// import PromoBanner from './components/PromoBanner';
// import Header from './components/Header';
// import Home from './components/Home';
// import Login from './components/Login';
// import Register from './components/Register';  
// import Footer from './components/Footer';
// import ProductList from './components/ProductList';
// import ProductDetail from './components/ProductDetail';
// import Cart from './components/Cart';  // Importar el componente Cart
// import Checkout from './components/Checkout';  // Importar el componente Checkout
// import './Styles/App.css'; // Si usas SCSS, sería './App.scss'
// import About from './components/About';  // Importar componente About
// import Contact from './components/Contact';  // Importar componente Contact
// import PreguntasFrecuentes from './components/PreguntasFrecuentes';
// import EnviosGratis from './components/EnviosGratis';

// function App() {
//   const [token, setToken] = useState(localStorage.getItem('token') || null);  // Recuperar token de localStorage
//   const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);  // Recuperar usuario de localStorage
//   const [products, setProducts] = useState([]);  // Estado para almacenar los productos
//   const [cart, setCart] = useState([]);  // Estado para manejar el carrito de compras

//   // Cargar el carrito desde el localStorage al iniciar
//   useEffect(() => {
//     const storedCart = localStorage.getItem('cart');
//     if (storedCart) {
//       setCart(JSON.parse(storedCart));  // Si existe un carrito guardado, lo asignamos al estado
//     }
//   }, []);

//   // Guardar el carrito en localStorage cada vez que el carrito cambie
//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cart));
//   }, [cart]);

//   // Llama a la API para obtener los productos cuando se monta el componente
//   useEffect(() => {
//     axios.get('http://localhost:5000/products')
//       .then(response => {
//         setProducts(response.data);  // Almacena los productos en el estado
//       })
//       .catch(error => {
//         console.error("Hubo un error al obtener los productos:", error);  // Manejo de errores
//       });
//   }, []);

//   return (
//     <Router>
//       {/* Pasamos token, user, cart y setCart al Header */}
//       <Header token={token} user={user} cart={cart} setToken={setToken} setCart={setCart} />
      
//       <Routes>
//         {/* Página de inicio */}
//         <Route 
//           path="/" 
//           element={<Home products={products} cart={cart} setCart={setCart} token={token} />} 
//         />

//         {/* Página de inicio de sesión */}
//         <Route 
//           path="/login" 
//           element={<Login setToken={setToken} setUser={setUser} />}  // Pasamos setUser para manejar el estado del usuario
//         />

//         {/* Página de registro */}
//         <Route 
//           path="/register" 
//           element={<Register />} 
//         />

//         {/* Página de listado de productos */}
//         <Route 
//           path="/productos" 
//           element={
//             <>
//               <PromoBanner />
//               <div className="container">
//                 <h1>Todos Los Productos</h1>
//                 <ProductList 
//                   products={products}
//                   cart={cart}
//                   setCart={setCart}
//                   token={token}
//                 />
//               </div>
//             </>
//           } 
//         />

//         {/* Página de detalles de un producto específico */}
//         <Route 
//           path="/productos/:id" 
//           element={<ProductDetail token={token} cart={cart} setCart={setCart} />} 
//         />

//         {/* Página del carrito */}
//         <Route 
//           path="/carrito" 
//           element={<Cart cart={cart} setCart={setCart} />}  // Añadir la ruta del carrito
//         />

//         {/* Página del checkout */}
//         <Route 
//           path="/checkout" 
//           element={<Checkout cart={cart} setCart={setCart} />}  // Añadir la ruta del checkout
//         />

//         {/* Página de "Acerca de Nosotros" */}
//         <Route 
//           path="/about" 
//           element={<About />} 
//         />

//         {/* Página de "Contacto" */}
//         <Route 
//           path="/contact" 
//           element={<Contact />} 
//         />
//       </Routes>

//       <Footer />
//     </Router>
//   );
// }

// export default App;

// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import axios from 'axios';
// import PromoBanner from './components/PromoBanner';
// import Header from './components/Header';
// import Home from './components/Home';
// import Login from './components/Login';
// import Register from './components/Register';  
// import Footer from './components/Footer';
// import ProductList from './components/ProductList';
// import ProductDetail from './components/ProductDetail';
// import Cart from './components/Cart';  // Importar el componente Cart
// import Checkout from './components/Checkout';  // Importar el componente Checkout
// import './App.css'; // Si usas SCSS, sería './App.scss'
// import About from './components/About';  // Importar componente About
// import Contact from './components/Contact';  // Importar componente Contact


// function App() {
//   const [token, setToken] = useState(localStorage.getItem('token') || null);  // Recuperar token de localStorage
//   const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);  // Recuperar usuario de localStorage
//   const [products, setProducts] = useState([]);  // Estado para almacenar los productos
//   const [cart, setCart] = useState([]);  // Estado para manejar el carrito de compras

//   // Cargar el carrito desde el localStorage al iniciar
//   useEffect(() => {
//     const storedCart = localStorage.getItem('cart');
//     if (storedCart) {
//       setCart(JSON.parse(storedCart));  // Si existe un carrito guardado, lo asignamos al estado
//     }
//   }, []);

//   // Guardar el carrito en localStorage cada vez que el carrito cambie
//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cart));
//   }, [cart]);

//   // Llama a la API para obtener los productos cuando se monta el componente
//   useEffect(() => {
//     axios.get('http://localhost:5000/products')
//       .then(response => {
//         setProducts(response.data);  // Almacena los productos en el estado
//       })
//       .catch(error => {
//         console.error("Hubo un error al obtener los productos:", error);  // Manejo de errores
//       });
//   }, []);

//   return (
//     <Router>
//       {/* Pasamos token, user, cart y setCart al Header */}
//       <Header token={token} user={user} cart={cart} setToken={setToken} setCart={setCart} />
      
//       <Routes>
//         {/* Página de inicio */}
//         <Route 
//           path="/" 
//           element={<Home products={products} cart={cart} setCart={setCart} token={token} />} 
//         />

//         {/* Página de inicio de sesión */}
//         <Route 
//           path="/login" 
//           element={<Login setToken={setToken} setUser={setUser} />}  // Pasamos setUser para manejar el estado del usuario
//         />

//         {/* Página de registro */}
//         <Route 
//           path="/register" 
//           element={<Register />} 
//         />

//         {/* Página de listado de productos */}
//         <Route 
//           path="/productos" 
//           element={
//             <>
//               <PromoBanner />
//               <div className="container">
//                 <h1>Productos</h1>
//                 <ProductList 
//                   products={products}
//                   cart={cart}
//                   setCart={setCart}
//                   token={token}
//                 />
//               </div>
//             </>
//           } 
//         />

//         {/* Página de detalles de un producto específico */}
//         <Route 
//           path="/productos/:id" 
//           element={<ProductDetail token={token} cart={cart} setCart={setCart} />} 
//         />

//         {/* Página del carrito */}
//         <Route 
//           path="/carrito" 
//           element={<Cart cart={cart} setCart={setCart} />}  // Añadir la ruta del carrito
//         />

//         {/* Página del checkout */}
//         <Route 
//           path="/checkout" 
//           element={<Checkout cart={cart} setCart={setCart} />}  // Añadir la ruta del checkout
//         />
//       </Routes>

//       <Footer />
//     </Router>
//   );
// }

// export default App;

// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import axios from 'axios';
// import PromoBanner from './components/PromoBanner';
// import Header from './components/Header';
// import Home from './components/Home';
// import Login from './components/Login';
// import Register from './components/Register';  
// import Footer from './components/Footer';
// import ProductList from './components/ProductList';
// import ProductDetail from './components/ProductDetail';
// import Cart from './components/Cart';  // Importar el componente Cart
// import Checkout from './components/Checkout';  // Importar el componente Checkout

// function App() {
//   const [token, setToken] = useState(localStorage.getItem('token') || null);  // Recuperar token de localStorage
//   const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);  // Recuperar usuario de localStorage
//   const [products, setProducts] = useState([]);  // Estado para almacenar los productos
//   const [cart, setCart] = useState([]);  // Estado para manejar el carrito de compras

//   // Cargar el carrito desde el localStorage al iniciar
//   useEffect(() => {
//     const storedCart = localStorage.getItem('cart');
//     if (storedCart) {
//       setCart(JSON.parse(storedCart));  // Si existe un carrito guardado, lo asignamos al estado
//     }
//   }, []);

//   // Guardar el carrito en localStorage cada vez que el carrito cambie
//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cart));
//   }, [cart]);

//   // Llama a la API para obtener los productos cuando se monta el componente
//   useEffect(() => {
//     axios.get('http://localhost:5000/products')
//       .then(response => {
//         setProducts(response.data);  // Almacena los productos en el estado
//       })
//       .catch(error => {
//         console.error("Hubo un error al obtener los productos:", error);  // Manejo de errores
//       });
//   }, []);

//   return (
//     <Router>
//       {/* Pasamos token, user, cart y setCart al Header */}
//       <Header token={token} user={user} cart={cart} setToken={setToken} setCart={setCart} />
      
//       <Routes>
//         {/* Página de inicio */}
//         <Route 
//           path="/" 
//           element={<Home products={products} cart={cart} setCart={setCart} token={token} />} 
//         />

//         {/* Página de inicio de sesión */}
//         <Route 
//           path="/login" 
//           element={<Login setToken={setToken} setUser={setUser} />}  // Pasamos setUser para manejar el estado del usuario
//         />

//         {/* Página de registro */}
//         <Route 
//           path="/register" 
//           element={<Register />} 
//         />

//         {/* Página de listado de productos */}
//         <Route 
//           path="/productos" 
//           element={
//             <>
//               <PromoBanner />
//               <div className="container">
//                 <h1>Productos</h1>
//                 <ProductList 
//                   products={products}
//                   cart={cart}
//                   setCart={setCart}
//                   token={token}
//                 />
//               </div>
//             </>
//           } 
//         />

//         {/* Página de detalles de un producto específico */}
//         <Route 
//           path="/productos/:id" 
//           element={<ProductDetail token={token} cart={cart} setCart={setCart} />} 
//         />

//         {/* Página del carrito */}
//         <Route 
//           path="/carrito" 
//           element={<Cart cart={cart} setCart={setCart} />}  // Añadir la ruta del carrito
//         />
//       </Routes>

//       <Footer />
//     </Router>
//   );
// }

// export default App;

// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import axios from 'axios';
// import PromoBanner from './components/PromoBanner';
// import Header from './components/Header';
// import Home from './components/Home';
// import Login from './components/Login';
// import Register from './components/Register';  // Importar el componente Register
// import Footer from './components/Footer';
// import ProductList from './components/ProductList';
// import ProductDetail from './components/ProductDetail';
// import Cart from './components/Cart';  // Importar el componente Cart

// function App() {
//   const [token, setToken] = useState(localStorage.getItem('token') || null);  // Recuperar token de localStorage
//   const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);  // Recuperar usuario de localStorage
//   const [products, setProducts] = useState([]);  // Estado para almacenar los productos
//   const [cart, setCart] = useState([]);  // Estado para manejar el carrito de compras

//   // Llama a la API para obtener los productos cuando se monta el componente
//   useEffect(() => {
//     axios.get('http://localhost:5000/products')
//       .then(response => {
//         setProducts(response.data);  // Almacena los productos en el estado
//       })
//       .catch(error => {
//         console.error("Hubo un error al obtener los productos:", error);  // Manejo de errores
//       });
//   }, []);

//   return (
//     <Router>
//       {/* Pasamos token, user, cart y setCart al Header */}
//       <Header token={token} user={user} cart={cart} setToken={setToken} setCart={setCart} />
      
//       <Routes>
//         {/* Página de inicio */}
//         <Route 
//           path="/" 
//           element={<Home products={products} cart={cart} setCart={setCart} token={token} />} 
//         />

//         {/* Página de inicio de sesión */}
//         <Route 
//           path="/login" 
//           element={<Login setToken={setToken} setUser={setUser} />}  // Pasamos setUser para manejar el estado del usuario
//         />

//         {/* Página de registro */}
//         <Route 
//           path="/register" 
//           element={<Register />} 
//         />

//         {/* Página de listado de productos */}
//         <Route 
//           path="/productos" 
//           element={
//             <>
//               <PromoBanner />
//               <div className="container">
//                 <h1>Productos</h1>
//                 <ProductList 
//                   products={products}
//                   cart={cart}
//                   setCart={setCart}
//                   token={token}
//                 />
//               </div>
//             </>
//           } 
//         />

//         {/* Página de detalles de un producto específico */}
//         <Route 
//           path="/productos/:id" 
//           element={<ProductDetail token={token} cart={cart} setCart={setCart} />} 
//         />
//       </Routes>

//       <Footer />
//     </Router>
//   );
// }

// export default App;

// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import axios from 'axios';
// import PromoBanner from './components/PromoBanner';
// import Header from './components/Header';
// import Home from './components/Home';
// import Login from './components/Login';
// import Register from './components/Register';  // Importar el componente Register
// import Footer from './components/Footer';
// import ProductList from './components/ProductList';
// import ProductDetail from './components/ProductDetail';

// function App() {
//   const [token, setToken] = useState(null);  // Estado para manejar el token JWT
//   const [products, setProducts] = useState([]);  // Estado para almacenar los productos
//   const [cart, setCart] = useState([]);  // Estado para manejar el carrito de compras

//   // Llama a la API para obtener los productos cuando se monta el componente
//   useEffect(() => {
//     axios.get('http://localhost:5000/products')
//       .then(response => {
//         setProducts(response.data);  // Almacena los productos en el estado
//       })
//       .catch(error => {
//         console.error("Hubo un error al obtener los productos:", error);  // Manejo de errores
//       });
//   }, []);

//   return (
//     <Router>
//       <Header />
      
//       <Routes>
//         {/* Página de inicio */}
//         <Route 
//           path="/" 
//           element={<Home products={products} cart={cart} setCart={setCart} token={token} />} 
//         />

//         {/* Página de inicio de sesión */}
//         <Route 
//           path="/login" 
//           element={<Login setToken={setToken} />} 
//         />

//         {/* Página de registro */}
//         <Route 
//           path="/register" 
//           element={<Register />} 
//         />

//         {/* Página de listado de productos */}
//         <Route 
//           path="/productos" 
//           element={
//             <>
//               <PromoBanner />
//               <div className="container">
//                 <h1>Productos</h1>
//                 <ProductList 
//                   products={products}
//                   cart={cart}
//                   setCart={setCart}
//                   token={token}
//                 />
//               </div>
//             </>
//           } 
//         />

//         {/* Página de detalles de un producto específico */}
//         <Route 
//           path="/productos/:id" 
//           element={<ProductDetail token={token} cart={cart} setCart={setCart} />} 
//         />
//       </Routes>

//       <Footer />
//     </Router>
//   );
// }

// export default App;

