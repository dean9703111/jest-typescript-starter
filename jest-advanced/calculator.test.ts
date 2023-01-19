import { sum, minus, multiply, divide } from "./calculator";

describe("測試加法", () => {
  test("1 + 1 = 2", () => {
    expect(sum(1, 1)).toBe(2);
  });
  test("3 + 3 = 7", () => {
    expect(sum(3, 4)).toBe(7);
  });
});

describe("測試減法", () => {
  test("5 - 1 = 4", () => {
    expect(minus(5, 1)).toBe(4);
  });
  test("3 - 3 = 0", () => {
    expect(minus(3, 3)).toBe(0);
  });
});

describe("測試乘法", () => {
  test("1 * 5 = 5", () => {
    expect(multiply(1, 5)).toBe(5);
  });
  test("3 * 3 = 9", () => {
    expect(multiply(3, 3)).toBe(9);
  });
});

describe("測試除法", () => {
  test("6 / 2 = 3", () => {
    expect(divide(6, 2)).toBe(3);
  });
  test("3 / 2 = 1.5", () => {
    expect(divide(3, 2)).toBe(1.5);
  });
});
