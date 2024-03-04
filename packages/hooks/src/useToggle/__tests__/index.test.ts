import { renderHook, act } from '@testing-library/react';
import useToggle from '../index';

// renderHook相当于执行hook
// act相当于代码的执行

const callToggle = (hook: any) => {
  // act执行一个函数
  act(() => {
    hook.result.current[1].toggle();
  });
};

describe('useToggle', () => {
  // 想象用户会怎么使用这个hook

  // 是否能使用基本的api,不传参版本
  it('test on init', async () => {
    const hook = renderHook(() => useToggle());
    // 期望结果是false
    // console.log('hook', hook);
    expect(hook.result.current[0]).toBeFalsy();
  });

  // 传递一个参数的使用场景
  it('test on methods', async () => {
    const hook = renderHook(() => useToggle('Hello'));
    // 返回的第一个结果应当是hello
    expect(hook.result.current[0]).toBe('Hello');

    // 执行toggle代码
    console.log('hook.result.current[0]1', hook.result.current[0]);
    callToggle(hook);
    // 返回的结果应当是false
    console.log('hook.result.current[0]2', hook.result.current[0]);
    expect(hook.result.current[0]).toBeFalsy();

    // setLeft
    act(() => {
      hook.result.current[1].setLeft();
    });
    expect(hook.result.current[0]).toBe('Hello');

    // setRight
    act(() => {
      hook.result.current[1].setRight();
    });
    // 下面两种写法都可
    // expect(hook.result.current[0]).toBeFalsy();
    expect(hook.result.current[0]).toBe(false);
  });

  // 多个参数
  it('test on optional', () => {
    const hook = renderHook(() => useToggle('Hello', 'World'));
    callToggle(hook);
    expect(hook.result.current[0]).toBe('World');

    act(() => {
      hook.result.current[1].set('World');
    });
    expect(hook.result.current[0]).toBe('World');

    callToggle(hook);
    expect(hook.result.current[0]).toBe('Hello');
  });
});
