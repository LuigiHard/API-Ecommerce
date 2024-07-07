import React from 'react';
import styled from 'styled-components';

const ProductsSection = styled.section`
  padding: 50px 20px;
  background: #f4f4f4;
  text-align: center;
`;

const ProductsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const ProductCard = styled.div`
  width: 300px;
  background: white;
  margin: 20px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

const ProductTitle = styled.h3`
  margin: 10px 0;
`;

const ProductPrice = styled.p`
  color: #333;
  font-size: 1.2em;
`;

const FeaturedProducts = () => {
  // Simulação de produtos; em um caso real, você buscaria esses dados de uma API ou banco de dados.
  const products = [
    { id: 1, title: 'Produto 1', price: 'R$ 100,00', imageUrl: '/path/to/product1.jpg' },
    { id: 2, title: 'Produto 2', price: 'R$ 150,00', imageUrl: '/path/to/product2.jpg' },
    { id: 3, title: 'Produto 3', price: 'R$ 200,00', imageUrl: '/path/to/product3.jpg' },
  ];

  return (
    <ProductsSection>
      <h2>Produtos em Destaque</h2>
      <ProductsContainer>
        {products.map(product => (
          <ProductCard key={product.id}>
            <ProductImage src={product.imageUrl} alt={product.title} />
            <ProductTitle>{product.title}</ProductTitle>
            <ProductPrice>{product.price}</ProductPrice>
          </ProductCard>
        ))}
      </ProductsContainer>
    </ProductsSection>
  );
};

export default FeaturedProducts;
