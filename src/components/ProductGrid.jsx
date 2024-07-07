import React from 'react';
import styled from 'styled-components';

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
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

const ProductGrid = ({ products }) => {
  return (
    <GridContainer>
      {products.map(product => (
        <ProductCard key={product.id}>
          <ProductImage src={product.imageUrl} alt={product.title} />
          <ProductTitle>{product.title}</ProductTitle>
          <ProductPrice>{product.price}</ProductPrice>
        </ProductCard>
      ))}
    </GridContainer>
  );
};

export default ProductGrid;
