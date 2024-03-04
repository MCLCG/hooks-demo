import { useState, useMemo } from 'react';

// 定义用户的行为
export interface UserAction<T> {
  set: (value: T) => void;
  // 状态向左切换,切换到第一个
  setLeft: () => void;
  setRight: () => void;
  toggle: () => void;
}

// 不传参的ts定义
function useToggle<T = boolean>(): [boolean, UserAction<boolean>];

// 什么样子的传参/返回值
function useToggle<T>(defaultValue: T): [T, UserAction<T>];
// 两个值之间的切换
function useToggle<T, U>(defaultValue: T, reverseValue: U): [T | U, UserAction<T | U>];

// 实现功能
// D = false表示可以不传
function useToggle<D, R>(defaultValue: D = false as unknown as D, reverseValue?: R) {
  const [state, setState] = useState<D | R>(defaultValue);

  const actions = useMemo(() => {
    const reverseValueOrigin = (reverseValue === undefined ? !defaultValue : reverseValue) as D | R;

    const set = (value) => setState(value);
    const toggle = () => setState((s) => (s === defaultValue ? reverseValueOrigin : defaultValue));
    const setLeft = () => setState(defaultValue);
    const setRight = () => setState(reverseValueOrigin);

    return {
      set,
      setLeft,
      setRight,
      toggle,
    };
  }, []);
  return [state, actions];
}

export default useToggle;
