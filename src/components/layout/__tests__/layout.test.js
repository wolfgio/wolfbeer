import React from 'react';
import { create, act } from 'react-test-renderer';

import Layout from '../layout';

describe('<LoadingCard />', () => {
  it('should render without error', () => {
    let root;
    act(() => {
      root = create(<Layout />);
    });

    expect(root.toJSON()).toMatchSnapshot();
  });
});
