import React from 'react';
import { create, act } from 'react-test-renderer';

import Footer from '../footer';

describe('<Footer />', () => {
  it('should render without error', () => {
    let root;
    act(() => {
      root = create(<Footer />);
    });

    expect(root.toJSON()).toMatchSnapshot();
  });
});
