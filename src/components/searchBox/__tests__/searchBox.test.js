import React from 'react';
import { create, act } from 'react-test-renderer';

import SearchBox from '../searchBox';

describe('<SearchBox />', () => {
  it('should render without error', () => {
    let root;
    act(() => {
      root = create(<SearchBox />);
    });

    expect(root.toJSON()).toMatchSnapshot();
  });
});
