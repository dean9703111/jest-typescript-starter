import axios from "axios";
export async function fetchData() {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/todos`);
  return response;
}

export function hideComplete(data) {
  data = data.filter(function (value: { completed: boolean }) {
    return value.completed === false;
  });
  return data;
}
