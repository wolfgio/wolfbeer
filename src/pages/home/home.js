import React from 'react';
import { gql } from 'apollo-boost';
import moment from 'moment-timezone';

import SearchBox from '../../components/searchBox/searchBox';
import { Container } from './styles';

import { history, client } from '../../lib/utils';

const SEARCH_POC = gql`
  query pocSearchMethod($now: DateTime!, $algorithm: String!, $lat: String!, $long: String!) {
    pocSearch(now: $now, algorithm: $algorithm, lat: $lat, long: $long) {
      __typename
      id
      status
      tradingName
      officialName
      deliveryTypes {
        __typename
        pocDeliveryTypeId
        deliveryTypeId
        price
        title
        subtitle
        active
      }
      paymentMethods {
        __typename
        pocPaymentMethodId
        paymentMethodId
        active
        title
        subtitle
      }
      pocWorkDay {
        __typename
        weekDay
        active
        workingInterval {
          __typename
          openingTime
          closingTime
        }
      }
      address {
        __typename
        address1
        address2
        number
        city
        province
        zip
        coordinates
      }
      phone {
        __typename
        phoneNumber
      }
    }
  }
`;


const Home = () => {
  const onAddressChanged = (latitude, longitude, formattedAddress) => {
    const now = moment().tz('America/Sao_Paulo');
    client.query({
      query: SEARCH_POC,
      variables: {
        lat: latitude.toString(),
        long: longitude.toString(),
        algorithm: 'NEAREST',
        now: now.utc(true).toISOString(),
      },
    }).then((result) => {
      if (result.data.pocSearch && result.data.pocSearch.length > 0) {
        history.push(`/products?poc_id=${result.data.pocSearch[0].id}&address=${formattedAddress}`);
      }
    });
  };

  return (
    <Container>
      <SearchBox addressChanged={onAddressChanged} />
    </Container>
  );
};

export default Home;
