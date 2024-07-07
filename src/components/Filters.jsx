import React from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

const FilterGroup = styled.div`
  display: flex;
  align-items: center;
`;

const FilterLabel = styled.label`
  margin-right: 10px;
  font-weight: bold;
`;

const FilterSelect = styled.select`
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Filter = ({ onFilterChange }) => {
  return (
    <FilterContainer>
      <FilterGroup>
        <FilterLabel>Categoria:</FilterLabel>
        <FilterSelect onChange={(e) => onFilterChange('category', e.target.value)}>
          <option value="">Todas</option>
          <option value="eletronicos">Eletrônicos</option>
          <option value="roupas">Roupas</option>
          <option value="acessorios">Acessórios</option>
        </FilterSelect>
      </FilterGroup>
      <FilterGroup>
        <FilterLabel>Preço:</FilterLabel>
        <FilterSelect onChange={(e) => onFilterChange('price', e.target.value)}>
          <option value="">Todos</option>
          <option value="low">Menor que R$50</option>
          <option value="medium">R$50 - R$150</option>
          <option value="high">Maior que R$150</option>
        </FilterSelect>
      </FilterGroup>
    </FilterContainer>
  );
};

export default Filter;
