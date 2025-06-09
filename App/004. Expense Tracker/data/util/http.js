import axios from 'axios';

const { BACKEND_URL } = process.env;

// 지출 내역 저장하기
export async function storeExpense(expenseData) {
  const response = await axios.post(
    BACKEND_URL + '/expenses.json',
    expenseData
  );

  const id = response.data.name;

  return id;
}

// 지출 내역 가져오기
export async function fetchExpenses() {
  const response = await axios.get(BACKEND_URL + '/expenses.json');

  const expenses = [];

  for (const key in response.data) {
    const expenseObject = {
      id: key,
      amount: response.data[key].amount,
      date: response.data[key].date,
      description: response.data[key].description,
    };

    expenses.push(expenseObject);
  }

  return expenses;
}

// 지출 내역 업데이트하기
export async function updateExpense(id, expenseData) {
  return axios.put(BACKEND_URL + `/expenses/${id}.json`, expenseData);
}

// 지출 내역 삭제하기
export async function deleteExpense(id) {
  return axios.delete(BACKEND_URL + `/expenses/${id}.json`);
}
