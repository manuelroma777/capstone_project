import React, { useState } from 'react';
import axios from 'axios';

function AddProductForm({ setProducts, products }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [stock, setStock] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // Para mostrar errores

  const validateForm = () => {
    // Verificar que todos los campos estén llenos
    if (!name || !price || !description || !stock) {
      setErrorMessage("Todos los campos son obligatorios");
      return false;
    }

    // Verificar que el precio sea un número positivo
    if (isNaN(price) || price <= 0) {
      setErrorMessage("El precio debe ser un número positivo");
      return false;
    }

    // Verificar que el stock sea un número entero válido
    if (isNaN(stock) || stock < 0 || !Number.isInteger(Number(stock))) {
      setErrorMessage("El stock debe ser un número entero válido");
      return false;
    }

    setErrorMessage(''); // Limpiar mensaje de error si todo está bien
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Si la validación falla, no enviar el formulario
    if (!validateForm()) {
      return;
    }

    const newProduct = { name, price, description, stock };

    axios.post('http://localhost:5000/add_product', newProduct)
      .then(response => {
        console.log(response.data.message);
        const addedProduct = response.data.product;
        setProducts([...products, addedProduct]); // Actualizar la lista de productos
        // Limpiar el formulario
        setName('');
        setPrice('');
        setDescription('');
        setStock('');
      })
      .catch(error => {
        console.error("Error al agregar el producto:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Mensaje de error */}
      <input
        type="text"
        placeholder="Nombre del producto"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Precio"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <textarea
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <input
        type="number"
        placeholder="Stock"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
        required
      />
      <button type="submit">Agregar Producto</button>
    </form>
  );
}

export default AddProductForm;

