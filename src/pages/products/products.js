import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import queryString from 'query-string';

import GPSIcon from '../../assets/gps.png';
import LoadingCard from '../../components/loadingCard/loadingCard';

import { history, useDebounce } from '../../lib/utils';
import { SEARCH_CATEGORIES, LIST_PRODUCTS } from './queries';
import {
  Container,
  AddressContainer,
  ChangeAddressButton,
  LocationIcon,
  CardGrid,
  SearchInput,
  CategorySelect,
  ItemsCountLength,
} from './styles';
import ProductCard from '../../components/productCard/productCard';

const RenderLoadingCards = () => {
  const cards = [];
  for (let i = 0; i <= 12; i += 1) {
    cards.push(<LoadingCard key={i} />);
  }
  return cards;
};

const Products = () => {
  const { debouncedValue, setValue } = useDebounce(600);
  const [categoryId, setCategoryId] = useState(null);
  const [selectedProducts, setProducts] = useState([]);
  const parsedQueryParams = queryString.parse(window.location.search);

  const popScreen = () => history.goBack();

  const handleInputChange = (e) => setValue(e.target.value);
  const handleCategoryChange = (e) => setCategoryId(e.target.value);
  const handleAddProduct = (product) => {
    const newProducts = [].concat(selectedProducts, product);
    setProducts(newProducts);
  };
  const handleRemoveProduct = (productId) => {
    const filteredProducts = selectedProducts.filter(
      (product) => product.id !== productId,
    );
    setProducts(filteredProducts);
  };

  const {
    data: categories,
    loading: categoriesLoading,
  } = useQuery(SEARCH_CATEGORIES);

  const {
    data: products,
    loading: productsLoading,
  } = useQuery(LIST_PRODUCTS, {
    variables: {
      id: parsedQueryParams.poc_id,
      search: debouncedValue,
      categoryId: categoryId === 'all' ? null : categoryId,
    },
  });

  return (
    <Container>
      <AddressContainer>
        <p>Entregar em:</p>
        <ChangeAddressButton onClick={popScreen}>
          <LocationIcon src={GPSIcon} />
          {parsedQueryParams.address}
        </ChangeAddressButton>
      </AddressContainer>
      <h4 style={{ margin: '16px 0' }}>Filtrar:</h4>
      {!categoriesLoading && (
        <CategorySelect onChange={handleCategoryChange}>
          <option value="all">Todas</option>
          {categories && categories.allCategory.map((category) => (
            <option value={category.id} key={category.id}>
              {category.title}
            </option>
          ))}
        </CategorySelect>
      )}
      <SearchInput
        placeholder="Pesquisar produto..."
        type="search"
        onChange={handleInputChange}
      />
      <ItemsCountLength>{`Items selecionados: ${selectedProducts.length}`}</ItemsCountLength>
      <CardGrid>
        {productsLoading && RenderLoadingCards()}
        {products && products.poc && products.poc.products.length > 0
          && products.poc.products.map((product) => {
            const isSelected = selectedProducts.findIndex(
              (_product) => _product.id === product.id,
            ) !== -1;
            return (
              <ProductCard
                product={product}
                isSelected={isSelected}
                key={product.id}
                onAddProduct={handleAddProduct}
                onRemoveProduct={handleRemoveProduct}
              />
            );
          })}
        {!productsLoading && (!products || !products.poc || products.poc.products.length <= 0) && (
          <h2>Não encontramos nenhum produto :/</h2>
        )}
      </CardGrid>
    </Container>
  );
};

export default Products;
