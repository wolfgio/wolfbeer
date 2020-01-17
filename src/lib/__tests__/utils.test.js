// import wait from 'waait';
import { renderHook, act } from '@testing-library/react-hooks';

import { useDebounce, formatCurrency } from '../utils';

jest.useFakeTimers();

describe('useDebounce', () => {
  it('returns value after debounce', async () => {
    const {
      result,
    } = renderHook(() => useDebounce(300));

    const value = 'testValue';

    act(() => {
      result.current.setValue(value);
    });

    act(() => jest.advanceTimersByTime(300));

    expect(result.current.debouncedValue).toBe(value);
  });

  it('not update before debounce', async () => {
    const {
      result,
    } = renderHook(() => useDebounce(300));

    const value = 'testValue';

    act(() => {
      result.current.setValue(value);
    });

    act(() => jest.advanceTimersByTime(200));

    expect(result.current.debouncedValue).not.toBe(value);
  });
});

describe('formatCurrency', () => {
  it('returns given amount in currency format', () => {
    const formatedValue = formatCurrency(10);
    expect(formatedValue).toBe('R$ 10,00');
  });

  it('returns invalid when amount is NaN', () => {
    const formatedValue = formatCurrency('a');
    expect(formatedValue).toBe('invalid');
  });
});
