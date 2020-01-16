import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import queryString from 'query-string';

import GPSIcon from '../../assets/gps.png';

import { history } from '../../lib/utils';
import { SEARCH_CATEGORIES, LIST_PRODUCTS } from './queries';
import {
  Container,
  AddressContainer,
  ChangeAddressButton,
  LocationIcon,
} from './styles';

const Products = () => {
  const [search, setSearch] = useState('');
  const parsedQueryParams = queryString.parse(window.location.search);

  const popScreen = () => history.goBack();

  const {
    data: categories,
    loading: categoriesLoading,
    error: categoriesError,
    refetch: refetchCategories,
  } = useQuery(SEARCH_CATEGORIES);

  const {
    data: products,
    loading: productsLoading,
    error: productsError,
    refetch: refetchProducts,
  } = useQuery(LIST_PRODUCTS, {
    variables: {
      id: parsedQueryParams.poc_id,
      search: '',
      categoryId: null,
    },
  });

  console.log(products);

  return (
    <Container>
      <AddressContainer>
        <p>Entregar em:</p>
        <ChangeAddressButton onClick={popScreen}>
          <LocationIcon src={GPSIcon} />
          {parsedQueryParams.address}
        </ChangeAddressButton>
      </AddressContainer>
    </Container>
  );
};

export default Products;
