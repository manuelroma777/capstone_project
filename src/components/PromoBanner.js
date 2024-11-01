import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../Styles/PromoBanner.css';

const PromoBanner = () => {
  const promoProducts = [
    {
      id: 1,
      name: 'Cuchillos Calidad Incomparable',
      image_url: 'https://i.postimg.cc/G2W6f7Kj/Cuchillos-1.jpg',  // URL específica de la imagen
      description: 'Oferta por tiempo limitado. ¡No te lo pierdas!',
    },
    {
      id: 2,
      name: 'Sartén Antiadherente',
      image_url: 'https://i.postimg.cc/VvDhdy5R/Sarten-1.jpg',  // URL específica de la imagen
      description: 'Por tiempo limitado. ¡Aprovecha la oferta!',
    },
    {
      id: 3,
      name: 'Set de Tazas',
      image_url: 'https://i.postimg.cc/VkShLVwq/Tazas-Ceramica-1.jpg',  // URL específica de la imagen
      description: 'Oferta por tiempo limitado.',
    },
    {
      id: 4,
      name: 'Set de 4 Copas',
      image_url: 'https://i.postimg.cc/mDxWsGF1/Copas-1.jpg',  // URL específica de la imagen
      description: 'Oferta por tiempo limitado.',
    },
    {
      id: 5,
      name: 'Set de 4 Platos',
      image_url: 'https://i.postimg.cc/5NqDPmCw/Platos-1.jpg',  // URL específica de la imagen
      description: '¡No te Pierdas esta Oferta por tiempo limitado!',
    },
    {
      id: 6,
      name: 'Secadora de Mano',
      image_url: 'https://i.postimg.cc/WpZBZVpY/Secadora-1.jpg',  // URL específica de la imagen
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
  