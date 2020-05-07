
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 10, createAt: -1000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Quan', amount: 310, createAt: 1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// // console.log(expenseOne);

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 2500 }));
// store.dispatch(setTextFilter('rent'));
// // store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(2000));
// store.dispatch(setStartDate());

// store.dispatch(setEndDate(9999));
// store.dispatch(setEndDate());

const demoState = {
  expenses: [
    {
      id: "001",
      description: 'My first description',
      note: 'This is my note',
      amount: 54500,
      createAt: 0
    },
    {
      id: "002",
      description: 'My second description',
      note: 'This is second note',
      amount: 54500,
      createAt: 0
    }
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
};


// === spreading object

// const user = {
//   name: 'Quan',
//   age: 24
// };

// console.log({
//   ...user,
//   location: 'Ha Noi', // new property
//   age: 26 // override property value
// });