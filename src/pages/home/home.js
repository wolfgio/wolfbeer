import React, { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import moment from 'moment-timezone';

import SearchBox from '../../components/searchBox/searchBox';
import LoadingWall from '../../components/loadingWall/loadingWall';
import { Container } from './styles';

import { SEARCH_POC } from './queries';
import { history } from '../../lib/utils';

const Home = () => {
  const [searchPOC, { data, loading }] = useLazyQuery(SEARCH_POC);
  const [address, setAddress] = useState('');

  useEffect(() => {
    if (data && data.pocSearch && data.pocSearch.length > 0) {
      history.push(`/products?poc_id=${data.pocSearch[0].id}&address=${address}`);
    }
  }, [data]);

  const onAddressChanged = (latitude, longitude, formattedAddress) => {
    const now = moment().tz('America/Sao_Paulo');
    setAddress(formattedAddress);
    searchPOC({
      variables: {
        lat: latitude.toString(),
        long: longitude.toString(),
        algorithm: 'NEAREST',
        now: now.utc(true).toISOString(),
      },
    });
  };

  return (
    <Container>
      <LoadingWall loading={loading} />
      <SearchBox addressChanged={onAddressChanged} />
    </Container>
  );
};

export default Home;
