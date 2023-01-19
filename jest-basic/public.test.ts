import { sum, doSomething } from './public';

test('測試 8 + 9 等於 17', () => {
    expect(sum(8, 9)).toBe(17);
});

test('toBe 匹配器其實能取代許多 Matcher', () => {
    expect(1 + 2).toBe(3);
    expect(null).toBe(null);
    expect(null).toBeNull();
    expect(undefined).toBe(undefined);
    expect(undefined).toBeUndefined();
});

test('toEqual 主要是比對物件', () => {
    const data = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
});

test('toBeCloseTo 用來處理小數點', () => {
    const value = 0.1 + 0.2;
    // 有小數點的請使用 toBeCloseTo，否則會有 rounding error
    // expect(value).toBe(0.3);
    expect(value).toBeCloseTo(0.3); // This works.
});

test('透過 toMatch 確認「stop」是否存在於字串', () => {
    expect('Christoph').toMatch(/stop/);
});

test('toContain 會透過迭代來確認陣列是否存在某值', () => {
    const shoppingList = [
        'diapers',
        'kleenex',
        'trash bags',
        'paper towels',
        'milk',
    ];
    expect(shoppingList).toContain('milk');
});

test('toThrow 可以用來檢核錯誤訊息', () => {
    expect(() => doSomething()).toThrow();
    expect(() => doSomething()).toThrow(Error);
    expect(() => doSomething()).toThrow('Something wrong');
    expect(() => doSomething()).toThrow(/wrong/);
    expect(() => doSomething()).toThrow(/^Something wrong!$/);// 若要求完全相同
});