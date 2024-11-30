import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../Styles/PromoBanner.css';

const PromoBanner = () => {
  const promoProducts = [
    {
      id: 1,
      name: 'Cuchillos Calidad Incomparable',
      image_url: 'https://i.ibb.co/c6nLp6q/Set-Cuchillos-5.jpg',  // URL específica de la imagen
      description: 'Oferta por tiempo limitado. ¡No te lo pierdas!',
    },
    {
      id: 2,
      name: 'Sartén Antiadherente',
      image_url: 'https://i.ibb.co/s5QqLM8/Sarten-12.jpg',  // URL específica de la imagen
      description: 'Por tiempo limitado. ¡Aprovecha la oferta!',
    },
    {
      id: 3,
      name: 'Set de Tazas',
      image_url: 'https://i.ibb.co/N1B9zMC/Tazas-Ceramica-15.jpg',  // URL específica de la imagen
      description: 'Oferta por tiempo limitado.',
    },
    {
      id: 4,
      name: 'Set de 4 Copas',
      image_url: 'https://i.ibb.co/CwDPsZH/Set-Copas-8.jpg',  // URL específica de la imagen
      description: 'Oferta por tiempo limitado.',
    },
    {
      id: 5,
      name: 'Set de 4 Platos',
      image_url: 'https://i.ibb.co/gdN1GNK/Set-4-Platos-4.jpg',  // URL específica de la imagen
      description: '¡No te Pierdas esta Oferta por tiempo limitado!',
    },
    {
      id: 6,
      name: 'Secadora de Mano',
      image_url: 'https://i.ibb.co/KDY0s8z/Secadora-6.jpg',  // URL específica de la imagen
      description: 'Aprovecha la Oferta por tiempo limitado.',
    },
  ];
  

  return (
    <Carousel fade>
      {promoProducts.map((product) => (
        <Carousel.Item key={product.id}>
          <img
            className="d-block w-100 promo-image"
            src={product.image_url}
            alt={product.name}
          />
          <Carousel.Caption>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default PromoBanner;

// const PromoBanner = () => {
//     return <div>PromoBanner placeholder</div>;
//   };
  
//   export default PromoBanner;
  