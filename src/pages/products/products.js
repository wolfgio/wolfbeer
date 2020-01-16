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
  const parsedQueryParams = queryString.parse(window.location.search);

  const popScreen = () => history.goBack();

  const handleInputChange = (e) => setValue(e.target.value);
  const handleCategoryChange = (e) => setCategoryId(e.target.value);

  const {
    data: categories,
    loading: categoriesLoading,
  } = useQuery(SEARCH_CATEGORIES);

  const {
    data: products,
    loading: productsLoading,
    error: productsError,
  } = useQuery(LIST_PRODUCTS, {
    variables: {
      id: parsedQueryParams.poc_id,
      search: debouncedValue,
      categoryId: categoryId === 'all' ? null : categoryId,
    },
  });

  console.log(categoryId);

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
      <CategorySelect onChange={handleCategoryChange}>
        <option value="all">Todas</option>
        {categories && categories.allCategory.map((category) => (
          <option value={category.id} key={category.id}>
            {category.title}
          </option>
        ))}
      </CategorySelect>
      <SearchInput
        placeholder="Pesquisar produto..."
        type="search"
        onChange={handleInputChange}
      />
      <CardGrid>
        {productsLoading && RenderLoadingCards()}
        {products && products.poc && products.poc.products.length > 0
          && products.poc.products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        {!productsLoading && (!products || !products.poc || products.poc.products.length <= 0) && (
          <h2>Não encontramos nenhum produto :/</h2>
        )}
      </CardGrid>
    </Container>
  );
};

export default Products;
