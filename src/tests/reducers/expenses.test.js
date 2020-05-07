import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '4'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add expense', () => {
  var expense = {
    id: '5',
    description: 'desc',
    note: 'note',
    amount: 29500,
    createAt: 20000
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense: expense
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses.concat(expense));
  expect(state).toEqual([...expenses, expense]); // spread operator
});

test('should edit expense', () => {
  const amount = 122000;
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      amount: amount
    }
  };

  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toBe(amount);
});

test('should edit expense if expense not found', () => {
  const amount = 122000;
  const action = {
    type: 'EDIT_EXPENSE',
    id: '1233',
    updates: {
      amount: amount
    }
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses); 
});