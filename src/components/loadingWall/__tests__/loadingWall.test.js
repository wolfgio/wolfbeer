import React from 'react';
import { create, act } from 'react-test-renderer';

import LoadingWall from '../loadingWall';
import { SpinnerIcon } from '../styles';
import ReloadIcon from '../../../assets/reload.png';

describe('<LoadingCard />', () => {
  it('should render without error', () => {
    let root;
    act(() => {
      root = create(<loadingWall loading />);
    });

    expect(root.toJSON()).toMatchSnapshot();
  });

  it('should render spinner', () => {
    let testRenderer;
    act(() => {
      testRenderer = create(<LoadingWall loading />);
    });

    const testInstance = testRenderer.root;
    expect(testInstance.findByType(SpinnerIcon).props.src).toBe(ReloadIcon);
  });

  it('should not render', () => {
    let testRenderer;
    act(() => {
      testRenderer = create(<LoadingWall loading={false} />);
    });

    const testInstance = testRenderer.root;
    expect(testInstance.children).toStrictEqual([]);
  });
});
