import React from 'react';
import { create, act } from 'react-test-renderer';
import { MockedProvider } from '@apollo/react-testing';
import wait from 'waait';

import Products from '../products';
import { LIST_PRODUCTS, SEARCH_CATEGORIES } from '../queries';

const mocks = [
  {
    request: {
      query: LIST_PRODUCTS,
      variables: {
        id: '532',
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
    let root;
    act(() => {
      root = create(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Products />
        </MockedProvider>,
      );
    });

    await wait(300);

    expect(root.toJSON()).toMatchSnapshot();
  });
});
