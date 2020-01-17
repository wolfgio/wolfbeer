import React from 'react';
import { create, act } from 'react-test-renderer';

import LoadingCard from '../loadingCard';

describe('<LoadingCard />', () => {
  it('should render without error', () => {
    let root;
    act(() => {
      root = create(<LoadingCard />);
    });

    expect(root.toJSON()).toMatchSnapshot();
  });
});
