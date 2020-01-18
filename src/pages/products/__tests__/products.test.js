import React from 'react';
import { create, act } from 'react-test-renderer';
import { MockedProvider } from '@apollo/react-testing';
import { fireEvent, render } from '@testing-library/react';
import wait from 'waait';

import Products from '../products';
import LoadingCard from '../../../components/loadingCard/loadingCard';
import ProductCard from '../../../components/productCard/productCard';

import { LIST_PRODUCTS, SEARCH_CATEGORIES } from '../queries';

const mocks = [
  {
    request: {
      query: LIST_PRODUCTS,
      variables: {
        id: undefined,
        search: '',
        categoryId: null,
      },
    },
    result: {
      data: {
        poc: {
          id: '532',
          products: [
            {
              id: '8868',
              title: 'Skol 269ml - Unidade',
              rgb: false,
              images: [
                {
                  url: 'https://courier-images-codechallenge.s3-us-west-2.amazonaws.com/product/8868_205f958d-2e51-48a3-b4d5-a2998765571a.jpg',
                },
              ],
              productVariants: [
                {
                  availableDate: '2018-10-31T00:00:00',
                  productVariantId: '8502',
                  price: 2.09,
                  inventoryItemId: '80149',
                  shortDescription: null,
                  title: 'Skol 269ml - Unidade',
                  published: null,
                  volume: '0,00269',
                  volumeUnit: null,
                  description: null,
                  subtitle: 'Cervejas',
                  components: [],
                },
              ],
            },
          ],
        },
      },
    },
  },
  {
    request: {
      query: LIST_PRODUCTS,
      variables: {
        id: undefined,
        search: 'brahma',
        categoryId: null,
      },
    },
    result: {
      data: {
        poc: {
          id: '532',
          products: [],
        },
      },
    },
  },
  {
    request: {
      query: SEARCH_CATEGORIES,
      variables: {
        algorithm: 'NEAREST',
        lat: '-23.632919',
        long: '-46.699453',
        now: '2017-08-01T20:00:00.000Z',
      },
    },
    result: {
      data: {
        allCategory: [
          {
            title: 'Cervejas',
            id: '94',
          },
          {
            title: 'Destilados',
            id: '95',
          },
          {
            title: 'Vinhos',
            id: '92',
          },
          {
            title: 'Sem álcool',
            id: '96',
          },
          {
            title: 'Petiscos',
            id: '97',
          },
          {
            title: 'Outros',
            id: '98',
          },
        ],
      },
    },
  },
];

describe('<Products />', () => {
  it('should render without error', async () => {
    let testRenderer;
    act(() => {
      testRenderer = create(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Products />
        </MockedProvider>,
      );
    });

    await wait(1000);

    const testInstance = testRenderer.root;

    expect(testInstance.findByType(ProductCard)).toBeDefined();
    expect(testInstance.findAllByType(LoadingCard)).toEqual([]);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('should render loading component', () => {
    let testRenderer;
    act(() => {
      testRenderer = create(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Products />
        </MockedProvider>,
      );
    });

    const testInstance = testRenderer.root;
    expect(testInstance.findAllByType(LoadingCard)).toBeDefined();
    expect(testInstance.findAllByType(LoadingCard)).toHaveProperty('length', 13);
  });

  it('should render not found component', async () => {
    const { findByPlaceholderText, findByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Products />
      </MockedProvider>,
    );

    await wait(1000);

    const input = await findByPlaceholderText('Pesquisar produto...');

    fireEvent.change(input, { target: { value: 'brahma' } });

    await wait(2000);

    const errorFeedback = await findByText('Não encontramos nenhum produto :/');
    expect(errorFeedback).toBeDefined();
  });
});
