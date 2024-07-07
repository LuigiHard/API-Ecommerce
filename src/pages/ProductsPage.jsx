import React, { useState } from 'react';
import Filter from '../components/Filters';
import ProductGrid from '../components/ProductGrid';
import Navbar from '../components/Navbar';

const ProductsPage = () => {
  const [filters, setFilters] = useState({ category: '', price: '' });
  const [products, setProducts] = useState([
    { id: 1, title: 'Produto 1', price: 'R$ 100,00', imageUrl: '/path/to/product1.jpg', category: 'eletronicos' },
    { id: 2, title: 'Produto 2', price: 'R$ 150,00', imageUrl: '/path/to/product2.jpg', category: 'roupas' },
    { id: 3, title: 'Produto 3', price: 'R$ 200,00', imageUrl: '/path/to/product3.jpg', category: 'acessorios' },
    // Mais produtos aqui
  ]);

  const handleFilterChange = (filterType, value) => {
    setFilters({ ...filters, [filterType]: value });
  };

  const filteredProducts = products.filter(product => {
    const categoryMatch = filters.category ? product.category === filters.category : true;
    const priceMatch = filters.price
      ? (filters.price === 'low' && product.price < 50) ||
        (filters.price === 'medium' && product.price >= 50 && product.price <= 150) ||
        (filters.price === 'high' && product.price > 150)
      : true;
    return categoryMatch && priceMatch;
  });

  return (
    <div>
      <Navbar />
      <Filter onFilterChange={handleFilterChange} />
      <ProductGrid products={filteredProducts} />
    </div>
  );
};

export default ProductsPage;
