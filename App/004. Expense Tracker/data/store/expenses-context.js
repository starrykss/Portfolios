import { createContext, useReducer } from 'react';

// const DUMMY_EXPENSES = [
//   {
//     id: 'e1',
//     description: 'A pair of shoes',
//     amount: 59.99,
//     date: new Date('2025-05-25'),
//   },
//   {
//     id: 'e2',
//     description: 'A pair of trousers',
//     amount: 89.99,
//     date: new Date('2022-01-05'),
//   },
//   {
//     id: 'e3',
//     description: 'Some bananas',
//     amount: 5.99,
//     date: new Date('2021-12-01'),
//   },
//   {
//     id: 'e4',
//     description: 'A book',
//     amount: 14.99,
//     date: new Date('2022-02-19'),
//   },
//   {
//     id: 'e5',
//     description: 'Another book',
//     amount: 18.59,
//     date: new Date('2022-02-18'),
//   },
//   {
//     id: 'e6',
//     description: 'A pair of shoes',
//     amount: 59.99,
//     date: new Date('2021-12-19'),
//   },
//   {
//     id: 'e7',
//     description: 'A pair of trousers',
//     amount: 89.99,
//     date: new Date('2022-01-05'),
//   },
//   {
//     id: 'e8',
//     description: 'Some bananas',
//     amount: 5.99,
//     date: new Date('2021-12-01'),
//   },
//   {
//     id: 'e9',
//     description: 'A book',
//     amount: 14.99,
//     date: new Date('2022-02-19'),
//   },
//   {
//     id: 'e10',
//     description: 'Another book',
//     amount: 18.59,
//     date: new Date('2022-02-18'),
//   },
// ];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  setExpenses: (expenses) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      // const id = new Date().toString() + Math.random().toString();
      // return [{ ...action.payload, id: id }, ...state];
      return [action.payload, ...state];

    case 'SET':
      // 정렬 (Firebase에서는 최신 데이터가 맨 마지막에 쌓이는 구조)
      const inverted = action.payload.reverse();
      return inverted;

    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );

      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;

      return updatedExpenses;

    case 'DELETE':
      return state.filter((expense) => expense.id !== action.payload);

    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, []);

  function addExpense(expenseData) {
    dispatch({ type: 'ADD', payload: expenseData });
  }

  function setExpenses(expenses) {
    dispatch({ type: 'SET', payload: expenses });
  }

  function deleteExpense(id) {
    dispatch({ type: 'DELETE', payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    setExpenses: setExpenses,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
