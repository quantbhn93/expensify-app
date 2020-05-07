import moment from 'moment';

// get visible expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    // const startDateMatch = typeof startDate !== 'number' || expense.createAt >= startDate;
    // const endDateMatch = typeof endDate !== 'number' || expense.createAt <= endDate;

    const createAtMoment = moment(expense.createAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createAtMoment, 'day') : true;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createAt < b.createAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1; 
    }
  });
};

// import moment from 'moment';

// // Get visible expenses

// export default (expenses, { text, sortBy, startDate, endDate }) => {
//   return expenses.filter((expense) => {
//     const createdAtMoment = moment(expense.createdAt);
//     const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
//     const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
//     const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

//     return startDateMatch && endDateMatch && textMatch;
//   }).sort((a, b) => {
//     if (sortBy === 'date') {
//       return a.createdAt < b.createdAt ? 1 : -1;
//     } else if (sortBy === 'amount') {
//       return a.amount < b.amount ? 1 : -1;
//     }
//   });
// };
