import React from 'react';
import { create, act } from 'react-test-renderer';
import { MockedProvider } from '@apollo/react-testing';

import Home from '../home';
import { SEARCH_POC } from '../queries';

const mocks = [
  {
    request: {
      query: SEARCH_POC,
      variables: {
        algorithm: 'NEAREST',
        lat: '-23.632919',
        long: '-46.699453',
        now: '2017-08-01T20:00:00.000Z',
      },
    },
    result: {
      data: {
        pocSearch: [
          {
            __typename: 'POC',
            id: '532',
            status: 'AVAILABLE',
            tradingName: 'Distribuidor de Treinamento',
            officialName: 'Distribuidor de Treinamento',
            deliveryTypes: [
              {
                __typename: 'POCDeliveryType',
                pocDeliveryTypeId: '1284',
                deliveryTypeId: '16',
                price: 0,
                title: 'RECEBER',
                subtitle: 'em até uma hora',
                active: true,
              },
              {
                __typename: 'POCDeliveryType',
                pocDeliveryTypeId: '1286',
                deliveryTypeId: '17',
                price: 0,
                title: 'RETIRAR',
                subtitle: 'no parceiro',
                active: true,
              },
              {
                __typename: 'POCDeliveryType',
                pocDeliveryTypeId: '1285',
                deliveryTypeId: '18',
                price: 0,
                title: 'AGENDAR',
                subtitle: 'entregamos em outro dia',
                active: true,
              },
            ],
            paymentMethods: [
              {
                __typename: 'POCPaymentMethod',
                pocPaymentMethodId: '1292',
                paymentMethodId: '46',
                active: true,
                title: 'Crédito (Visa/Mastercard)',
                subtitle: 'Cartão de Crédito Visa/Master',
              },
              {
                __typename: 'POCPaymentMethod',
                pocPaymentMethodId: '1291',
                paymentMethodId: '47',
                active: true,
                title: 'Débito (Visa/Mastercard)',
                subtitle: 'Cartão de Débito Visa Electron/Maestro',
              },
              {
                __typename: 'POCPaymentMethod',
                pocPaymentMethodId: '1290',
                paymentMethodId: '48',
                active: true,
                title: 'Dinheiro',
                subtitle: 'Vou pagar com dinheiro',
              },
            ],
            pocWorkDay: [
              {
                __typename: 'POCWorkDay',
                weekDay: 1,
                active: true,
                workingInterval: [
                  {
                    __typename: 'POCWorkingInterval',
                    openingTime: '09:10:00',
                    closingTime: '23:59:00',
                  },
                  {
                    __typename: 'POCWorkingInterval',
                    openingTime: '00:00:00',
                    closingTime: '02:00:00',
                  },
                ],
              },
              {
                __typename: 'POCWorkDay',
                weekDay: 3,
                active: true,
                workingInterval: [
                  {
                    __typename: 'POCWorkingInterval',
                    openingTime: '09:30:00',
                    closingTime: '23:59:00',
                  },
                  {
                    __typename: 'POCWorkingInterval',
                    openingTime: '00:00:00',
                    closingTime: '02:00:00',
                  },
                ],
              },
              {
                __typename: 'POCWorkDay',
                weekDay: 6,
                active: true,
                workingInterval: [
                  {
                    __typename: 'POCWorkingInterval',
                    openingTime: '09:55:00',
                    closingTime: '23:59:00',
                  },
                  {
                    __typename: 'POCWorkingInterval',
                    openingTime: '00:00:00',
                    closingTime: '04:00:00',
                  },
                ],
              },
              {
                __typename: 'POCWorkDay',
                weekDay: 0,
                active: true,
                workingInterval: [
                  {
                    __typename: 'POCWorkingInterval',
                    openingTime: '09:00:00',
                    closingTime: '23:59:00',
                  },
                  {
                    __typename: 'POCWorkingInterval',
                    openingTime: '00:00:00',
                    closingTime: '04:00:00',
                  },
                ],
              },
              {
                __typename: 'POCWorkDay',
                weekDay: 2,
                active: true,
                workingInterval: [
                  {
                    __typename: 'POCWorkingInterval',
                    openingTime: '00:00:00',
                    closingTime: '02:00:00',
                  },
                  {
                    __typename: 'POCWorkingInterval',
                    openingTime: '09:20:00',
                    closingTime: '23:59:00',
                  },
                ],
              },
              {
                __typename: 'POCWorkDay',
                weekDay: 4,
                active: true,
                workingInterval: [
                  {
                    __typename: 'POCWorkingInterval',
                    openingTime: '00:00:00',
                    closingTime: '02:00:00',
                  },
                  {
                    __typename: 'POCWorkingInterval',
                    openingTime: '09:40:00',
                    closingTime: '23:59:00',
                  },
                ],
              },
              {
                __typename: 'POCWorkDay',
                weekDay: 5,
                active: true,
                workingInterval: [
                  {
                    __typename: 'POCWorkingInterval',
                    openingTime: '00:00:00',
                    closingTime: '02:00:00',
                  },
                  {
                    __typename: 'POCWorkingInterval',
                    openingTime: '09:50:00',
                    closingTime: '23:59:00',
                  },
                ],
              },
            ],
            address: {
              __typename: 'POCAddress',
              address1: 'Rua Américo Brasiliense',
              address2: null,
              number: '1781',
              city: 'São Paulo',
              province: 'SP',
              zip: '01457005',
              coordinates: '{"type": "Point", "coordinates": [-46.703635899999995, -23.6305321]}',
            },
            phone: {
              __typename: 'POCPhone',
              phoneNumber: '1143272169',
            },
          },
        ],
      },
    },
  },
];

describe('<Home />', () => {
  it('should render without error', () => {
    let root;
    act(() => {
      root = create(
        <MockedProvider mocks={mocks} addTypename>
          <Home />
        </MockedProvider>,
      );
    });

    expect(root.toJSON()).toMatchSnapshot();
  });
});
