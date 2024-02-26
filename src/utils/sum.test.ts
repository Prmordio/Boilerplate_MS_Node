import sum from './sum';

describe('utils test', () => {
  test('should error sum', () => {
    const soma = sum(1, 1);
    expect(soma).toBe(2);
  });
});
