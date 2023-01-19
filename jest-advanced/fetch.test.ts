import { fetchData, hideComplete } from "./fetch";
import axios from "axios";
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
// 模擬我們期望收到的資料結構
const data = [
  {
    userId: 1,
    id: 1,
    title: "task 1",
    completed: false,
  },
  {
    userId: 2,
    id: 2,
    title: "task 2",
    completed: true,
  },
];

test("確認結果被替換成模擬資料", async () => {
  mockedAxios.get.mockResolvedValue(data);
  const result = await fetchData();
  expect(result).toEqual(data);
});

test("驗證資料格式", async () => {
  mockedAxios.get.mockResolvedValue(data);
  const result = await fetchData();
  expect(typeof result[0].userId).toBe("number");
  expect(typeof result[0].id).toBe("number");
  expect(typeof result[0].title).toBe("string");
  expect(typeof result[0].completed).toBe("boolean");
});

test("測試 hideComplete 函式運作", async () => {
  mockedAxios.get.mockResolvedValue(data);
  let result = await fetchData();
  result = hideComplete(result);
  expect(result[0].completed).toBe(false);
});
