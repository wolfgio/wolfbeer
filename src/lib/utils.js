import { createBrowserHistory } from 'history';
import { useState, useEffect } from 'react';
import ApolloClient from 'apollo-boost';
import fetch from 'unfetch';

export const client = new ApolloClient({
  fetch,
  uri: 'https://api.code-challenge.ze.delivery/public/graphql',
});

export const history = createBrowserHistory();

export const useDebounce = (delay) => {
  const [debouncedValue, setDebouncedValue] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    const handleTimeout = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(handleTimeout);
  }, [value]);

  return {
    debouncedValue,
    setValue,
  };
};

export const formatCurrency = (amount) => {
  if (amount && typeof amount === 'number') {
    const formattedAmount = new Intl.NumberFormat(
      'pt-BR',
      { style: 'currency', currency: 'BRL' },
    ).format(amount);
    return formattedAmount;
  }
  return 'invalid';
};
