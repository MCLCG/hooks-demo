import * as hooks from '..';

describe('hooks is defined', () => {
  test('hooks should be defined', () => {
    // 成功表示所有的模块都被导出定义了
    Object.keys(hooks).forEach((module) => {
      expect(hooks[module]).toBeDefined();
    });
  });
});
