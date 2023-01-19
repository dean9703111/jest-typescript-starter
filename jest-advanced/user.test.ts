import user from "./user";
const userDB: user[] = [];

const insertTestData = (name: string) => {
  const User = new user();
  User.name = name;
  userDB.push(User);
};

const clearTestData = () => {
  userDB.length = 0;
};

beforeAll(() => {
  insertTestData("baobao");
  insertTestData("mochi");
});

describe("baoboa 分數計算", () => {
  beforeEach(() => {
    userDB[0].score = 60;
  });

  test("60 + 10 為 70 分", () => {
    userDB[0].addScore();
    expect(userDB[0].score).toBe(70);
  });
  test("60 - 10 為 50 分", () => {
    userDB[0].minusScore();
    expect(userDB[0].score).toBe(50);
  });
});

describe("mochi 分數計算", () => {
  beforeEach(() => {
    userDB[1].score = 60;
  });

  test("60 + 10 為 70 分", () => {
    userDB[1].addScore();
    expect(userDB[1].score).toBe(70);
  });
  test("60 - 10 為 50 分", () => {
    userDB[1].minusScore();
    expect(userDB[1].score).toBe(50);
  });
});

afterAll(() => {
  clearTestData();
});
