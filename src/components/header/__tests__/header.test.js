import React from 'react';
import { create, act } from 'react-test-renderer';

import Header from '../header';

describe('<Header />', () => {
  it('should render without error', () => {
    let root;
    act(() => {
      root = create(<Header />);
    });

    expect(root.toJSON()).toMatchSnapshot();
  });
});
