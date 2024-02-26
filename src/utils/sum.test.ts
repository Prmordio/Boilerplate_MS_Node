import sum from './sum';

describe('utils test', () => {
  test('should error sum', () => {
    const soma = sum(1, 2);
    expect(soma).toBe(2);
  });
});
