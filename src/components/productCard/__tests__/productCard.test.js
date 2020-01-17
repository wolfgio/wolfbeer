import React from 'react';
import { create, act } from 'react-test-renderer';
import {
  render,
  fireEvent,
  cleanup,
} from '@testing-library/react';

import ProductCard from '../productCard';

const mock = {
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
};

afterEach(cleanup);

describe('<ProductCard />', () => {
  it('should render without error', () => {
    let root;
    const onClick = jest.fn();

    act(() => {
      root = create(
        <ProductCard
          product={mock}
          onAddProduct={onClick}
          onRemoveProduct={onClick}
        />,
      );
    });

    expect(root.toJSON()).toMatchSnapshot();
  });

  it('should fire callback if product is not selected', () => {
    const onClick = jest.fn();

    const { getByText } = render(
      <ProductCard
        isSelected={false}
        product={mock}
        onAddProduct={onClick}
        onRemoveProduct={onClick}
      />,
    );

    fireEvent.click(getByText('Adicionar'));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should return mocked data on callback', () => {
    let product;
    const onClick = (data) => {
      product = data;
    };

    const { getByText } = render(
      <ProductCard
        isSelected={false}
        product={mock}
        onAddProduct={onClick}
        onRemoveProduct={onClick}
      />,
    );

    fireEvent.click(getByText('Adicionar'));

    expect(product).toBe(mock);
  });

  it('should not fire callback if product is selected', () => {
    const onClick = jest.fn();

    const { getByText } = render(
      <ProductCard
        isSelected
        product={mock}
        onAddProduct={onClick}
        onRemoveProduct={onClick}
      />,
    );

    fireEvent.click(getByText('Adicionar'));

    expect(onClick).toHaveBeenCalledTimes(0);
  });
});
